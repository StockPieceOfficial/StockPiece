import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/index.db.js";

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (err) => {
      throw err;
    });
    app.listen(PORT, () => {
      console.log(`server started port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`server start error: ${err}`);
  });
