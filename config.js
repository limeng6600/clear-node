const os = require('os')

const config = {
  app: {
    env: 'development',
    port: 9000
  }
//   storage: {
//     user: 'kill8268',
//     password: '',
//     host: '192.168.1.246',
//     port: 5432,
//     database: 'hengda',
//     pool: {
//       min: os.cpus().length,
//       max: os.cpus().length * 2,
//       idle: 10000,
//       acquire: 30000
//     },
//     logging: true
//   },
//   mongodb: {
//     url: 'mongodb://192.168.1.247:27017',
//     database: 'hengda'
//   }
}

module.exports = config