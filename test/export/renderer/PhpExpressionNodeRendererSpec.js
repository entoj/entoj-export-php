'use strict';

/**
 * Requirements
 */
const PhpExpressionNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpExpressionNodeRenderer.js').PhpExpressionNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpExpressionNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpExpressionNodeRenderer, 'export.renderer/PhpExpressionNodeRenderer', undefined, require('./RendererHelper.js').options());
});
