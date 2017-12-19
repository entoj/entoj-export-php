'use strict';

// Requirements
const Transformer = require('entoj-system').export.Transformer;

/**
 * @memberOf export
 * @extends export.Transformer
 */
class PhpTransformer extends Transformer
{
    /**
     * @param {Array} nodeTransformers
     */
    constructor(nodeTransformers)
    {
        super(nodeTransformers);
    }

    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/PhpTransformer';
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': ['export/PhpTransformer.nodeTransformers'] };
    }
}


// Exports
module.exports.PhpTransformer = PhpTransformer;
