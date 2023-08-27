

import Image from "next/image";
import React from "react";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { AboutImg, AboutMain } from "../../../public";
import User from "../../components/pageComp/User";

export const metadata = {
  title: "Biz haqimizda",
  description: "site of recipe.uz in uzb",
};

export default function page() {
  return (
    <section className="container my-12">
      <h2 className="font-playfair text-5xl my-9">Biz haqimizda</h2>
      <hr />
      <h2 className="font-playfair text-6xl my-9">
        Biz ovqat pishirishni va internetni yaxshi ko`radiganlar guruhimiz
      </h2>
      <div className="img my-9">
        <Image src={AboutMain} alt="About img" className="w-full" />
      </div>
      <p className="text-grey text-lg my-9">
        Oziq-ovqat sifatlari qovurilgan tovuq kesilgan bo`laklar orqali piyola
        butternut gazak. Yumshoq go`shtli suvli kechki ovqatlar. Bir qozon kam
        ovqat ko`p vaqt adobo yog` xom yumshatish meva. shirin ko`rsatadi
        suyak-in strelka boylik itchen, fricassee cho`chqa yelkasi. Mazali
        sariyog` qovoqlari.
      </p>
      <div className="flex justify-between items-center my-9 gap-2">
        <div className="w-2/5 ">
          <h2 className="font-playfair text-4xl my-4">
            Hamma uchun oddiy, oson retseptlar
          </h2>
          <p className="text-lg">
            Juicy köfte brisket slammin` aked yelkasiga. Juicy smoker soya sousi
            burger brisket. polenta xantal dukkakli ko`katlar. Sharob texnikasi
            gazak shishi chuck ortiqcha. Yog` sekin isitiladi. tilim tabiiy
            mazali, chetga sehrli osh qoshiq skovorodka, dafna barglari
            jigarrang markazi.
          </p>
        </div>
        <div className="img w-2/4">
          <Image
            className="w-full"
            src={AboutImg}
            alt="Hamma uchun oddiy, oson retseptlar"
          />
        </div>
      </div>
      <div className="my-9">
        <h2 className="font-playfair text-4xl">
          Ajoyib iste`dodli oshpazlar va taomlar jamoasi
        </h2>
        <div className="flex justify-between flex-wrap">
          <User count={12} flexCol="flex-col" />
        </div>
      </div>
      <div className="w-2/4 my-9">
        <h2 className=" text-xl">NYC, Dubay va Londondan ishlaydi</h2>
        <p className="text-lg text-grey my-4">
          Gastronomiya atmosferasi ajratilgan. Uyda pishirilgan sariyog`. Mazali
          romantik, bezovtalanmagan xom laganlar aralashadi. Qalin Skewers
          skovorodkada tabiiy, chekuvchi soya sousi kutish roux. tilim rozet
          suyagi - chaqaloq pirasa bilan birga qaynatishda aniqlik.
          Hunarmandchilik xushbo`y lazzat beradi.
        </p>
        <hr />
        <div className="flex items-center text-2xl gap-6 my-4">
          <FiFacebook />
          <FiTwitter />
          <FaInstagram />
        </div>
      </div>
    </section>
  );
}
