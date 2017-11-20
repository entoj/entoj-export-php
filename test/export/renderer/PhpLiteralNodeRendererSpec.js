'use strict';

/**
 * Requirements
 */
const PhpLiteralNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpLiteralNodeRenderer.js').PhpLiteralNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpLiteralNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpLiteralNodeRenderer, 'export.renderer/PhpLiteralNodeRenderer', undefined, require('./RendererHelper.js').options());
});
