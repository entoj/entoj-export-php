'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const co = require('co');


/**
 * Render iterations
 *
 * @memberOf export.fluid.renderer
 * @extends Base
 */
class PhpForNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpForNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('ForNode'));
    }


    /**
     * @inheritDocs
     */
    render(node, configuration)
    {
        if (!node)
        {
            return Promise.resolve('');
        }
        const promise = co(function*()
        {
            let result = '';

            // Create iteration
            result+= '<?php $loop = array(\'length\' => count(), \'index\' => 0, \'isFirst\' => true, \'isLast\' => false); foreach(';
            result+= yield configuration.renderer.renderNode(node.value, configuration);
            result+= ' as ';
            if (node.keyName)
            {
                result+= '$' + node.keyName + ' => ';
            }
            result+= '$' + node.valueName;
            result+= ') { $loop[\'isFirst\'] = $loop[\'index\'] == 0; $loop[\'isLast\'] = $loop[\'index\'] == $loop[\'length\'] - 1; ?>';

            // Render children
            result+= yield configuration.renderer.renderList(node.children, configuration);

            // End Iteration
            result+= '<?php } ?>';

            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpForNodeRenderer = PhpForNodeRenderer;
