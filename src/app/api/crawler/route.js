import { NextResponse } from 'next/server';

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const businessName = searchParams.get('businessName');
  const businessLink = searchParams.get('businessLink');
  return NextResponse.json('');
};
