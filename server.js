import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/order", (req, res) => {
  const order = req.body;
  console.log("Received order:", order);
  // You could save to DB here
  res.json({ status: "success", message: "Order received" });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
