'use strict';

/**
 * Requirements
 */
const PhpComplexVariableNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpComplexVariableNodeRenderer.js').PhpComplexVariableNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpComplexVariableNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpComplexVariableNodeRenderer, 'export.renderer/PhpComplexVariableNodeRenderer', undefined, require('./RendererHelper.js').options());
});
