import { connectToDatabase } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const pool = await connectToDatabase();
    const result = await pool.request()
      .input('usn', '1DA21EC136') // Replace or pass as query
      .query('SELECT subcode, brcode , suborder, grd FROM course_register where usn=1DA21EC136');
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch subject results' });
  }
}
