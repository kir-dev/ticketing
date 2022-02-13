import * as dotenv from 'dotenv'
dotenv.config()

export const Configuration = {
  MONGO_DB_CONNECTION_STRING: process.env.MONGO_DB_CONNECTION_STRING
}
