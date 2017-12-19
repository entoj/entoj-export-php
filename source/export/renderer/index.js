/**
 * @namespace export.renderer
 */
module.exports =
{
    // Filters
    PhpDefaultFilterRenderer: require('./PhpDefaultFilterRenderer.js').PhpDefaultFilterRenderer,
    PhpEmptyFilterRenderer: require('./PhpEmptyFilterRenderer.js').PhpEmptyFilterRenderer,
    PhpModuleClassesFilterRenderer: require('./PhpModuleClassesFilterRenderer.js').PhpModuleClassesFilterRenderer,

    // Standards
    PhpArrayNodeRenderer: require('./PhpArrayNodeRenderer.js').PhpArrayNodeRenderer,
    PhpBlockNodeRenderer: require('./PhpBlockNodeRenderer.js').PhpBlockNodeRenderer,
    PhpBooleanOperandNodeRenderer: require('./PhpBooleanOperandNodeRenderer.js').PhpBooleanOperandNodeRenderer,
    PhpCallNodeRenderer: require('./PhpCallNodeRenderer.js').PhpCallNodeRenderer,
    PhpComplexVariableNodeRenderer: require('./PhpComplexVariableNodeRenderer.js').PhpComplexVariableNodeRenderer,
    PhpConditionNodeRenderer: require('./PhpConditionNodeRenderer.js').PhpConditionNodeRenderer,
    PhpExpressionNodeRenderer: require('./PhpExpressionNodeRenderer.js').PhpExpressionNodeRenderer,
    PhpFilterNodeRenderer: require('./PhpFilterNodeRenderer.js').PhpFilterNodeRenderer,
    PhpForNodeRenderer: require('./PhpForNodeRenderer.js').PhpForNodeRenderer,
    PhpGroupNodeRenderer: require('./PhpGroupNodeRenderer.js').PhpGroupNodeRenderer,
    PhpIfNodeRenderer: require('./PhpIfNodeRenderer.js').PhpIfNodeRenderer,
    PhpLiteralNodeRenderer: require('./PhpLiteralNodeRenderer.js').PhpLiteralNodeRenderer,
    PhpMacroNodeRenderer: require('./PhpMacroNodeRenderer.js').PhpMacroNodeRenderer,
    PhpOperandNodeRenderer: require('./PhpOperandNodeRenderer.js').PhpOperandNodeRenderer,
    PhpOutputNodeRenderer: require('./PhpOutputNodeRenderer.js').PhpOutputNodeRenderer,
    PhpSetNodeTenaryRenderer: require('./PhpSetNodeTenaryRenderer.js').PhpSetNodeTenaryRenderer,
    PhpSetNodeRenderer: require('./PhpSetNodeRenderer.js').PhpSetNodeRenderer,
    PhpSettingsFilterRenderer: require('./PhpSettingsFilterRenderer.js').PhpSettingsFilterRenderer,
    PhpTranslateFilterRenderer: require('./PhpTranslateFilterRenderer.js').PhpTranslateFilterRenderer,
    PhpVariableNodeRenderer: require('./PhpVariableNodeRenderer.js').PhpVariableNodeRenderer,
    PhpTextNodeRenderer: require('entoj-system').export.renderer.TextNodeRenderer,
    PhpYieldNodeRenderer: require('./PhpYieldNodeRenderer.js').PhpYieldNodeRenderer,

    // Fallback
    PhpAnyNodeRenderer: require('entoj-system').export.renderer.AnyNodeRenderer,

    // Renderers
    rendererList:
    [
        // Filters
        require('./PhpDefaultFilterRenderer.js').PhpDefaultFilterRenderer,
        require('./PhpEmptyFilterRenderer.js').PhpEmptyFilterRenderer,
        require('./PhpModuleClassesFilterRenderer.js').PhpModuleClassesFilterRenderer,
        require('./PhpTranslateFilterRenderer.js').PhpTranslateFilterRenderer,
        require('./PhpSettingsFilterRenderer.js').PhpSettingsFilterRenderer,

        // Standards
        require('./PhpArrayNodeRenderer.js').PhpArrayNodeRenderer,
        require('./PhpBlockNodeRenderer.js').PhpBlockNodeRenderer,
        require('./PhpBooleanOperandNodeRenderer.js').PhpBooleanOperandNodeRenderer,
        require('./PhpCallNodeRenderer.js').PhpCallNodeRenderer,
        require('./PhpComplexVariableNodeRenderer.js').PhpComplexVariableNodeRenderer,
        require('./PhpConditionNodeRenderer.js').PhpConditionNodeRenderer,
        require('./PhpExpressionNodeRenderer.js').PhpExpressionNodeRenderer,
        require('./PhpFilterNodeRenderer.js').PhpFilterNodeRenderer,
        require('./PhpForNodeRenderer.js').PhpForNodeRenderer,
        require('./PhpGroupNodeRenderer.js').PhpGroupNodeRenderer,
        require('./PhpIfNodeRenderer.js').PhpIfNodeRenderer,
        require('./PhpLiteralNodeRenderer.js').PhpLiteralNodeRenderer,
        require('./PhpMacroNodeRenderer.js').PhpMacroNodeRenderer,
        require('./PhpOperandNodeRenderer.js').PhpOperandNodeRenderer,
        require('./PhpOutputNodeRenderer.js').PhpOutputNodeRenderer,
        require('./PhpSetNodeTenaryRenderer.js').PhpSetNodeTenaryRenderer,
        require('./PhpSetNodeRenderer.js').PhpSetNodeRenderer,
        require('./PhpVariableNodeRenderer.js').PhpVariableNodeRenderer,
        require('entoj-system').export.renderer.TextNodeRenderer,
        require('./PhpYieldNodeRenderer.js').PhpYieldNodeRenderer,

        // Fallback
        require('entoj-system').export.renderer.AnyNodeRenderer
    ]
};
