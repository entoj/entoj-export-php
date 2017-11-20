'use strict';

/**
 * Requirements
 */
const PhpVariableNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpVariableNodeRenderer.js').PhpVariableNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpVariableNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpVariableNodeRenderer, 'export.renderer/PhpVariableNodeRenderer', undefined, require('./RendererHelper.js').options());
});
