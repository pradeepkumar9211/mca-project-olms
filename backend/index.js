require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// Importing Routes
const authRoutes = require("./routes/authRoutes");

// Handling All Routes

app.get("/", (req, res) => {
  res.send(req.url);
});

// Registering/SignUp User Route
app.use("/api/auth/register", authRoutes);

app.get("/", (req, res) => {
  res.send("Home Route");
});

async function main() {
  try {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}.`);
    });
  } catch (err) {
    console.log("Error : ", err);
    process.exit(1);
  }
}

main();
