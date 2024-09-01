import { Hono } from "hono";

const router = new Hono();
let counter = 0;

router.get('/text', (c) => {
  return c.text('Hello Hono!')
})

router.get('/api/hello', (c) => {
  return c.json({
    ok: true,
    message: 'Hello Hono!',
  })
})

router.get('/api/counter', (c) => {
  return c.json({    
    value: counter++,
  })
})

export default router;
