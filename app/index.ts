import 'dotenv/config'

import AuthRoute from './routes/auth.route'
import UserRoute from './routes/user.route'
import { app } from './utilities/express.utils'

const config = app()

config.use(app.json())
config.use('/auth', AuthRoute)
config.use('/user', UserRoute)

config.listen(process.env.PORT, () => {
	console.log(`[server]: Server is running at http://localhost:${process.env.PORT}`)
})

// test update
