/**
 * @namespace export.renderer
 */
module.exports =
{
    transformerList:
    [
        [
            require('entoj-system').export.transformer.RemoveLoadModelTransformer,
            //require('entoj-system').export.transformer.MapParametersTransformer,
            require('entoj-system').export.transformer.MapVariablesTransformer,
            require('entoj-system').export.transformer.InlineMacroCallTransformer
        ],
        [
            require('entoj-system').export.transformer.RemoveYieldTransformer
        ]
    ]
};
