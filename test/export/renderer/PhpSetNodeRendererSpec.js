'use strict';

/**
 * Requirements
 */
const PhpSetNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpSetNodeRenderer.js').PhpSetNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpSetNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpSetNodeRenderer, 'export.renderer/PhpSetNodeRenderer', undefined, require('./RendererHelper.js').options());
});
