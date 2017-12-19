'use strict';

// Requirements
const Exporter = require('entoj-system').export.Exporter;
const GlobalRepository = require('entoj-system').model.GlobalRepository;
const BuildConfiguration = require('entoj-system').model.configuration.BuildConfiguration;
const JinjaParser = require('entoj-system').export.parser.JinjaParser;
const PhpRenderer = require('./PhpRenderer.js').PhpRenderer;
const PhpTransformer = require('./PhpTransformer.js').PhpTransformer;
const PhpConfiguration = require('./PhpConfiguration.js').PhpConfiguration;
const PhpModuleConfiguration = require('../configuration/PhpModuleConfiguration.js').PhpModuleConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;
const co = require('co');


/**
 * @memberOf export
 * @extends export.Renderer
 */
class PhpExporter extends Exporter
{
    /**
     * @ignore
     */
    constructor(globalRepository, buildConfiguration, phpConfiguration, renderer, transformer)
    {
        super(globalRepository, buildConfiguration, new JinjaParser(), renderer, transformer);

        // Check params
        assertParameter(this, 'phpConfiguration', phpConfiguration, true, PhpModuleConfiguration);

        // Assign options
        this._phpConfiguration = phpConfiguration;
        this._configurationClass = PhpConfiguration;
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/PhpExporter';
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': [GlobalRepository, BuildConfiguration, PhpModuleConfiguration, PhpRenderer, PhpTransformer] };
    }


    /**
     * @type {configuration.PhpConfiguration}
     */
    get phpConfiguration()
    {
        return this._phpConfiguration;
    }


    /**
     * @protected
     * @param {model.entity.EntityAspect} entity
     * @param {model.documentation.DocumentationCallable} macro
     * @param {Object} settings
     * @returns {Configuration}
     */
    createConfigurationInstance(entity, macro, settings)
    {
        return new this._configurationClass(entity, macro, settings,
            this.parser, this.renderer, this.transformer,
            this.globalRepository, this.buildConfiguration, this.phpConfiguration);
    }


    /**
     * @returns {Promise<Object>}
     */
    __export(siteQuery, entityQuery, macroQuery, settings)
    {
        const scope = this;
        const promise = co(function *()
        {
            const result =
            {
                configuration: false,
                contents: ''
            };

            // Create configuration
            const configuration = yield scope.createConfiguration(macroQuery, entityQuery, siteQuery, settings);
            result.configuration = yield configuration.getExportConfiguration();

            // Parse macro
            let rootNode = false;
            if (configuration.macro)
            {
                rootNode = yield scope.parser.parseMacro(configuration.macro.name, configuration);
            }
            else
            {
                rootNode = yield scope.parser.parseTemplate(configuration.entity, configuration);
            }
            if (rootNode === false)
            {
                /* istanbul ignore next */
                throw new Error(scope.className + '::transform - could not parse macro / template');
            }

            // Transform parsed nodes
            yield scope.transformer.reset(configuration);
            const transformedRootNode = yield scope.transformer.transform(rootNode, configuration);
            if (!transformedRootNode)
            {
                /* istanbul ignore next */
                throw new Error(scope.className + ':transform - could not transform parsed node');
            }

            // Render transformed nodes
            if (rootNode.find('YieldNode'))
            {
                configuration.internal.skipNodes = false;
                yield scope.renderer.reset(configuration);
                result.contents = yield scope.renderer.render(transformedRootNode, configuration);
            }
            else
            {
                yield scope.renderer.reset(configuration);
                result.contents = yield scope.renderer.render(transformedRootNode, configuration);
            }

            //Done
            return result;
        });
        return promise;
    }
}


// Exports
module.exports.PhpExporter = PhpExporter;
