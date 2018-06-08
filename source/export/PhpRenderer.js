'use strict';

// Requirements
const Renderer = require('entoj-system').export.Renderer;
const co = require('co');


/**
 * @memberOf export
 * @extends export.Renderer
 */
class PhpRenderer extends Renderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/PhpRenderer';
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': ['export/PhpRenderer.nodeRenderers', 'export/PhpRenderer.options'] };
    }
}


// Exports
module.exports.PhpRenderer = PhpRenderer;
