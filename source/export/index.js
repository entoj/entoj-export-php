/**
 * @namespace export
 */
module.exports =
{
    PhpConfiguration: require('./PhpConfiguration.js').PhpConfiguration,
    PhpExporter: require('./PhpExporter.js').PhpExporter,
    PhpRenderer: require('./PhpRenderer.js').PhpRenderer,
    PhpTransformer: require('./PhpTransformer.js').PhpTransformer,
    transformer: require('./transformer/index.js'),    
    renderer: require('./renderer/index.js')
};
