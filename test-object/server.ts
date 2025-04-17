import * as h from 'http';
import * as f from 'fs';
import path from 'path';

const index = f.readFileSync(`index.html`);

h.createServer(function (_, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(index);
}).listen(process.env.TEST_PORT!);