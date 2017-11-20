'use strict';

/**
 * Requirements
 */
const PhpEmptyFilterRenderer = require(PHP_SOURCE + '/export/renderer/PhpEmptyFilterRenderer.js').PhpEmptyFilterRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpEmptyFilterRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpEmptyFilterRenderer, 'export.renderer/PhpEmptyFilterRenderer', undefined, require('./RendererHelper.js').options());
});
