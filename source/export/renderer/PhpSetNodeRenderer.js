'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 * @memberOf export.fluid.renderer
 * @extends Base
 */
class PhpSetNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpSetNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('SetNode'));
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
            result+= '<?php ';
            result+= yield configuration.renderer.renderNode(node.variable, configuration);
            result+= ' = ';
            if (node.value)
            {
                result+= yield configuration.renderer.renderNode(node.value, configuration);                
            }
            else
            {
                result+= 'null';
            }
            result+= ' ?>';
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpSetNodeRenderer = PhpSetNodeRenderer;
