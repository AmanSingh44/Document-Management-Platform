const express = require("express");
const dotenv = require("dotenv");
const uploadRouter = require("./routes/uploadRouter.js");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use("/document", uploadRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
