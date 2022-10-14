import { Router } from "express";
import * as Controller from "./controller";

const songRouter = Router();

songRouter.route("/").get(Controller.findAllSongs);
songRouter.route("/").post(Controller.createSong);
songRouter.route("/:id").get(Controller.findSongById)

export default songRouter;
