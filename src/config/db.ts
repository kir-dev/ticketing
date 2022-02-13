import * as db from 'mongoose'
import { Configuration } from '../utils/configuration'
if (!Configuration.MONGO_DB_CONNECTION_STRING) {
  console.error('MongoDB URL nem létezik!')
  process.exit(1)
}
db.connect(Configuration.MONGO_DB_CONNECTION_STRING)
export default db
