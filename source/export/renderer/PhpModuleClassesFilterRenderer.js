'use strict';

// Requirements
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const co = require('co');
const VinylFile = require('vinyl');



/**
 * Renders |moduleClasses filter
 */
class PhpModuleClassesFilterRenderer extends NodeListRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/PhpModuleClassesFilterRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node &&
            node.is('FilterNode') &&
            node.name == 'moduleClasses');
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
            let moduleClass = '\'\'';
            if (node.arguments && node.arguments.length == 1)
            {
                const argument = node.arguments[0];
                moduleClass = yield configuration.renderer.renderNode(argument.value, configuration);
            }
            let result = '';
            result+= 'entoj_module_classes(';
            result+= yield configuration.renderer.renderNode(node.value, configuration);
            result+= ', ';
            result+= moduleClass;
            result+= ')';
            return result;
        }).catch(ErrorHandler.handler(this));
        return promise;
    }
}


// Exports
module.exports.PhpModuleClassesFilterRenderer = PhpModuleClassesFilterRenderer;
