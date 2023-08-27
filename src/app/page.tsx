
import Image from "next/image";
import React, { useState, useEffect } from "react";
import HomeImg from "../../public/img/home-img.png";
import { SiSimpleanalytics } from "react-icons/si";
import {
  Article,
  Category,
  LatestRecipe,
  Stars,

} from "@/components/pageComp/index";
import { DeliciousData, ToothData, CollectionData } from "@/data/index";
import Link from "next/link";
export default function page() {

  return (
    <>
      <section className="container bg-opacity-full-color gap-4 flex justify-between items-center md:flex-wrap">
        <div className="w-2/4">
          <Image src={HomeImg} alt="there is home img" />
        </div>
        <div className="text-black w-2/4">
          <p className="flex gap-2 text-lg w-11/12">
            <span className="text-main-color">
              <SiSimpleanalytics className="text-xl" />
            </span>
            85% would make this again
          </p>
          <h1 className="text-6xl w-11/12 font-playfair my-4">
            Mighty Super Cheesecake
          </h1>
          <p className="w-11/12">
            Look no further for a creamy and ultra smooth classic cheesecake
            recipe! no one can deny its simple decadence.
          </p>
        </div>
      </section>
      <section className="container py-12">
        <h2 className="text-4xl font-playfair my-4 font-black">Super Mazali</h2>
        <div className="flex justify-between items-center">
          {DeliciousData.map((item, index) => {
            return <Stars key={index} name={item.name} img={item.img} />;
          })}
        </div>
      </section>
      <section className="container py-12">
        <h2 className="text-4xl font-playfair my-4 font-black">
          Shirinlikxo`r
        </h2>
        <div className="flex justify-between items-center">
          {ToothData.map((item, index) => {
            return <Stars key={index} name={item.name} img={item.img} />;
          })}
        </div>
      </section>
      <section className="container py-12">
        <h2 className="text-4xl font-playfair my-4 font-black">Bo`limlar</h2>
        <div className="flex justify-between items-center flex-wrap">
          <Category count={6} />
        </div>
      </section>
      <section className="bg-opacity-full-color py-12">
        <div className="text-center w-2/4 flex gap-6 flex-col m-auto justify-content items-center">
          <h2 className="font-playfair text-7xl">
            Sizning pochta qutingizga lazzat yo`llash
          </h2>
          <p className="text-lg">
            Haftalik qo`lda tanlangan retseptlar va tavsiyalardan bahramand
            bo`ling
          </p>
          <form className="bg-white w-full border-4 border-white rounded-md flex justify-between">
            <input
              className="px-10 outline-none"
              type="email"
              name=""
              id=""
              placeholder="Email Address"
            />
            <button className="bg-main-color text-lg rounded-md text-white py-4 font-black px-10">
              Qo`shilish
            </button>
          </form>
          <p>
            Axborot byulletenimizga qo`shilish orqali siz bizning fikrimizga
            rozilik bildirasiz
            <a href="#" className="underline">
              Foydalanish shartlari
            </a>
          </p>
        </div>
      </section>
      <section className="container py-12">
        <h2 className="font-playfair text-5xl my-7">
          Qo`lda tanlangan to`plamlar
        </h2>
        <div className="flex justify-content gap-5 items-center flex-wrap">
          {CollectionData.map((item, index) => {
            return (
              <div
                key={index}
                className="text-lg w-[540] h-[475] rounded-md border-2 border-grey border-solid">
                <Image src={item.img} alt="img" />
                <div className="p-6 flex justify-between">
                  <h3 className="text-4xl w-3/5 font-playfair">{item.name}</h3>
                  <div className="self-end content-end">
                    <button className="border-2 px-5 py-1 text-sm border-black border-solid rounded-md">
                      {item.recipeCount} Recipes
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container py-12">
        <h2 className="text-4xl font-playfair my-4 font-black">
          Oxirgi Retseptlar
        </h2>
        <div className="flex justify-between flex-wrap">
          <LatestRecipe />
        </div>
      </section>
      <section className="container py-12">
        <h2 className="text-4xl font-playfair my-4 font-black">Maqolalar</h2>
        <div className="flex justify-between flex-wrap gap-2">
          <Article/>
        </div>
      </section>
    </>
  );
}
