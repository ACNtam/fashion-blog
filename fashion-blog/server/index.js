import express from "express";
import cors from "cors";
import postRoutes from "./routes/post.js";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json())

app.use(postRoutes)

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
