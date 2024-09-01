import { expect } from "jsr:@std/expect";
import demo1 from '../routes/demo1.ts';

// basic test
Deno.test("simple test", async () => {  
  const res = await demo1.request('/text')
  expect(res.status).toBe(200)
  expect(await res.text()).toBe('Hello Hono!')
});