'use strict';

/**
 * Requirements
 * @ignore
 */
const Base = require('entoj-system').Base;
const GlobalConfiguration = require('entoj-system').model.configuration.GlobalConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;


/**
 * @memberOf configuration
 */
class PhpModuleConfiguration extends Base
{
    /**
     * @param  {model.configuration.GlobalConfiguration} globalConfiguration
     */
    constructor(globalConfiguration)
    {
        super();

        //Check params
        assertParameter(this, 'globalConfiguration', globalConfiguration, true, GlobalConfiguration);

        // Create configuration
        this._exportPath = globalConfiguration.get('php.exportPath', '${cache}/php/export');
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': [GlobalConfiguration] };
    }


    /**
     * @inheritDocss
     */
    static get className()
    {
        return 'configuration/PhpModuleConfiguration';
    }


    /**
     * The path to the folder where files are exported to
     *
     * @type {String}
     */
    get exportPath()
    {
        return this._exportPath;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpModuleConfiguration = PhpModuleConfiguration;
