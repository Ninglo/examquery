const koa = require('koa')
const app = new koa()
const static = require('koa-static')

const indexRoute = require('./routes/index')

app.use(static(__dirname + '/static'))
app.use(indexRoute.routes())

app.listen(3000, () => {
  console.log('app is listening 3000 port.')
})
