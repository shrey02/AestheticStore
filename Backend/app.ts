import express, { Application, Request, Response } from "express";
const app: Application = express();

const port = 3000;

// Sending response
app.get("/", (req: Request, res: Response) => {
  res.send("Migrated from javascript to typescript");
});

// Listening server
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
