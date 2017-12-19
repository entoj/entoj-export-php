'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const co = require('co');


/**
 * Renders |empty filters
 */
class PhpEmptyFilterRenderer extends NodeListRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpEmptyFilterRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node &&
            node.is('FilterNode') &&
            (node.name == 'empty' || node.name == 'notempty') &&
            node.parent &&
            node.parent.is('ConditionNode'));
    }


    /**
     * @return {Promise<String>}
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
            if (node.name == 'empty')
            {
                result+= '!';
            }
            //result+= '{';
            result+= yield configuration.renderer.renderNode(node.value, configuration);
            //result+= '}';
            return result;
        }).catch(ErrorHandler.handler(this));
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpEmptyFilterRenderer = PhpEmptyFilterRenderer;
