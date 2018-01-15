'use strict';

/**
 * Requirements
 */
const PhpRenderer = require(PHP_SOURCE + '/export/PhpRenderer.js').PhpRenderer;
const PhpConfiguration = require(PHP_SOURCE + '/export/PhpConfiguration.js').PhpConfiguration;
const PhpModuleConfiguration = require(PHP_SOURCE + '/configuration/PhpModuleConfiguration.js').PhpModuleConfiguration;
const PhpNodeRenderers = require(PHP_SOURCE + '/export/renderer/index.js');
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
    const fixtureConfiguration =
    {
        settings:
        {
        }
    };
    const testFixtures =
    {
        'should render conditions': 'conditions',
        'should render loops': 'loops',
        'should render filter': 'filter',
        'should render assignments': 'assignments',
        'should render calls': 'calls'
    };
    const options =
    {
        configurationCreator: function(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration)
        {
            const moduleConfiguration = new PhpModuleConfiguration(global.fixtures.globalConfiguration, global.fixtures.buildConfiguration);
            return new PhpConfiguration(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, moduleConfiguration);
        },
        fixtureInputPath: PHP_FIXTURES + '/renderer',
        fixtureExpectedPath: PHP_FIXTURES + '/renderer',
        createFixture: () => projectFixture.createDynamic(fixtureConfiguration)
    };
    const prepareParameters = (parameters) =>
    {
        global.fixtures.context.di.map('nunjucks.filter/ImageUrlFilter.dataProperties', ['src']);
        global.fixtures.context.di.map('nunjucks.filter/LinkUrlFilter.dataProperties', ['url']);
        const classes = PhpNodeRenderers.rendererList;
        const nodeRenderers = global.fixtures.context.createInstances(classes);
        return [nodeRenderers];
    };
    rendererSpec(PhpRenderer, 'export/PhpRenderer', prepareParameters, testFixtures, options);
});
