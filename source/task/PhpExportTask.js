'use strict';

/**
 * Requirements
 * @ignore
 */
const PhpExporter = require('../export/PhpExporter.js').PhpExporter;
const ExportTask = require('entoj-system').task.ExportTask;
const GlobalRepository = require('entoj-system').model.GlobalRepository;
const CliLogger = require('entoj-system').cli.CliLogger;
const BuildConfiguration = require('entoj-system').model.configuration.BuildConfiguration;


/**
 * @memberOf task
 */
class PhpExportTask extends ExportTask
{
    /**
     * @param {cli.CliLogger} cliLogger
     * @param {model.GlobalRepository} globalRepository
     */
    constructor(cliLogger, globalRepository, buildConfiguration, fluidExporter)
    {
        super(cliLogger, globalRepository, fluidExporter);
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': [CliLogger, GlobalRepository, BuildConfiguration, PhpExporter] };
    }


    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'task/PhpExportTask';
    }


    /**
     * @inheritDocs
     */
    get sectionName()
    {
        return 'Exporting fluid files';
    }


    /**
     * @inheritDocs
     */
    get exportName()
    {
        return 'fluid';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpExportTask = PhpExportTask;
