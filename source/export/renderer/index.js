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
    PhpVariableNodeRenderer: require('./PhpVariableNodeRenderer.js').PhpVariableNodeRenderer,
    PhpTextNodeRenderer: require('entoj-system').export.renderer.TextNodeRenderer,

    // Fallback
    PhpAnyNodeRenderer: require('entoj-system').export.renderer.AnyNodeRenderer
};
