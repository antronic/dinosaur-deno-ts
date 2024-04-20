import { Application } from '@oak/oak'
import { Router }  from '@oak/oak/router'

const port = parseInt(Deno.env.get('PORT') || '9000', 10)
const router = new Router()

router.get('/', (ctx) => {
  ctx.response.body = { message: 'Hello from worker with Oak on Deno!' }
})

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

app.listen({ port })
console.log(`Worker running on ${port}`)