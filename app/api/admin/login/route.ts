import { NextResponse } from "next/server";
import { setAdminCookie } from "@/lib/admin-auth";
export async function POST(request:Request){const {password}=await request.json();if(!process.env.ADMIN_PASSWORD||password!==process.env.ADMIN_PASSWORD)return NextResponse.json({error:"Unauthorized"},{status:401});await setAdminCookie();return NextResponse.json({ok:true});}
