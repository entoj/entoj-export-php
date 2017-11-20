'use strict';

// Requirements
const Configuration = require('entoj-system').export.Configuration;
const PhpModuleConfiguration = require('../configuration/PhpModuleConfiguration.js').PhpModuleConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;


/**
 * @memberOf export.fluid
 * @extends export.Configuration
 */
class PhpConfiguration extends Configuration
{
    /**
     * @ignore
     */
    constructor(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, phpConfiguration)
    {
        super(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration);

        // Check params
        assertParameter(this, 'phpConfiguration', phpConfiguration, true, PhpModuleConfiguration);

        // Assign options
        this._phpConfiguration = phpConfiguration;
        this._identifier = 'php';
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/PhpConfiguration';
    }


    /**
     * @type {configuration.PhpConfiguration}
     */
    get phpConfiguration()
    {
        return this._phpConfiguration;
    }


    /**
     * @inheritDocs
     */
    refineConfiguration(configuration)
    {
        configuration.php = this.phpConfiguration;
        if (configuration.macro)
        {
            configuration.filename = this.settings.filename;
            if (!configuration.filename)
            {
                configuration.filename = configuration.entity.pathString.substr(1);
            }
        }
        else
        {
            configuration.filename = this.settings.filename;
            if (!configuration.filename)            
            {
                configuration.filename = configuration.entity.pathString.substr(1);
            }
        }
        return Promise.resolve(configuration);
    }
}


// Exports
module.exports.PhpConfiguration = PhpConfiguration;
