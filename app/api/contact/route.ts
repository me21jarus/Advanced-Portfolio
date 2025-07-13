// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import mongoose, { Schema, models, model, Document } from 'mongoose';
import { sendEmail } from '@/utlis/sendEmail';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Connect to MongoDB (only once in dev)
let isConnected = false;
async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(MONGODB_URI!);
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

// Message Interface & Schema
interface IMessage extends Document {
  name: string;
  email: string;
  message: string;
}

const messageSchema = new Schema<IMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = models.Message || model<IMessage>('Message', messageSchema);

// POST handler
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await connectDB();

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    await sendEmail(
      'surajem217@gmail.com',
      'New Contact Form Submission',
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/contact:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
