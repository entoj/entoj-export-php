'use strict';

/**
 * Requirements
 * @ignore
 */
const ExportCommand = require('entoj-system').command.ExportCommand;
const Context = require('entoj-system').application.Context;
const PhpExportTask = require('../task/PhpExportTask.js').PhpExportTask;
const PhpModuleConfiguration = require('../configuration/PhpModuleConfiguration.js').PhpModuleConfiguration;
const BeautifyHtmlTask = require('entoj-html').task.BeautifyHtmlTask;


/**
 * @memberOf command
 */
class PhpExportCommand extends ExportCommand
{
    /**
     * @param {application.Context} context
     */
    constructor(context)
    {
        super(context);

        // Assign options
        this._exportName = 'php';
        this._moduleConfigurationClass = PhpModuleConfiguration;
        this._exportTaskClass = PhpExportTask;
        this._loggerPrefix = 'command.export.php';
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [Context] };
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'command/PhpExportCommand';
    }


    /**
     * @inheritDocs
     */
    __addTasks(task, mapping)
    {
        if (!task)
        {
            return Promise.resolve();
        }
        return Promise.resolve(task.pipe(this.context.di.create(BeautifyHtmlTask, mapping)));
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpExportCommand = PhpExportCommand;
