'use strict';

/**
 * Requirements
 */
const PhpOperandNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpOperandNodeRenderer.js').PhpOperandNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpOperandNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpOperandNodeRenderer, 'export.renderer/PhpOperandNodeRenderer', undefined, require('./RendererHelper.js').options());
});
