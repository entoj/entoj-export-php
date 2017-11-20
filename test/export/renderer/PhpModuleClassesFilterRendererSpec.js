'use strict';

/**
 * Requirements
 */
const PhpModuleClassesFilterRenderer = require(PHP_SOURCE + '/export/renderer/PhpModuleClassesFilterRenderer.js').PhpModuleClassesFilterRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpModuleClassesFilterRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpModuleClassesFilterRenderer, 'export.renderer/PhpModuleClassesFilterRenderer', undefined, require('./RendererHelper.js').options());
});
