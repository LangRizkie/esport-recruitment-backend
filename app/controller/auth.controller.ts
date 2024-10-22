import { NextFunction, Request, Response } from 'express'

import Database from '@/utilities/database.utils'

class AuthController {
	static supabase = new Database()

	static authenticate = async (req: Request, res: Response, next: NextFunction) => {
		if (!req.headers.authorization) {
			res.status(401).json({ message: 'Unauthenticated' })
			return
		}

		next()
	}

	static login = async (req: Request, res: Response) => {
		const response = await this.supabase.client.auth.signInWithPassword(req.body)

		if (response.error) {
			const status = response.error.status
			res.status(Number(status)).json(response.error)
			return
		}

		res.status(200).json(response)
	}

	static logout = async (_: Request, res: Response) => {
		const response = await this.supabase.client.auth.signOut()
		res.status(200).json(response)
	}
}

export default AuthController
