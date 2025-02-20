import express from "express";
import { client } from "@repo/db/client";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await client.users.create({
      data: {
        username,
        password,
      },
    });
    res.json({
      message: "User created successfully",
      id: user.id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.listen(3002, () => {
  console.log("Server is running on http://localhost:3002");
});
