import { NextRequest, NextResponse } from "next/server"
import url from "url";

export async function middleware (req: NextRequest) {
    if(req.nextUrl.pathname === "/signin"){
        return NextResponse.redirect(new URL("/api/signin", req.url));
    }
   
}