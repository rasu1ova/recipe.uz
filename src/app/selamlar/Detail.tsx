"use client";
import { useRouter } from 'next/router';
import { NextPage } from 'next';

type DetailProps = {
  id: string;
};

const Detail: NextPage<DetailProps> = ({ id }) => {
  const router = useRouter();

  // Fetch data for the given ID and display it on the page

  return (
    <div>
      <h1>Details for ID: {id}</h1>
      {/* Render the fetched data */}
    </div>
  );
};

export default Detail;
