#!/usr/bin/env node
/**
 *@BelongsProject: y-cli
 *@Author: yoo
 *@CreateTime: 2021-10-09 11:20
 *@Description: y-cli-init.js
 */

const program = require('commander');
const chalk = require('chalk');
const ora = require('ora');
const download = require('download-git-repo');
const templateJson = require(`${__dirname}/../template`);


program
  .usage('<template-name> [project-name]');

program.parse(process.argv);

if (!program.args.length) {
  return program.help();
}

// 好比 vue init webpack project-name 的命令一样，第一个参数是 webpack，第二个参数是 project-name
const templateName = program.args[0];
const projectName = program.args[1];

if (!templateJson[templateName]) {
  console.log(chalk.red('\n 模版不存在'));
  return;
}

if (!projectName) {
  console.log(chalk.red('\n 项目名称不能为空'));
  return;
}

const url = templateJson[templateName];

console.log(chalk.white('\n 项目加载中... \n'));
// 出现加载图标
const spinner = ora("Downloading...");
spinner.start();

download(
  url,
  projectName,
  err => {
    if (err) {
      spinner.fail();
      console.log(chalk.red(`加载失败，${err}`));
      return;
    }
    spinner.succeed();
    console.log(chalk.green('\n 加载完成！'));
    console.log(chalk.green('\n 开始使用吧'));
    console.log(chalk.green(`cd ${projectName} \n`))
  }
);
