import express from "express";
import TermoController from "../controllers/termoControllers.js";

const router = express.Router();

router
  .get("/", TermoController.getAllTermos)
  .post("/", TermoController.createTermos)
  .put("/:id", TermoController.updateTermos)
  .delete("/:id", TermoController.deleteTermos)
  .get("/:id", TermoController.getByIdTermos)
  .get("/inicial/:inicial", TermoController.getTermosByInicial)
  .get("/area/:area", TermoController.getTermosByArea)
  .delete("/", TermoController.deleteAllTermos)
  

export default router;