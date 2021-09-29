// module.exports = {
//   reactStrictMode: true,
// }


const path = require('path')
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    // backendURL: 'http://localhost:5000/api',
    // backendURL: 'http://localhost:5000/api',
    backendURL: process.env.DB_BACKENDURL+'/api',
    appURL: process.env.APP_URL
  }
}