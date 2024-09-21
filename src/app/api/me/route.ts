import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Satakhun Nontha",
    studentId: "660612158",
  });
};
