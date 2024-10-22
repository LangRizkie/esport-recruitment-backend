import AuthController from '@/controller/auth.controller'
import { app } from '@/utilities/express.utils'

const router = app.Router()

router.post('/login', AuthController.login)
router.post('/logout', AuthController.authenticate, AuthController.logout)

export default router
