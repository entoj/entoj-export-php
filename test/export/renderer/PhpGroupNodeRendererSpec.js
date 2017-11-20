'use strict';

/**
 * Requirements
 */
const PhpGroupNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpGroupNodeRenderer.js').PhpGroupNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpGroupNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpGroupNodeRenderer, 'export.renderer/PhpGroupNodeRenderer', undefined, require('./RendererHelper.js').options());
});
