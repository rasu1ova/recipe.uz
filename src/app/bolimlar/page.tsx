
'use client'
import {Category} from "@/components/pageComp";

export const metadata = {
  title: "Bo'limlar",
  description: "site of recipe.uz in uzb",
};

export default function page() {
  return (
    <section className="container py-12">
      <h2 className="font-playfair text-4xl my-9">Bo`limlar</h2>
      <hr />
      <div className="flex justify-between items-center gap-6 flex-wrap my-9">
        <Category count={20}/>
      </div>
    </section>
  );
}
