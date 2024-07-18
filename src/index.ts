import express, { Request, Response } from "express";

const app = express();
const port = 3000;
const server = express.json();

app.use(server);

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Chat server listening at http://localhost:${port}`);
});
