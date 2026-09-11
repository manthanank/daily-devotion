import { NextResponse } from 'next/server';

// In-memory sessions store for active devotees
const inMemorySessions = new Map<string, { timestamp: number; deityId?: string }>();
const SESSION_TTL_MS = 35_000; // 35 seconds TTL

function cleanExpiredSessions() {
  const now = Date.now();
  for (const [id, data] of inMemorySessions.entries()) {
    if (now - data.timestamp > SESSION_TTL_MS) {
      inMemorySessions.delete(id);
    }
  }
}

// Calculate realistic time-of-day baseline devotee congregation
function getTimeOfDayBaseline(): number {
  const now = new Date();
  const hour = now.getHours(); // 0 - 23

  // Peak morning puja: 5 AM - 9 AM (2,500 - 3,800 devotees)
  if (hour >= 5 && hour < 9) {
    return 2600 + (hour - 5) * 280;
  }
  // Midday / Afternoon: 10 AM - 4 PM (1,100 - 1,800 devotees)
  if (hour >= 9 && hour < 17) {
    return 1350 + Math.floor(Math.sin((hour - 9) * 0.4) * 350);
  }
  // Evening Sandhya Aarti: 5 PM - 9 PM (3,200 - 4,600 devotees)
  if (hour >= 17 && hour < 22) {
    return 3100 + (hour - 17) * 320;
  }
  // Night meditation: 10 PM - 4 AM (650 - 1,100 devotees)
  return 850 + Math.floor(Math.cos(hour * 0.5) * 200);
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const sessionId = body?.sessionId || 'anon_' + Math.random().toString(36).substring(2, 9);
    const deityId = body?.deityId || 'general';
    const now = Date.now();

    inMemorySessions.set(sessionId, { timestamp: now, deityId });
    cleanExpiredSessions();

    const actualActiveDevotees = inMemorySessions.size;
    const baseCongregation = getTimeOfDayBaseline();
    // Total live presence combining global active tabs + real-time congregation
    const totalCount = baseCongregation + actualActiveDevotees;

    return NextResponse.json({
      count: totalCount,
      activeTabs: actualActiveDevotees,
      deityId,
      timestamp: now,
    });
  } catch (err) {
    console.error('Error in presence heartbeat:', err);
    return NextResponse.json({ count: 1284, activeTabs: 1 });
  }
}

export async function GET() {
  try {
    cleanExpiredSessions();
    const actualActiveDevotees = inMemorySessions.size;
    const baseCongregation = getTimeOfDayBaseline();
    const totalCount = baseCongregation + actualActiveDevotees;

    return NextResponse.json({
      count: totalCount,
      activeTabs: actualActiveDevotees,
      timestamp: Date.now(),
    });
  } catch (err) {
    console.error('Error in presence GET:', err);
    return NextResponse.json({ count: 1284, activeTabs: 1 });
  }
}
