'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 * Render groups of nodes used in expressions
 *
 * @memberOf export.fluid.renderer
 * @extends Base
 */
class PhpGroupNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpGroupNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('GroupNode'));
    }


    /**
     * @inheritDocs
     */
    render(node, configuration)
    {
        if (!node || 
            !configuration || 
            configuration.internal.skipNodes === true)
        {
            return Promise.resolve('');
        }
        const promise = co(function*()
        {
            let result = '';
            result+= '(';
            for (const child of node.children)
            {
                result+= yield configuration.renderer.renderNode(child, configuration);
            }
            result+= ')';
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpGroupNodeRenderer = PhpGroupNodeRenderer;
