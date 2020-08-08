import { Router } from "express";
import { LinksController } from "../Controllers/LinksController";

const LinksRouter = Router();
const controller = new LinksController();

// Get Specific Link
LinksRouter.get("/:alias", (req, res) => {
  controller.handleGetLinkByAlias(req, res);
});

// Create Short Link
LinksRouter.post("/url", (req, res) => {
  controller.handleCreateLink(req, res);
});

export { LinksRouter };
