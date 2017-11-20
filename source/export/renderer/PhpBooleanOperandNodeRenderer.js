'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;


/**
 * Render boolean operands in conditions
 *
 * @memberOf export.renderer
 * @extends Base
 */
class PhpBooleanOperandNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpBooleanOperandNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('BooleanOperandNode'));
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
        let operator = node.value;
        switch(operator.toLowerCase())
        {
            case 'or':
                operator = ' || ';
                break;

            case 'and':
                operator = ' && ';
                break;

            case 'not':
                operator = '!';
                break;
        }
        return Promise.resolve(operator);
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpBooleanOperandNodeRenderer = PhpBooleanOperandNodeRenderer;
