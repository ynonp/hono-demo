import { Hono } from 'hono'
import demo1 from './routes/demo1.ts';
import demo2 from './routes/demo2.ts';
import demo3 from './routes/demo3.tsx';

const app = new Hono()
app.route('demo1', demo1);
app.route('demo2', demo2);
app.route('demo3', demo3);

Deno.serve(app.fetch)
