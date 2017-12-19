'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 * Render a static array value
 *
 * @memberOf export.renderer
 * @extends Base
 */
class PhpArrayNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpArrayNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('ArrayNode'));
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
            result+= 'array(';
            for (let index = 0; index < node.children.length; index++)
            {
                result+= index;
                result+= ' => ';
                result+= yield configuration.renderer.renderNode(node.children[index], configuration);
                if (index < node.children.length - 1)
                {
                    result+= ', ';
                }
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
module.exports.PhpArrayNodeRenderer = PhpArrayNodeRenderer;
