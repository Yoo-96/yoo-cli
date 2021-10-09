#!/usr/bin/env node
/**
 *@BelongsProject: y-cli
 *@Author: yoo
 *@CreateTime: 2021-10-09 11:19
 *@Description: y-cli-add.js
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
    message: '请输入模版名称',
    validate (val) {
      if (val === '') {
        return '名称不能为空'
      } else if (templateJson[val]) {
        return `${val} 模版已存在`
      } else {
        return true
      }
    }
  },
  {
    name: "url",
    type: 'input',
    message: "请输入模板地址",
    validate (val) {
      if (val === '') return 'The url is required!'
      return true
    }
  }
];

inquirer
  .prompt(question)
  .then(answers => {
    // answers: 用户输入内容
    const { name, url } = answers;
    // 过滤 unicode 字符
    templateJson[name] = url.replace(/[\u0000-\u0019]/g, '');

    // 把模板信息写入 template.json 文件中
    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(templateJson), 'utf-8', err => {
      if (err) console.log(err);
      console.log('\n');
      console.log(chalk.green('模版添加成功!\n'));
      console.log(chalk.grey('当前模版列表: \n'));
      console.log(templateJson);
      console.log('\n');
    });

  });
