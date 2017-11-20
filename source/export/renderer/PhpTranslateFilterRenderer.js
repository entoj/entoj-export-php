'use strict';

/**
 * Requirements
 * @ignore
 */
const BaseNode = require('../../node/BaseNode.js').BaseNode;
const BaseNodeRenderer = require('../BaseNodeRenderer.js').BaseNodeRenderer;
const co = require('co');


/**
 *
 */
class PhpTranslateFilterRenderer extends BaseNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.noderenderer.fluid/TranslateFilterRenderer';
    }


    /**
     * @return {Boolean}
     */
    isTranslateSet(node, configuration)
    {
        if (!(node instanceof BaseNode))
        {
            return false;
        }
        return node.is('SetNode') &&
               node.value &&
               node.value.is('ExpressionNode') &&
               node.value.children.length === 1 &&
               node.value.children[0].is('FilterNode') &&
               node.value.children[0].name == 'translate';
    }


    /**
     * @return {Promise<Boolean>}
     */
    isTranslateOutput(node, configuration)
    {
        if (!(node instanceof BaseNode))
        {
            return false;
        }
        return node.is('OutputNode') &&
               node.children.length === 1 &&
               node.children[0].is('FilterNode') &&
               node.children[0].name == 'translate';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(this.isTranslateSet(node, configuration) ||
            this.isTranslateOutput(node, configuration));
    }


    /**
     * @return {Promise<String>}
     */
    render(node, configuration)
    {
        const scope = this;
        const promise = co(function*()
        {
            let result = '';
            let key = '';
            const filter = (scope.isTranslateSet(node, configuration)) ? node.value.children[0] : node.children[0];
            if (filter.configuration &&
                filter.configuration.children &&
                filter.configuration.children.length)
            {
                key = yield scope.renderer.renderNode(filter.configuration.children[0].value, configuration);
            }
            else
            {
                key = yield scope.renderer.renderNode(filter.value, configuration);
            }
            key = key.replace(/'/g, '');
            result+= '<f:translate';
            if (scope.isTranslateSet(node, configuration))
            {
                result+= ' name="';
                result+= yield scope.renderer.renderNode(node.variable, configuration);
                result+= '"';
            }
            result+= ' key="' + key + '"';
            result+= ' />';

            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpTranslateFilterRenderer = PhpTranslateFilterRenderer;
