"use client";

import { Suspense } from "react";

import { useProduct } from "~/lib/swr/use-product";

export const runtime = "edge";

export default function HomePage() {
  // You can await this here if you don't want to show Suspense fallback below
  const product = useProduct(1);

  console.log(product.data);

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Case Study #3
        </h1>

        <div className="w-full max-w-2xl overflow-y-scroll">
          {/* <Suspense><ProductList /></Suspense> */}
        </div>
      </div>
    </main>
  );
}
