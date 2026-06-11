import { NextResponse } from "next/server";

export async function GET(
  request: Request, 
  { params }: { params: Promise<{ prodId: string }> } // Correct for Next.js 15+
) {
  try {
    // 1. Await the params (Required in Next.js 15+)
    const { prodId } = await params;

    // 2. Fetch the data from the external API
    const res = await fetch(`https://fakestoreapi.com/products/${prodId}`, {
      // Optional: Add next revalidation if you want to cache it
      next: { revalidate: 60 } 
    });

    // 3. Handle potential API errors (e.g., product not found)
    if (!res.ok) {
      return NextResponse.json(
        { error: `Product with ID ${prodId} not found` }, 
        { status: res.status }
      );
    }

    const product = await res.json(); 

    // 4. Return the product data
    return NextResponse.json(product);

  } catch (error) {
    // Catch network or internal server errors
    return NextResponse.json(
      { error: "Internal Server Error" }, 
      { status: 500 }
    );
  }
}