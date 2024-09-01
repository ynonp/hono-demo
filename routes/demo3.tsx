import { Hono } from "hono";

const router = new Hono();

const View = () => {
  return (
    <html>
      <body>
        <h1>Hello Hono!</h1>
      </body>
    </html>
  )
}

router.get('/', (c) => {
  return c.html(<View />)
})

export default router;