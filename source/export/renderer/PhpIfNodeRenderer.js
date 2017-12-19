'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 * Render if tags
 *
 * @memberOf export.renderer
 * @extends Base
 */
class PhpIfNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpIfNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('IfNode'));
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

            // ... ? ... : ....
            if (node.parent && node.parent.is('ExpressionNode'))
            {
                result+= '(';
                result+= yield configuration.renderer.renderNode(node.condition, configuration);
                result+= ') ';
                result+= '? (';
                result+= yield configuration.renderer.renderList(node.children, configuration);
                result+= ') ';
                result+= ': (';
                result+= yield configuration.renderer.renderList(node.elseChildren, configuration);
                result+= ')';
            }
            // If ...
            else if (!node.elseChildren.length && !node.elseIfChildren.length)
            {
                result+= '<?php if (';
                result+= yield configuration.renderer.renderNode(node.condition, configuration);
                result+= ') { ?>';
                result+= yield configuration.renderer.renderList(node.children, configuration);
                result+= '<?php } ?>';
            }
            // If ... elseif... else ...
            else
            {
                result+= '<?php if (';
                result+= yield configuration.renderer.renderNode(node.condition, configuration);
                result+= ') { ?>';
                result+= yield configuration.renderer.renderList(node.children, configuration);
                if (node.elseIfChildren.length)
                {
                    for (const elseIfNode of node.elseIfChildren)
                    {
                        result+= '<?php } elseif (';
                        result+= yield configuration.renderer.renderNode(elseIfNode.condition, configuration);
                        result+= ') { ?>';
                        result+= yield configuration.renderer.renderList(elseIfNode.children, configuration);
                    }
                }
                if (node.elseChildren.length)
                {
                    result+= '<?php } else { ?>';
                    result+= yield configuration.renderer.renderList(node.elseChildren, configuration);
                }
                result+= '<?php } ?>';
            }
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpIfNodeRenderer = PhpIfNodeRenderer;
