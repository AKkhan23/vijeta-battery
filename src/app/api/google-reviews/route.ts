import { connection, NextResponse } from "next/server";
import { getGoogleRating } from "@/lib/googleReviews";

export async function GET() {
  // Cache Components prerenders GET handlers at build time by default.
  // Waiting for the connection keeps the Google rating live per request.
  await connection();
  const rating = await getGoogleRating();
  return NextResponse.json(rating, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
