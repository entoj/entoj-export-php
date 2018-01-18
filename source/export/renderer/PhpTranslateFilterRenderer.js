'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeRenderer = require('entoj-system').export.renderer.NodeRenderer;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const TranslationsRepository = require('entoj-system').model.translation.TranslationsRepository;
const VinylFile = require('vinyl');
const co = require('co');


/**
 *
 */
class PhpTranslateFilterRenderer extends NodeRenderer
{
    /**
     * @inheritDoc
     */
    constructor(translationsRepository)
    {
        super();

        this._translationsRepository = translationsRepository;
        this.keys = {};
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [TranslationsRepository] };
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'transformer.noderenderer.fluid/TranslateFilterRenderer';
    }


    /**
     * @type {TranslationsRepository}
     */
    get translationsRepository()
    {
        return this._translationsRepository;
    }


    /**
     * @inheritDoc
     */
    createAdditionalFiles(configuration, stage)
    {
        const result = [];
        if (stage == 'finalize')
        {
            let contents = '';
            contents+= '<?php\n';
            for (const key in this.keys)
            {
                contents+= 'pll_register_string(\'' + this.keys[key] + '\', \'' + key + '\', \'theme\', true);\n';
            }
            contents+= ' ?>';
            const file = new VinylFile(
                {
                    path: 'include/translations.php',
                    contents: new Buffer(contents)
                });
            result.push(file);
        }
        return Promise.resolve(result);
    }


    /**
     * @inheritDoc
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('FilterNode') && node.name == 'translate');
    }


    /**
     * @inheritDoc
     */
    render(node, configuration)
    {
        if (!node ||
            !configuration ||
            configuration.internal.skipNodes === true)
        {
            return Promise.resolve('');
        }
        const scope = this;
        const promise = co(function*()
        {
            // Get key
            const key = (yield configuration.renderer.renderNode(node.value, configuration)).replace(/'/g, '');

            // Store translation string
            const translation = yield scope.translationsRepository.findBy({ name: key });
            scope.keys[key] = translation
                ? translation.value
                : key;

            // Generate php
            let result = '';
            if (configuration.settings &&
                configuration.settings.translate &&
                configuration.settings.translate[key])
            {
                result = configuration.settings.translate[key];
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
module.exports.PhpTranslateFilterRenderer = PhpTranslateFilterRenderer;
