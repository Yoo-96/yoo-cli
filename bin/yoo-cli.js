#!/usr/bin/env node
/**
 *@BelongsProject: y-cli
 *@Author: yoo
 *@CreateTime: 2021-10-09 11:18
 *@Description: y-cli.js
 */

const program = require('commander');

program
  .version(require('../package').version) // 指定当前版本
  .usage('<command> [options]') // 定义使用方式
  .command('add', 'add a new template') // 定义指令
  .command('delete', 'delete a template')
  .command('list', 'list all the templates')
  .command('init', 'generate a new project from a template');

// 解析命令行参数
program.parse(program.argv);
