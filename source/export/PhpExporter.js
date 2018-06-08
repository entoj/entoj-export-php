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
    constructor(globalRepository, buildConfiguration, moduleConfiguration, renderer, transformer)
    {
        super(globalRepository, buildConfiguration, new JinjaParser(), renderer, transformer);

        // Check params
        assertParameter(this, 'moduleConfiguration', moduleConfiguration, true, PhpModuleConfiguration);

        // Assign options
        this._moduleConfiguration = moduleConfiguration;
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
    get moduleConfiguration()
    {
        return this._moduleConfiguration;
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
            this.globalRepository, this.buildConfiguration, this.moduleConfiguration);
    }
}


// Exports
module.exports.PhpExporter = PhpExporter;
