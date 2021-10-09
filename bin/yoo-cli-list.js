#!/usr/bin/env node
/**
 *@BelongsProject: y-cli
 *@Author: yoo
 *@CreateTime: 2021-10-09 11:20
 *@Description: y-cli-list.js
 */

// 交互式命令行
const inquirer = require('inquirer');
// 修改控制台字符串的样式
const chalk = require('chalk');
// node 内置文件模块
// 读取模版
const templateJson = require(`${__dirname}/../template`);

console.log('\n');
console.log(chalk.grey('当前模版列表: \n'));
console.log(templateJson);
console.log('\n');
