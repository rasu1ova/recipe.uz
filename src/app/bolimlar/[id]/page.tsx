
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export default async function handleCategory({ params: { id } }: Props): Promise<React.JSX.Element> {
  console.log(id);
  // const res = await fetch(`http://127.0.0.1:8000/api/category/${id}`);
  // const category: Category = await res.json();
  return (
    <section className="container py-12">
      {/* <h2>{category.name}</h2> */}
      selam
    </section>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";

// type Category = {
//   id: number;
//   name: string;
//   category_image: string;
// };

// type Props = {
//   params: {
//     id: string;
//   };
// };

// export default function CategoryPage({
//   params: { id },
// }: Props): React.ReactElement {
//   const [category, setCategory] = useState<Category | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`http://127.0.0.1:8000/api/category/${id}`);
//         if (res.ok) {
//           const data: Category = await res.json();
//           setCategory(data);
//           console.log(data, "selam");
//         } else {
//           console.error("Failed to fetch category:", res.status);
//         }
//       } catch (error) {
//         console.error("Error fetching category:", error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (!category) {
//     console.log("selam1", category);

//     return <div>Loading...</div>;
//   }

//   return (
//     <section className="container py-12">
//       <h2>{category.name}</h2>
//     </section>
//   );
// }
