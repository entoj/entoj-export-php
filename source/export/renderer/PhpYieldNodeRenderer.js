'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;


/**
 * @memberOf export.fluid.renderer
 * @extends Base
 */
class PhpYieldNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpYieldNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('YieldNode'));
    }


    /**
     * @inheritDocs
     */
    render(node, configuration)
    {
        configuration.internal.skipNodes = true;
        return Promise.resolve();
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpYieldNodeRenderer = PhpYieldNodeRenderer;
