import { Request, Response } from 'express'

import Database from '@/utilities/database.utils'

class UserController {
	static supabase = new Database()

	static register = async (req: Request, res: Response) => {
		const { email, password, first_name, last_name } = req.body

		const response = await this.supabase.client.auth.signUp({
			email,
			password,
			options: { data: { first_name, last_name } }
		})

		if (response.error) {
			const status = response.error.status
			res.status(Number(status)).json(response.error)
			return
		}

		res.status(200).json(response)
	}

	static self = async (req: Request, res: Response) => {
		if (req.headers.authorization) {
			const auth = req.headers.authorization.split(' ')
			const token = auth[1]

			const response = await this.supabase.client.auth.getUser(token)

			if (response.error) {
				const status = response.error.status
				res.status(Number(status)).json(response.error)
				return
			}

			res.status(200).json(response)
			return
		}

		res.status(401).json({ message: 'Unauthenticated' })
	}

	static get = async (_: Request, res: Response) => {
		res.status(200).json({ message: 'get' })
	}

	static getAll = async (_: Request, res: Response) => {
		res.status(200).json({ message: 'getAll' })
	}
}

export default UserController
