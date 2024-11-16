import sql from 'mssql';

const config = {
  user: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  server: process.env.MSSQL_SERVER, // e.g., 'localhost' or server address
  database: process.env.MSSQL_DATABASE,
  options: {
    encrypt: true, // For Azure
    trustServerCertificate: true, // For local dev / self-signed certs
  },
}

// Create a connection pool
const pool = new sql.ConnectionPool(config)
const poolConnect = pool.connect()

// Function to get connection pool
async function getConnection() {
  await poolConnect
  return pool
}
getConnection()

export default async function handler(req, res) {
  try {
    const users = await executeQuery('SELECT * FROM students')
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}