'use strict';

/**
 * Requirements
 * @ignore
 */
const PhpExporter = require('../export/PhpExporter.js').PhpExporter;
const ExportTask = require('entoj-system').task.ExportTask;
const GlobalRepository = require('entoj-system').model.GlobalRepository;
const EntitiesRepository = require('entoj-system').model.entity.EntitiesRepository;
const CliLogger = require('entoj-system').cli.CliLogger;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const VinylFile = require('vinyl');
const co = require('co');


/**
 * @memberOf task
 */
class PhpExportTask extends ExportTask
{
    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [CliLogger, EntitiesRepository, GlobalRepository, PhpExporter] };
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'task/PhpExportTask';
    }


    /**
     * @inheritDoc
     */
    get sectionName()
    {
        return 'Exporting php files';
    }


    /**
     * @inheritDoc
     */
    get exportName()
    {
        return 'php';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpExportTask = PhpExportTask;
