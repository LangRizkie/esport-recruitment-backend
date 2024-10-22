import { createClient, SupabaseClient } from '@supabase/supabase-js'

class Database {
	client: SupabaseClient

	url?: string = process.env.URL
	key?: string = process.env.KEY

	constructor() {
		this.client = createClient(String(this.url), String(this.key))
	}
}

export default Database
