const MongoClient = require('mongodb')
const mongo = new MongoClient(process.env.DATABASE_URL)

mongo.connect()

const database = mongo.db("ClusterOZ")
export const users = database.collection(sample_restaurants)