#!/usr/bin/env node
/**
 *@BelongsProject: y-cli
 *@Author: yoo
 *@CreateTime: 2021-10-09 11:18
 *@Description: y-cli.js
 */

const program = require('commander');

program
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('add', 'add a new template')
  .command('delete', 'delete a template')
  .command('list', 'list all the templates')
  .command('init', 'generate a new project from a template');

program.parse(program.argv);
