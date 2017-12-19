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
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const VinylFile = require('vinyl');
const co = require('co');


/**
 * @memberOf task
 */
class PhpExportTask extends ExportTask
{
    /**
     * @param {cli.CliLogger} cliLogger
     * @param {model.GlobalRepository} globalRepository
     */
    constructor(cliLogger, globalRepository, buildConfiguration, phpExporter)
    {
        super(cliLogger, globalRepository, phpExporter);
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
        return 'Exporting php files';
    }


    /**
     * @inheritDocs
     */
    get exportName()
    {
        return 'php';
    }


    /**
     * @returns {Promise<VinylFile>}
     */
    renderEntity(entity, entitySettings, buildConfiguration, parameters)
    {
        if (!entity)
        {
            this.logger.warn(this.className + '::renderEntity - No entity given');
            return Promise.resolve(false);
        }

        const scope = this;
        const promise = co(function *()
        {
            // Prepare
            const settings = entitySettings || {};
            const macroName = settings.macro || false;
            const siteName = entity.site.name;
            const entityName = entity.idString;

            // Export
            let workMessage = 'Exporting <' + entity.pathString + '>';
            if (macroName)
            {
                workMessage+= ' / macro <' + macroName + '>';
            }
            const work = scope.cliLogger.work(workMessage);
            const exported = yield scope.exporter.export(siteName, entityName, macroName, settings);
            scope.cliLogger.end(work);

            // Done
            const file = new VinylFile(
                {
                    path: exported.configuration.filename,
                    contents: new Buffer(exported.contents)
                });
            return [file];
        }).catch(ErrorHandler.handler(scope));
        return promise;
    }    
}


/**
 * Exports
 * @ignore
 */
module.exports.PhpExportTask = PhpExportTask;
