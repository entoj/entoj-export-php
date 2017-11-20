'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const MissingConfigurationError = require('entoj-system').error.MissingConfigurationError;
const co = require('co');


/**
 * Render a macro invocation
 *
 * @memberOf export.renderer
 * @extends Base
 */
class PhpCallNodeRenderer extends NodeRenderer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export.renderer/PhpCallNodeRenderer';
    }


    /**
     * @inheritDocs
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('CallNode'));
    }


    /**
     * @inheritDocs
     */
    render(node, configuration)
    {
        if (!node || !configuration)
        {
            return Promise.resolve('');
        }
        const promise = co(function*()
        {
            let result = '';
            const config = yield configuration.getMacroConfiguration(node.name);
            if (!config)
            {
                throw new MissingConfigurationError('CallNodeRenderer::render - no configuration for macro ' + node.name + ' found.');
            }
            result+= '<?php entoj_render';
            if (node.children && node.children.length)
            {
                result+= '_start';
            }
            result+= '(\'' + config.filename + '\'';
            if (node.arguments)
            {
                result+= ', array(';
                for (let index = 0; index < node.arguments.length; index++)
                {
                    const param = node.arguments[index];
                    result+= '\'' + param.name + '\' => ';
                    result+= yield configuration.renderer.renderNode(param.value, configuration);
                    if (index < node.arguments.length - 1)
                    {
                        result+= ', ';
                    }
                }
                result+= ')';
            }

            if (!node.children || !node.children.length)
            {
                result+= ') ?>';
            }
            else
            {
                result+= ') ?>';
                result+= yield configuration.renderer.renderList(node.children, configuration);
                result+= '<?php entoj_render_end() ?>';
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
module.exports.PhpCallNodeRenderer = PhpCallNodeRenderer;
