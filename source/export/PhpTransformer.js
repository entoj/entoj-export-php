'use strict';

// Requirements
const Transformer = require('entoj-system').export.Transformer;
const transformers = require('./transformer/index.js');

/**
 * @memberOf export
 * @extends export.Transformer
 */
class PhpTransformer extends Transformer
{
    /**
     * @ignore
     */
    constructor()
    {
        const instances = Object.keys(transformers).map(function(name)
        {
            return new transformers[name]();
        });
        super(instances);
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/PhpTransformer';
    }
}


// Exports
module.exports.PhpTransformer = PhpTransformer;
