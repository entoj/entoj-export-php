'use strict';

/**
 * Requirements
 */
const PhpExporter = require(PHP_SOURCE + '/export/PhpExporter.js').PhpExporter;
const PhpModuleConfiguration = require(PHP_SOURCE + '/configuration/PhpModuleConfiguration.js').PhpModuleConfiguration;
const PhpRenderer = require(PHP_SOURCE + '/export/PhpRenderer.js').PhpRenderer;
const PhpTransformer = require(PHP_SOURCE + '/export/PhpTransformer.js').PhpTransformer;
const exporterSpec = require('entoj-system/test').export.ExporterShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(PhpExporter.className, function()
{
    /**
     * Configuration Test
     */
    function prepareParameters(parameters)
    {
        const fixture = projectFixture.createDynamic();
        const moduleConfiguration = fixture.context.di.create(PhpModuleConfiguration);
        const phpRenderer = fixture.context.di.create(PhpRenderer);
        const phpTransformer = fixture.context.di.create(PhpTransformer);        
        if (parameters && parameters.length)
        {
            parameters.push(moduleConfiguration, phpRenderer, phpTransformer);
            return parameters;
        }
        else
        {
            return [fixture.globalRepository, fixture.buildConfiguration, moduleConfiguration, phpRenderer, phpTransformer];
        }
    }

    exporterSpec(PhpExporter, 'export/PhpExporter', prepareParameters);
});
