'use strict';

/**
 * Requirements
 */
const PhpForNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpForNodeRenderer.js').PhpForNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpForNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpForNodeRenderer, 'export.renderer/PhpForNodeRenderer', undefined, require('./RendererHelper.js').options());
});
