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


    /**
     * @inheritDocs
     */
    __render(node, configuration)
    {
        if (!node)
        {
            return Promise.resolve('');
        }
        const scope = this;
        const promise = co(function*()
        {
            let source = '';
            source+= yield scope.renderPreface(configuration);
            source+= yield scope.renderNode(node, configuration);
            source+= yield scope.renderPostface(configuration);
            return source;
        }); 
        return promise;
    }    
}


// Exports
module.exports.PhpRenderer = PhpRenderer;
