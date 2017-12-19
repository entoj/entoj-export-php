'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const Node = require('entoj-system').export.ast.Node;
const waitForPromise = require('entoj-system').utils.synchronize.waitForPromise;
const isPlainObject = require('lodash.isplainobject');


/**
 * Render objects
 *
 * @memberOf export.fluid.renderer
 * @extends Base
 */
class PhpComplexVariableNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpComplexVariableNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('ComplexVariableNode'));
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
        const render = (data) =>
        {
            if (!data)
            {
                return '';
            }

            let result = '';
            // Object
            if (isPlainObject(data))
            {
                result+= 'array(';
                const keys = Object.keys(data);
                for (let index = 0; index < keys.length; index++)
                {
                    const key = keys[index];
                    if (isPlainObject(data[key]) || Array.isArray(data[key]))
                    {
                        result+= '\'' + key + '\' => ' + render(data[key]);
                    }
                    else
                    {
                        result+= '\'' + key + '\' => ' + render(data[key]);
                    }
                    if (index < keys.length - 1)
                    {
                        result+= ', ';
                    }
                }
                result+= ')';
            }
            // Array
            else if (Array.isArray(data))
            {
                result+= 'array(';
                for (let index = 0; index < data.length; index++)
                {
                    result+= index + ' => ' + render(data[index]);
                    if (index < data.length - 1)
                    {
                        result+= ', ';
                    }
                }
                result+= ')';
            }
            // Simple
            else
            {
                if (typeof data === 'string')
                {
                    result+= '\'' + data + '\'';
                }
                else if (data instanceof Node)
                {
                    result+= waitForPromise(configuration.renderer.renderNode(data, configuration));
                }
                else
                {
                    result+= data;
                }
            }
            return result;
        };
        return Promise.resolve(render(node.value));
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpComplexVariableNodeRenderer = PhpComplexVariableNodeRenderer;
