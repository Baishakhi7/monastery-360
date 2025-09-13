import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { historicalEvents } from '@/lib/db/schema';

export async function GET() {
  try {
    const data = await db.select().from(historicalEvents);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch historical events' }, { status: 500 });
  }
}
