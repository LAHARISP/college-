import { executeQuery } from '@/lib/db';
import type { User } from '@/types/user';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await executeQuery<User>('SELECT * FROM Users');
    if ('error' in result) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}