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


/**
 * @memberOf export
 * @extends export.Renderer
 */
class PhpExporter extends Exporter
{
    /**
     * @ignore
     */
    constructor(globalRepository, buildConfiguration, fluidConfiguration)
    {
        super(globalRepository, buildConfiguration, new JinjaParser(), new PhpRenderer(), new PhpTransformer());

        // Check params
        assertParameter(this, 'fluidConfiguration', fluidConfiguration, true, PhpModuleConfiguration);

        // Assign options
        this._fluidConfiguration = fluidConfiguration;
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
        return { 'parameters': [GlobalRepository, BuildConfiguration, PhpModuleConfiguration] };
    }


    /**
     * @type {configuration.PhpConfiguration}
     */
    get fluidConfiguration()
    {
        return this._fluidConfiguration;
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
            this.globalRepository, this.buildConfiguration, this.fluidConfiguration);
    }
}


// Exports
module.exports.PhpExporter = PhpExporter;
