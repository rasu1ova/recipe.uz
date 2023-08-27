
import Link from "next/link";

export default async function Category({ count }:any) {
  // const res = await fetch("http://127.0.0.1:8000/api/category/");
  // const category: Article[] = await res.json();
  return (
    <>


    selam category bolum
      {/* {category &&
        category.slice(0, count).map((item: any) => (
          <Link key={item.id} href={`/bolimlar/${item.id}`}>
            <img src={item.category_image} alt="there is category's img" />
            <h3 className="text-center font-black text-lg my-2">{item.name}</h3>
          </Link>
        ))} */}
    </>
  );
}
