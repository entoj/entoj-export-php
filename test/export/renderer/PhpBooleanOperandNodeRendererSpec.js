'use strict';

/**
 * Requirements
 */
const PhpBooleanOperandNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpBooleanOperandNodeRenderer.js').PhpBooleanOperandNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpBooleanOperandNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpBooleanOperandNodeRenderer, 'export.renderer/PhpBooleanOperandNodeRenderer', undefined, require('./RendererHelper.js').options());
});
