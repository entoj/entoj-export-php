'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;


/**
 * @memberOf export.renderer
 * @extends Base
 */
class PhpLiteralNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpLiteralNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('LiteralNode'));
    }


    /**
     * @inheritDocs
     */
    render(node, configuration)
    {
        if (!node)
        {
            return Promise.resolve('');
        }
        let result = '';
        if (node.valueType == 'string')
        {
            result+= '\'' + node.value.replace(/\"/g, '\\"') + '\'';
        }
        else
        {
            result+= node.value;
        }
        return Promise.resolve(result);
    }
}


// Exports
module.exports.PhpLiteralNodeRenderer = PhpLiteralNodeRenderer;
