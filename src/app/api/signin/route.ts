import { authorizationUrl } from "@/lib/oAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest) {
    
    return NextResponse.redirect(new URL(authorizationUrl), {status: 301})
}