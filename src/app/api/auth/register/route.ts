// app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '../../../../../lib/dbConnect';
import User from '../../../../../models/User';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists with this email or username' },
        { status: 400 }
      );
    }

    // Create new user
    const user = new User({ username, email, password });
    await user.save();

    return NextResponse.json(
      { message: 'User created successfully', user: { id: user._id, email: user.email, username: user.username } },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}