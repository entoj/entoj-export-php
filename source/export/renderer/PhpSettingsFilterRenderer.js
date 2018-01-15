'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const co = require('co');


/**
 *
 */
class PhpSettingsFilterRenderer extends NodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.noderenderer.fluid/PhpSettingsFilterRenderer';
    }

    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('FilterNode') && node.name == 'settings');
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
            const key = (yield configuration.renderer.renderNode(node.value, configuration)).replace(/'/g, '');
            let result = '';
            if (configuration.settings &&
                configuration.settings.settings &&
                configuration.settings.settings[key])
            {
                result = configuration.settings.settings[key];
            }
            else
            {
                result+= 'entoj_' +  node.name + '(';
                result+= '\'' + key + '\'';
                result+= ')';
            }
            return result;
        }).catch(ErrorHandler.handler(this));
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpSettingsFilterRenderer = PhpSettingsFilterRenderer;
