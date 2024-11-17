import { connectToDatabase } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle only GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' }); // 405 for unsupported methods
  }

  try {
    // Connect to the database
    const pool = await connectToDatabase();

    // Define and execute the query
    const result = await pool
      .request()
      .query('SELECT s_name, usn, semester FROM course_register WHERE usn = 1DA21EC136');

    // Return the result as JSON
    res.status(200).json(result.recordset);
  } catch (error) {
    // Log and return error response
    console.error('Error fetching student details:', error);
    res.status(500).json({ error: 'Failed to fetch student details' });
  }
}
