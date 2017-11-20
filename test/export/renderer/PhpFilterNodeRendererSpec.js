'use strict';

/**
 * Requirements
 */
const PhpFilterNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpFilterNodeRenderer.js').PhpFilterNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpFilterNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpFilterNodeRenderer, 'export.renderer/PhpFilterNodeRenderer', undefined, require('./RendererHelper.js').options());
});
