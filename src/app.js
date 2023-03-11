import express from "express";
import apiVersionRoutes from "./routes";

const app = express();
app.use(express.json());
app.use(apiVersionRoutes);

app.get("/", (req, res) => {
    return res.status(200).send("Home");
});
export default app;
