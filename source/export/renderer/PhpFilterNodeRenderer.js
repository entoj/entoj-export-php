'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const co = require('co');


/**
 * Renders view helpers
 *
 * @memberOf export.renderer
 * @extends Base
 */
class PhpFilterNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpFilterNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('FilterNode'));
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
            result+= 'entoj_' +  node.name + '(';
            result+= yield configuration.renderer.renderNode(node.value, configuration);
            if (node.arguments)
            {
                for (const index of node.arguments.keys())
                {
                    const argument = node.arguments[index];
                    result+= ', ';
                    result+= yield configuration.renderer.renderNode(argument.value, configuration);
                }
            }

            result+= ')';
            return result;
        }).catch(ErrorHandler.handler(this));
        return promise;
    }
}


// Exports
module.exports.PhpFilterNodeRenderer = PhpFilterNodeRenderer;
