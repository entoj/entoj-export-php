'use strict';

/**
 * Requirements
 */
const PhpExporter = require(PHP_SOURCE + '/export/PhpExporter.js').PhpExporter;
const PhpModuleConfiguration = require(PHP_SOURCE + '/configuration/PhpModuleConfiguration.js').PhpModuleConfiguration;
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
        const fixture = projectFixture.createStatic(true);
        const fluidModuleConfiguration = new PhpModuleConfiguration(fixture.globalConfiguration);
        if (parameters && parameters.length)
        {
            parameters.push(fluidModuleConfiguration);
            return parameters;
        }
        else
        {
            return [fixture.globalRepository, fixture.buildConfiguration, fluidModuleConfiguration];
        }
    }

    exporterSpec(PhpExporter, 'export/PhpExporter', prepareParameters);
});
