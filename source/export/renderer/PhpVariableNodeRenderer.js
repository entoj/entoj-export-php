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
class PhpVariableNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpVariableNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('VariableNode'));
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
        // Loop variables
        if (node.isChildOf('ForNode') && node.fields[0] === 'loop' && node.fields.length === 2)
        {
            result+= '@$loop[';
            if (node.fields[1] === 'first')
            {
                result+= '\'isFirst\'';
            }
            else if (node.fields[1] === 'last')
            {
                result+= '\'isLast\'';
            }
            else
            {
                result+= '\'' + node.fields[1] + '\'';
            }
            result+= ']';
        }
        // Standard variables
        else
        {
            let isFirst = true;
            for (const field of node.fields)
            {
                if (typeof field == 'number')
                {
                    result+= '[' + field + ']';
                }
                else
                {
                    if (isFirst)
                    {
                        result+= '@$' + field;                        
                    }
                    else
                    {
                        result+= '[\'' + field + '\']';                        
                    }
                }
                isFirst = false;
            }
        }

        return Promise.resolve(result);
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpVariableNodeRenderer = PhpVariableNodeRenderer;
