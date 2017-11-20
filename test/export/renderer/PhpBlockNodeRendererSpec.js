'use strict';

/**
 * Requirements
 */
const PhpBlockNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpBlockNodeRenderer.js').PhpBlockNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpBlockNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpBlockNodeRenderer, 'export.renderer/PhpBlockNodeRenderer', undefined, require('./RendererHelper.js').options());
});
