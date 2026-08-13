import express from "express"
import {classify, summarize} from "../controllers/chatController.js"
const router = express.Router()
router.post('/classify' , classify)
router.post('/summarize' , summarize)
// router.post('/extract')
export default router