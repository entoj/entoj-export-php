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
        if (!node ||
            !configuration ||
            configuration.internal.skipNodes === true)
        {
            return Promise.resolve('');
        }
        let result = '';
        if (node.valueType === 'string')
        {
            result+= '\'' + node.value.replace(/"/g, '\\"') + '\'';
        }
        else if (node.valueType === 'undefined')
        {
            result+= 'null';
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
