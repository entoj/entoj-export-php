'use strict';

/**
 * Requirements
 */
const PhpMacroNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpMacroNodeRenderer.js').PhpMacroNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpMacroNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpMacroNodeRenderer, 'export.renderer/PhpMacroNodeRenderer', undefined, require('./RendererHelper.js').options(true));
});
