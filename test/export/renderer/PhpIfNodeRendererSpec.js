'use strict';

/**
 * Requirements
 */
const PhpIfNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpIfNodeRenderer.js').PhpIfNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpIfNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpIfNodeRenderer, 'export.renderer/PhpIfNodeRenderer', undefined, require('./RendererHelper.js').options());
});
