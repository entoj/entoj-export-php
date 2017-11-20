'use strict';

/**
 * Requirements
 */
const PhpArrayNodeRenderer = require(PHP_SOURCE + '/export/renderer/PhpArrayNodeRenderer.js').PhpArrayNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpArrayNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpArrayNodeRenderer, 'export.renderer/PhpArrayNodeRenderer', undefined, require('./RendererHelper.js').options());
});
