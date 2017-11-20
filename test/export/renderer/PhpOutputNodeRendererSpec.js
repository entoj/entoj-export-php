'use strict';

/**
 * Requirements
 */
const PhpOutputNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpOutputNodeRenderer.js').PhpOutputNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpOutputNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpOutputNodeRenderer, 'export.renderer/PhpOutputNodeRenderer', undefined, require('./RendererHelper.js').options());
});
