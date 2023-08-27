import { oauth2Client, userCredential } from "@/lib/oAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;

    if(searchParams.has("error")){
        console.log("Authentication Error", searchParams.get("error"));
        return NextResponse.redirect(new URL("/", req.url), {status: 301})
    }

    const code = searchParams.get("code");
    let { tokens } = await oauth2Client.getToken(code!);
    oauth2Client.credentials = tokens
    let credentials = userCredential(tokens);
    console.log(credentials);
    return NextResponse.redirect(new URL("/", req.url), {status: 301})
}