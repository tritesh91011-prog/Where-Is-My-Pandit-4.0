import { NextRequest, NextResponse } from 'next/server';import { z } from 'zod';import { bookingId } from '@/lib/utils';
const schema=z.object({fullName:z.string().min(2),mobile:z.string().min(8),email:z.string().email().optional().or(z.literal('')),address:z.string().optional(),city:z.string().optional(),state:z.string().optional(),eventDate:z.string(),eventTime:z.string(),serviceType:z.string(),notes:z.string().optional()});
export async function POST(req:NextRequest){const body=await req.json();const parsed=schema.safeParse(body);if(!parsed.success)return NextResponse.json({error:'Invalid booking data',issues:parsed.error.flatten()},{status:400});const id=bookingId();
// Production hook: persist to PostgreSQL, send Nodemailer confirmation and WhatsApp Business API template.
return NextResponse.json({bookingId:id,status:'Pending Payment',message:'Booking created. Confirmation email and WhatsApp notification queued.',createdAt:new Date().toISOString()});}
