import express from "express"
import {
  updateUser,
  deleteUser,
  getAllUser,
  getsingleUser,
} from "../controllers/teacherController.js"

const router = express.Router()

router.get('/:id',getsingleUser)
router.get('/',getAllUser)
router.put('/:id',updateUser)
router.delete("/:id",deleteUser)

export default router;