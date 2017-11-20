'use strict';

/**
 * Requirements
 */
const PhpDefaultFilterRenderer = require(PHP_SOURCE + '/export/renderer/PhpDefaultFilterRenderer.js').PhpDefaultFilterRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(PhpDefaultFilterRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    nodeRendererSpec(PhpDefaultFilterRenderer, 'export.renderer/PhpDefaultFilterRenderer', undefined, require('./RendererHelper.js').options());
});
