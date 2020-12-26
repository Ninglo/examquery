const Router = require('koa-router')
const axios = require('axios')

const router = new Router()

router.get('/s', (ctx) => {
  ctx.body = '233'
})

router.get('/api', async (ctx) => {
  let { question } = ctx.query
  question = encodeURI(question)
  const result = await axios({
    url: `https://user.fm210.cn/api/wk?token=bde1aa19489242778c6c6409990b965b&question=${question}`,
  })
  console.log(result.data)
  ctx.body = result.data
})

module.exports = router
