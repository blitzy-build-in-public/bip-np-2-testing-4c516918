# bip-np-2-testing-4c516918
Created by Blitzy
Install with `npm install`, then run with `node index.js`.

The server listens on port 3000, or on the port named by `PORT` when that variable is set. `npm start` starts the same server, equivalent to `node index.js`.
Both endpoints answer `200` with `Content-Type: text/plain; charset=utf-8`.

| Request | Response |
|---|---|
| `curl http://localhost:3000/` | `Hello world` |
| `curl http://localhost:3000/goodevening` | `Good evening` |
