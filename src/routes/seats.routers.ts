import { Router } from "express";
import { getSeats, updateSeat } from "../controllers/seats.controller.js";

export const seatsRoute = Router();

seatsRoute.get("/seats", getSeats)

seatsRoute.patch("/seats", updateSeat);
