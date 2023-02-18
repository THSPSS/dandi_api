import express from "express"
import { getLocations, getLocationsCount, addLocation, deleteLocation , updateLocation } from "../controllers/location.js"

const router = express.Router()

router.get("/", getLocations)
router.get("/count", getLocationsCount)
router.post("/", addLocation)
router.delete("/:id", deleteLocation)
router.put("/:id", updateLocation)


export default router
