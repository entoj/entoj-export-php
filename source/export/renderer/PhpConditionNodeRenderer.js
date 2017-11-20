'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;


/**
 * Render conditions used in if tags
 *
 * @memberOf export.renderer
 * @extends Base
 */
class PhpConditionNodeRenderer extends NodeListRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpConditionNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('ConditionNode'));
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpConditionNodeRenderer = PhpConditionNodeRenderer;
