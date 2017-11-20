'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 *
 */
class PhpSetNodeTenaryRenderer extends NodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.renderer/PhpSetNodeTenaryRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node &&
            node.is('SetNode') &&
            node.value &&
            node.value.find('IfNode'));
    }


    /**
     * @return {Promise<String>}
     */
    render(node, configuration)
    {
        const promise = co(function*()
        {
            const ifNode = node.value.find('IfNode');
            let result = '';
            result+= '<?php ';
            result+= yield configuration.renderer.renderNode(node.variable, configuration);
            result+= ' = ';
            result+= yield configuration.renderer.renderNode(ifNode.condition, configuration);            
            result+= ' ? ';
            result+= yield configuration.renderer.renderList(ifNode.children, configuration);            
            result+= ' : ';            
            result+= yield configuration.renderer.renderList(ifNode.elseChildren, configuration);            
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
module.exports.PhpSetNodeTenaryRenderer = PhpSetNodeTenaryRenderer;
