'use strict';

/**
 * Requirements
 */
const PhpCallNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpCallNodeRenderer.js').PhpCallNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpCallNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpCallNodeRenderer, 'export.renderer/PhpCallNodeRenderer', undefined, require('./RendererHelper.js').options(true));
});
