import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello World! It's version port : ${PORT}`);
});
app.get("/hello", (req: Request, res: Response) => {
  res.send(`Hello World! It's version port : ${PORT}`);
});

app.get("/abc2", (req: Request, res: Response) => {
  res.send(`abc comment+`);
});
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
