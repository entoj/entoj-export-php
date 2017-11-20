'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;


/**
 * @memberOf export.fluid.renderer
 * @extends Base
 */
class PhpOperandNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpOperandNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('OperandNode'));
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

        // When next or previous node is a string and operand is + then replace with .
        if (node.value === '+')
        {
            const previousNode = node.previous;
            if (previousNode && previousNode.is('LiteralNode') && previousNode.valueType === 'string')
            {
                return Promise.resolve(' . ');
            }
            const nextNode = node.next;
            if (nextNode && nextNode.is('LiteralNode') && nextNode.valueType === 'string')
            {
                return Promise.resolve(' . ');
            }
        }

        // Render operand
        return Promise.resolve(' ' + node.value + ' ');
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpOperandNodeRenderer = PhpOperandNodeRenderer;
