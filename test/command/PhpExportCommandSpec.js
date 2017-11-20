'use strict';

/**
 * Requirements
 */
const PhpExportCommand = require(PHP_SOURCE + '/command/PhpExportCommand.js').PhpExportCommand;
const exportCommandSpec = require('entoj-system/test').command.ExportCommandShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(PhpExportCommand.className, function()
{
    /**
     * Command Test
     */
    function prepareParameters()
    {
        const fixture = projectFixture.createDynamic();
        return [fixture.context];
    }

    exportCommandSpec(PhpExportCommand, 'command/PhpExportCommand', prepareParameters, { action: 'fluid' });
});
