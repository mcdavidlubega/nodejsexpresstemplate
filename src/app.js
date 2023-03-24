import express from "express";
import apiVersionRoutes from "./routes";
import connect from "./db/database";

connect();
const app = express();
app.use(express.json());
app.use(apiVersionRoutes);

app.get("/", (req, res) => {
    return res.status(200).send("Home");
});
app.use((req, res) => res.status(404).json({ message: "Resource not found" }));

export default app;
