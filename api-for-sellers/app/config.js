'use strict';

var environments = {
  production: {
    api: {
      host: '0.0.0.0',
      port: 80,
      clusterPidsDir: '/var/run/api-for-sellers',
      monPort: 3000
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'cef1daaf9aff03aadb3c6b6a17ab7555c0e6a0377cb9f746397851957b0859d7744f78e9495d7ce4496324c88251bad199b59c808df3b34f1ed5eb302d8a6737',
      credentialsRequired: false
    },
    logging: {
      name: 'api for sellers',
      level: 'error'
    }
  },

  development: {
    api: {
      host: 'localhost',
      port: 3000
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'cef1daaf9aff03aadb3c6b6a17ab7555c0e6a0377cb9f746397851957b0859d7744f78e9495d7ce4496324c88251bad199b59c808df3b34f1ed5eb302d8a6737',
      credentialsRequired: false
    },
    logging: {
      name: 'api for sellers',
      level: 'debug'
    }
  }
};


module.exports = environments[process.env.NODE_ENV] || environments.development;
