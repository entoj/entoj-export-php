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
    constructor(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, moduleConfiguration)
    {
        super(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration);

        // Check params
        assertParameter(this, 'moduleConfiguration', moduleConfiguration, true, PhpModuleConfiguration);

        // Assign options
        this._moduleConfiguration = moduleConfiguration;
        this._identifier = 'php';
        this._internal = {};
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
    get moduleConfiguration()
    {
        return this._moduleConfiguration;
    }


    /**
     * @type {Object}
     */
    get internal()
    {
        return this._internal;
    }


    /**
     * @inheritDocs
     */
    refineConfiguration(configuration)
    {
        configuration.php = this.moduleConfiguration;
        if (configuration.macro)
        {
            configuration.filename = this.settings.filename;
            if (!configuration.filename)
            {
                configuration.filename = configuration.entity.id.site.name.urlify();
                configuration.filename+= '/' + configuration.entity.id.category.pluralName.urlify();
                configuration.filename+= '/' + configuration.macro.name.urlify().replace(/_/g, '-');
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
        if (!configuration.filename.endsWith('.php'))
        {
            configuration.filename+= '.php';
        }
        configuration.include = configuration.filename.substr(0, configuration.filename.length - 4);
        return Promise.resolve(configuration);
    }
}


// Exports
module.exports.PhpConfiguration = PhpConfiguration;
