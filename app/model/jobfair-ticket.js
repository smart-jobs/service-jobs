/**
 * 招聘会入场门票
 */
'use strict';
const Schema = require('mongoose').Schema;
const metaPlugin = require('naf-framework-mongoose/lib/model/meta-plugin');

const SchemaDefine = {
  userid: { type: String, required: true, maxLength: 64 }, // 注册用户ID
  fair_id: { type: String, required: true, maxLength: 64 }, // 招聘会ID
  type: { type: String, required: true, maxLength: 64, default: '0' }, // 类型: 0-普通门票、1-临时门票(受限)
  origin: { type: String, required: true, maxLength: 64, default: '0' }, // 用户类型: 0-本校、1-外校
  user: {
    id: String, // 注册用户ID
    name: String, // 用户姓名
    xm: String, // 用户姓名
    xb: String, // 用户性别
    yxdm: String, // 所在院校代码
    yxmc: String, // 所在院校名称
    zydm: String, // 专业代码
    zymc: String, // 专业名称
    xldm: String, // 学历代码
    xl: String, // 学历
  },
  verify: { // 门票验证记录
    status: { type: String, default: '0' }, // 验证状态: 0-未用、1-已用
    time: Date, // 扫码时间
    device: String, // 扫码设备标识（小程序用户的openid）,
  },
};
const schema = new Schema(SchemaDefine, { toJSON: { virtuals: true } });
schema.index({ fair_id: 1 });
schema.index({ fair_id: 1, type: 1, origin: 1 }); // 招聘会-门票类型-用户来源
schema.index({ userid: 1 });
schema.index({ userid: 1, fair_id: 1 }, { unique: true });
schema.plugin(metaPlugin);

module.exports = app => {
  const { mongoose } = app;
  return mongoose.model('JobfairTicket', schema, 'jobs_jobfair_ticket');
};
