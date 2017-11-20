'use strict';

/**
 * Requirements
 */
const PhpRenderer = require(PHP_SOURCE + '/export/PhpRenderer.js').PhpRenderer;
const PhpConfiguration = require(PHP_SOURCE + '/export/PhpConfiguration.js').PhpConfiguration;
const PhpModuleConfiguration = require(PHP_SOURCE + '/configuration/PhpModuleConfiguration.js').PhpModuleConfiguration;
const rendererSpec = require('entoj-system/test').export.RendererShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(PhpRenderer.className, function()
{
    /**
     * Renderer Test
     */
    const testFixtures =
    {
        //'should render conditions': 'conditions',
        //'should render loops': 'loops',
        //'should render filter': 'filter',
        'should render assignments': 'assignments',
        //'should render calls': 'calls'
    };
    const options =
    {
        configurationCreator: function(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration)
        {
            const fluidModuleConfiguration = new PhpModuleConfiguration(global.fixtures.globalConfiguration);
            return new PhpConfiguration(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, fluidModuleConfiguration);
        },
        basePath: PHP_FIXTURES + '/renderer',
        createFixture: projectFixture.createDynamic
    };
    rendererSpec(PhpRenderer, 'export/PhpRenderer', undefined, testFixtures, options);
});
