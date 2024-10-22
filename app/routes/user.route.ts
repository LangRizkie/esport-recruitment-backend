import UserController from '@controller/user.controller'

import AuthController from '@/controller/auth.controller'
import { app } from '@/utilities/express.utils'

const router = app.Router()

router.post('/register', UserController.register)
router.get('/self', AuthController.authenticate, UserController.self)
router.get('/get', AuthController.authenticate, UserController.get)
router.get('/getAll', AuthController.authenticate, UserController.getAll)

export default router
