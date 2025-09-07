/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
// @ts-ignore
import { FragmentGateway } from "../../../node_modules/web-fragments/dist/gateway.js";
// @ts-ignore
import { getNodeMiddleware } from "../../../node_modules/web-fragments/dist/gateway/node.js";

const myGateway = new FragmentGateway();

// register our fragment
myGateway.registerFragment({
  // a unique ID of the fragment
  fragmentId: "fragment-a",
  piercingClassNames: [],
  endpoint: "http://localhost:4201",
  routePatterns: [
    "/fragment-a/:_*",
  ],
});

const app = express();

app.use(getNodeMiddleware(myGateway));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to gateway!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
