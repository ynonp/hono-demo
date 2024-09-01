import { Hono } from "hono";

const router = new Hono();

router.get('hello', (c) => {
  const name = c.req.query('name') ?? 'Guest';
  return c.text(`Hello! ${name}`);
});

router.post('item', async (c) => {
  const props = await c.req.json();
  console.log(props);
  return c.json(props);
})

export default router;
