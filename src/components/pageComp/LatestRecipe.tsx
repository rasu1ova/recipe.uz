import Image from "next/image";

// async function GetData() {
//   const res = await fetch("http://127.0.0.1:8000/api/category/");
//   return res.json();
// }

export default async function LatestRecipe() {
  // const data = await GetData();

  return (
    <>
      {/* {data &&
        data.map((item: any) => (
          <div key={item.id}>
            <img src={item.category_image} alt="there is img" />
            <h3 className="text-lg text-center font-black my-2">{item.name}</h3>
          </div>
        ))} */}
        <h2>Lorem, ipsum dolor.</h2>
    </>
  );
}
