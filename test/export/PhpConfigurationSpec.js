'use strict';

/**
 * Requirements
 */
const PhpConfiguration = require(PHP_SOURCE + '/export/PhpConfiguration.js').PhpConfiguration;
const PhpModuleConfiguration = require(PHP_SOURCE + '/configuration/PhpModuleConfiguration.js').PhpModuleConfiguration;
const configurationSpec = require('entoj-system/test').export.ConfigurationShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(PhpConfiguration.className, function()
{
    /**
     * Configuration Test
     */
    function prepareParameters(parameters)
    {
        const fixture = projectFixture.createStatic(true);
        const phpModuleConfiguration = new PhpModuleConfiguration(fixture.globalConfiguration);
        if (parameters && parameters.length)
        {
            parameters.push(phpModuleConfiguration);
            return parameters;
        }
        else
        {
            return [undefined, undefined, {}, undefined, undefined, undefined, fixture.globalRepository, fixture.buildConfiguration, phpModuleConfiguration];
        }
    }

    configurationSpec(PhpConfiguration, 'export/PhpConfiguration', prepareParameters, { identifier: 'php' });
});
