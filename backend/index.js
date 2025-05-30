// Declaring Needed Constants (We already installed these packages just now)
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import ogRoute from "./routes/ogRoute.js";
import errorHandling from "./middlewares/errorHandler.js";
import createOGTable from "./data/createOGTable.js"

// Testing HTML Frontend
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.APP_PORT;

// These two lines are necessary to use __dirname with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, "../frontend")));

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", ogRoute);

// Error Handling Middlewares
app.use(errorHandling);

// Create table if does not exist
createOGTable();

// Testing POSTGRESQL Connection
app.get("/", async(req, res) => {
  /*try 
  {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) 
  {
    res.status(500).json({ error: err.message });
  }*/
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Server running
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});