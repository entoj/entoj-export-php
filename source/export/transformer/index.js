/**
 * @namespace export.renderer
 */
module.exports =
{
    transformerList:
    [
        [
            require('entoj-system').export.transformer.RemoveLoadModelTransformer,
            require('entoj-system').export.transformer.DecorateVariableNameTransformer,
            require('entoj-system').export.transformer.InlineMacroCallTransformer
        ],
        [
            require('entoj-system').export.transformer.RemoveYieldTransformer
        ]
    ]
};
