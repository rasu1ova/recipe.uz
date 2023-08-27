
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

async function handleArticle({ params: { id } }: Props) {
  console.log(id);
  const res = await fetch(
    `https://my-json-server.typicode.com/rasu1ova/recApi/articles/${id}`
  );
  const article: Article = await res.json();
  return (
    <section className="container">
      <div className="flex gap-2 items-center">
        <img
          className="rounded-full"
          src={article.img}
          alt="muallif surati"
          width={50}
          height={50}
        />
        <div>
          <p>{article.name}</p>
          <p>{article.date}</p>
        </div>
      </div>
      <div className="my-9">
        <img
          src={article.articleMeal}
          alt={`${article.name} `}
          width={1110}
          height={60}
          className="h-96"
        />
        <p className="text-grey text-center my-2">{article.articleImgAlt}</p>
      </div>
      <h2>{article.articleTitle}</h2>
      <div className="my-9">
        <p className="my-4">{article.article}</p>
        <p className="my-4">{article.article}</p>
        <p className="my-4">{article.article}</p>
      </div>
      <div className="my-9">
        <h2 className="font-playfair text-4xl">{article.articleTitle} ssssssssss</h2>
        <div className="my-4">
          {/* <img
            src={article.articleMeal}
            alt={article.articleTitle}
            width={1110}
            height={200}
          /> */}
        </div>
        <p className="my-4">{article.article}</p>
        <p className="my-4">{article.article}</p>
        <p className="my-4">{article.article}</p>
      </div>
    </section>
  );
}
export default handleArticle;
