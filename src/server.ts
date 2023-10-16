import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello World! It's version port : ${PORT}`);
});

app.get("/abc32s42", (req: Request, res: Response) => {
  res.send(`abc commen2t+`);
});
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
