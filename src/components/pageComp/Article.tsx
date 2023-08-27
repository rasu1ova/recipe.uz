

// import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Article() {
  // const [data, setData] = useState<any>(null);

  const res = await fetch(
    "https://my-json-server.typicode.com/rasu1ova/recApi/articles"
  );
  const article: Article[] = await res.json();

  return (
    <>
      {article &&
        article.map((item: any, index: any) => {
          return (
            <Link
              href={`/maqolalar/${item.id}`}
              key={index}
              className="flex items-center gap-2 justify-center">
              <div>
                <img
                  className=" rounded-full"
                  src={item.img}
                  alt="maqola muallifining rasmi"
                  width={70}
                  height={70}
                />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.date}</p>
              </div>
            </Link>
          );
        })}
    </>
  );
}
