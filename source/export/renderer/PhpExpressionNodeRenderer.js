'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;
const co = require('co');


/**
 * Render expressions used for e.g. in set tags
 *
 * @memberOf export.renderer
 * @extends Base
 */
class PhpExpressionNodeRenderer extends NodeListRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpExpressionNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('ExpressionNode'));
    }
}


// Exports
module.exports.PhpExpressionNodeRenderer = PhpExpressionNodeRenderer;
