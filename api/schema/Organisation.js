cube(`Organisation`, {
  sql: `SELECT * FROM public.organisation`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, country, name, createdat, updatedat]
    }
  },
  
  dimensions: {
    address: {
      sql: `address`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    numberofemployees: {
      sql: `${CUBE}."numberOfEmployees"`,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}."createdAt"`,
      type: `time`
    },
    
    updatedat: {
      sql: `${CUBE}."updatedAt"`,
      type: `time`
    }
  }
});
