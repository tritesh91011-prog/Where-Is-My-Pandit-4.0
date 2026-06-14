import { NextRequest, NextResponse } from 'next/server';export async function POST(req:NextRequest){const data=await req.json();
// Production hook: send inquiry to public email via Nodemailer and store in PostgreSQL customer database.
return NextResponse.json({ok:true,data})}
