// app/api/auth/logout/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json(
    { message: 'Logout successful' },
    { status: 200 }
  );

  // Clear cookie
  response.cookies.set('token', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  });

  return response;
}