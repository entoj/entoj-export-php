'use strict';

// Requirements
const Renderer = require('entoj-system').export.Renderer;
const renderers = require('./renderer/index.js');


/**
 * @memberOf export
 * @extends export.Renderer
 */
class PhpRenderer extends Renderer
{
    /**
     * @ignore
     */
    constructor(nodeRenderers, options)
    {
        let instances = nodeRenderers;
        if (!instances || !instances.length)
        {
            instances = Object.keys(renderers).map(function(name)
            {
                return new renderers[name]();
            });
        }
        super(instances, options);
    }

    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/PhpRenderer';
    }
}


// Exports
module.exports.PhpRenderer = PhpRenderer;
