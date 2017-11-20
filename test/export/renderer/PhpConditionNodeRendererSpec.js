'use strict';

/**
 * Requirements
 */
const PhpConditionNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpConditionNodeRenderer.js').PhpConditionNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpConditionNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpConditionNodeRenderer, 'export.renderer/PhpConditionNodeRenderer', undefined, require('./RendererHelper.js').options());
});
