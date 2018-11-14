/**
 * 招聘信息
 */
'use strict';
const Schema = require('mongoose').Schema;
const { CodeNamePair } = require('naf-framework-mongoose/lib/model/schema');
const metaPlugin = require('naf-framework-mongoose/lib/model/meta-plugin');

// 校园招聘信息
const SchemaDefine = {
  corpid: { type: String, required: false, maxLength: 64 }, // 企业ID，如果非注册企业可为空，注册企业不能为空
  corpname: { type: String, required: true, maxLength: 128 }, // 企业名称
  status: { type: String, default: '1', maxLength: 64 }, // 状态: 0-正常(审核通过)；1-申请发布；2-审核失败
  title: { type: String, required: true, maxLength: 128 }, // 标题
  content: { type: String, required: true, maxLength: 10240 }, // 详情
  city: CodeNamePair, // 工作城市
  date: { type: String, required: false }, // 发布日期，格式：YYYY-MM-DD
  unit: { type: String, required: true }, // 发布单位（学校代码）
  expiredAt: { type: Date }, // 信息失效时间
  remark: { type: String, maxLength: 500 } // 备注

};
const schema = new Schema(SchemaDefine, { 'multi-tenancy': true });
schema.index({ status: 1 });
schema.index({ 'corp._id': 1 });
schema.plugin(metaPlugin);

module.exports = app => {
  const { mongoose } = app;
  return mongoose.model('Jobinfo', schema, 'jobs_jobinfo');
};
