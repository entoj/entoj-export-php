'use strict';

/**
 * Exports
 * @ignore
 */
module.exports.options = function(dynamic)
{
    const result =
    {
        configurationCreator: function(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration)
        {
            const PhpModuleConfiguration = require(PHP_SOURCE + '/configuration/PhpModuleConfiguration.js').PhpModuleConfiguration;
            const PhpConfiguration = require(PHP_SOURCE + '/export/PhpConfiguration.js').PhpConfiguration;
            const moduleConfiguration = new PhpModuleConfiguration(global.fixtures.globalConfiguration);
            return new PhpConfiguration(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, moduleConfiguration);
        },
        basePath: PHP_FIXTURES + '/nodeRenderer'
    };
    if (dynamic === true)
    {
        result.createFixture = require('entoj-system/test').fixture.project.createDynamic;
    }
    return result;
};
