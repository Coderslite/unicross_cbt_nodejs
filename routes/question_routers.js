import { Router } from "express";

const router = Router();

import * as controllers from '../controllers/controller.js';


router.route('')
.get(controllers.getQuestions)
.post(controllers.createQuestion)
.delete(controllers.deleteAllQuestion)

router.delete('/:id',controllers.deleteOneQuestion)
router.get('/:id',controllers.getOneQuestion)

export default router;