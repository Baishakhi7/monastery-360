import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { monasteries } from '@/lib/db/schema';

export async function GET() {
  try {
    const data = await db.select().from(monasteries);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch monastery data' }, { status: 500 });
  }
}
