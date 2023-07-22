// @deno-types="npm:@types/express"
import express, { Request, Response } from 'npm:express'

const app = express()
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' })
})

app.listen(3000)