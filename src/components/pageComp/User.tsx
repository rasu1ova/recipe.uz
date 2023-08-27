import Image from "next/image";

async function GetData() {
  const res = await fetch("http://127.0.0.1:8000/api/user/");
  return res.json();
}

export default async function User(props) {
  const data = await GetData();
  const { count, width, height, flexCol } = props;
  return (
    <>
      {data &&
        data.slice(0, count).map((item: any) => (
          <div key={item.id} className={`${flexCol} flex gap-2 items-center`}>
            <div className="text-center  my-5">
              <img
                src={item.image}
                alt="foydalanuvchi rasmi"
                width={width}
                height={height}
              />
            </div>
            <div>
              <p>{item.name}</p>
              <p className="text-grey">{item.job}</p>
            </div>
          </div>
        ))}
    </>
  );
}
