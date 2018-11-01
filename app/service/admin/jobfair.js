'use strict';

const { CrudService } = require('naf-framework-mongoose/lib/service');

class JobfairService extends CrudService {
  constructor(ctx) {
    super(ctx);
    this.model = this.ctx.model.Jobfair;
  }

}

module.exports = JobfairService;
