#!/usr/bin/env node
/**
 *@BelongsProject: y-cli
 *@Author: yoo
 *@CreateTime: 2021-10-09 11:20
 *@Description: y-cli-delete.js
 */


// 交互式命令行
const inquirer = require('inquirer');
// 修改控制台字符串的样式
const chalk = require('chalk');
// node 内置文件模块
const fs = require('fs');
// 读取模版
const templateJson = require(`${__dirname}/../template`);

const question = [
  {
    name: 'name',
    type: 'input',
    message: '请输入要删除的模版',
    validate (val) {
      if (val === '') {
        return '名称不能为空'
      } else if (!templateJson[val]) {
        return `${val} 模版不存在`
      } else {
        return true
      }
    }
  },
];

inquirer
  .prompt(question)
  .then(answers => {
    // answers: 用户输入内容
    const { name } = answers;
    delete templateJson[name];

    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(templateJson), 'utf-8', err => {
      if (err) console.log(err);
      console.log('\n');
      console.log(chalk.green(`模版${name}, 删除成功!`));
      console.log(chalk.grey('当前剩余模版列表: \n'));
      console.log(templateJson);
      console.log('\n');
    })
  });

