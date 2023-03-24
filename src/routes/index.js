import { Router } from "express";
import baseRoutes from "./api-v1";

const apiVersionRoutes = Router();

apiVersionRoutes.use("/api/v1", baseRoutes);

export default apiVersionRoutes;
