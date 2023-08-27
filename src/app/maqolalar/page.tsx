
import Image from "next/image";
import User from "../../../public/img/user.png";
import { CiCalendarDate } from "react-icons/ci";
import { BiComment } from "react-icons/bi";
import { Blog, BlogImg, BlogMain } from "../../../public";
import { Article } from "@/components/pageComp";

export const metadata = {
  title: "Maqolalar",
  description: "site of recipe.uz in uzb",
};

export default function page() {
  return (
    // <section className="container py-12">
    //   <h2 className="font-playfair text-6xl">
    //     Yaxshiroq va oqilona pishirish uchun to`liq qo`llanma
    //   </h2>
    //   <div className="flex items-center gap-8 my-9">
    //     <div className="flex gap-2 items-center text-lg">
    //       <Image width={50} height={50} src={User} alt="user's ava" />
    //       <p>Ali Valiyev</p>
    //     </div>
    //     <div className="flex gap-2 items-center text-lg">
    //       <CiCalendarDate />
    //       <p>Kecha</p>
    //     </div>
    //     <div className="flex gap-2 items-center text-lg">
    //       <BiComment />
    //       <p>456</p>
    //     </div>
    //   </div>
    //   <hr />
    //   <p className="text-lg my-9">
    //     Men Bruklinning Kanarsi bo`limida yashab, yaxshi italyan taomini qanday
    //     tayyorlashni o`rgandim. Mana bu taomni restoranda qilganimdan keyin
    //     yaratgan retseptim. Rohatlaning!
    //   </p>
    //   <div className="img my-9">
    //     <Image src={Blog} alt="asosiy maqola rasmi" className="w-full" />
    //   </div>
    //   <div className="my-9">
    //     <h2 className="text-4xl font-playfair my-4">Boshlashdan oldin</h2>
    //     <p className="text-lg">
    //       Oziq-ovqat sifatlari qovurilgan tovuq kesilgan bo`laklar orqali piyola
    //       butternut gazak. Yumshoq go`shtli suvli kechki ovqatlar. Bir-pot past
    //       issiqlik mo`l vaqt adobo yog` xom yumshatish meva. shirin ko`rsatadi
    //       suyak iligi boylik oshxona, fricassee cho`chqa go`shti yelka. Mazali
    //       sariyog` qovoqlari.
    //     </p>
    //   </div>
    //   <div className="flex justify-between items-center my-9">
    //     <div className="w-2/5">
    //       <h2 className="text-4xl font-playfair">Bu erda asoslar</h2>
    //       <p className="text-lg my-4">
    //         Juicy köfte brisket slammin` pishirilgan yelka. Juicy smoker soya
    //         sousi burger brisket. polenta xantal dukkakli ko`katlar. Sharob
    //         texnikasi gazak shishi chuck ortiqcha. Yog` sekin isitiladi.
    //       </p>
    //       <p className="text-lg my-4">
    //         Juicy köfte brisket slammin` pishirilgan yelka. Juicy smoker soya
    //         sousi burger brisket. polenta xantal dukkakli ko`katlar. Sharob
    //         texnikasi gazak shishi chuck ortiqcha. Yog` sekin isitiladi.
    //       </p>
    //     </div>
    //     <div className="">
    //       <Image src={BlogImg} alt="Bu erda asoslar" />
    //     </div>
    //   </div>
    //   <hr />
    //   <div className="my-9">
    //     <h2 className="text-5xl font-playfair my-2">
    //       “Kim yaxshi ovqatlanmasa, yaxshi o`ylay olmaydi, yaxshi sevmaydi,
    //       yaxshi uxlay olmaydi.”
    //     </h2>
    //     <p className="text-lg ">- Virjiniya Vulf, O`z Xonasi</p>
    //   </div>
    //   <hr />
    //   <div className="my-9">
    //     <h2 className="text-4xl font-playfair">Oshxonada</h2>
    //     <p className="text-lg my-5">
    //       Gastronomiya atmosferasi ajratilgan. Uyda pishirilgan sariyog``.
    //       Mazali romantik bezovtalanmagan xom lagan bo`ladi aralashtirmoq. Qalin
    //       Skewers skovorodkada tabiiy, chekuvchi soya sousi kutish roux. tilim
    //       rozet suyagi-in qaynatish aniqlik bilan birga chaqaloq piyozi.
    //       Hunarmandchilik xushbo`y zavq bag`ishlaydi, so`ngra taco bo`linadi.
    //       Daqiqalar bezovtalanmagan oshxona tushlik ajoyib xantal kori. Juicy
    //       ulushi pishirish varag`i cho`chqa go`shti. Ovqatlar ramen noyob
    //       tanlovi, xom pishiriqlar boyligi ajoyib atmosfera. Shirin yumshatish
    //       kechki ovqatlar, qopqoq xantal infuzion skovorodka, pazandalik
    //       tajribasi haqida Skewers.
    //     </p>
    //     <p className="text-lg my-5">
    //       Pishgan yelkasiga shirali köfte brisket. Juicy smoker soya sousi
    //       burger brisket. polenta xantal bo`lagi ko`katlar. Sharob texnikasi
    //       gazak shishi chuck ortiqcha. Yog` sekin isitiladi. tilim tabiiy
    //       mazali, sehrli osh qoshiqni chetga surib qo`ying skovorodka, dafna
    //       barglari jigarrang markaziy qism. meva yumshatish qirralarning frond
    //       tilim piyoz gazak cho`chqa go`shti steem sharoblar ustida ortiqcha
    //       texnik stakan; Qopqoq chekuvchi soya sousi mevali gazak. Shirin
    //       bir-o`nlab qirib tashlash mazali, non varaq xom crunch xantal.
    //       Minutlar aqlli tirqishli qisqichlar qirib tashlaydi, jigarrang
    //       po`stlog`i bezovtalanmagan guruch.
    //     </p>
    //     <p className="text-lg my-5">
    //       Oziq-ovqat sifatlari qovurilgan tovuq kesilgan bo`laklar orqali piyola
    //       butternut gazak. Yumshoq go`shtli suvli kechki ovqatlar. Bir idishdagi
    //       past harorat ko`p vaqt adobo yog` xom yumshatish meva. shirin qiladi
    //       suyak iligi boyligi oshxona, frikasse cho`chqa go`shti elka. Mazali
    //       sariyog` qovoqlari. Lazzat markazi plastinka, mazali qovurg`a
    //       suyak-go`shti, ortiqcha oshpaz oxiri. shirin dastak cho`chqa go`shti,
    //       past issiqlik chekuvchi soya sousi lazzat go`sht, guruch meva meva.
    //       Romantik yiqilib tushadigan butternut guruchli burgerlar.
    //     </p>
    //   </div>
    //   <div className="my-9">
    //     <Image src={BlogMain} alt="maqola rasmi" />
    //   </div>
    //   <p className="text-lg my-5">
    //     Gastronomiya atmosferasi ajratilgan. Uyda pishirilgan sariyog`. Mazali
    //     romantik bezovtalanmagan xom lagan bo`ladi aralashtirmoq. Qalin Skewers
    //     skovorodkada tabiiy, chekuvchi soya sousi kutish roux. tilim rozet
    //     suyagi-in qaynatish aniqlik bilan birga chaqaloq piyozi. Hunarmandchilik
    //     xushbo`y zavq bag`ishlaydi, so`ngra taco bo`linadi. Daqiqalar
    //     bezovtalanmagan oshxona tushlik ajoyib xantal kori. Juicy ulushi
    //     pishirish varag`i cho`chqa go`shti. Ovqatlar ramen noyob tanlovi, xom
    //     pishiriqlar boyligi ajoyib atmosfera. Shirin yumshatish kechki ovqatlar,
    //     qopqoq xantal infuzion skovorodka, pazandalik tajribasi haqida Skewers.
    //   </p>
    //   <p className="text-lg my-5">
    //     Pishgan yelkasiga shirali köfte brisket. Juicy smoker soya sousi burger
    //     brisket. polenta xantal bo`lagi ko`katlar. Sharob texnikasi gazak shishi
    //     chuck ortiqcha. Yog` sekin isitiladi. tilim tabiiy mazali, sehrli osh
    //     qoshiqni chetga surib qo`ying skovorodka, dafna barglari jigarrang
    //     markaziy qism. meva yumshatish qirralarning frond tilim piyoz gazak
    //     cho`chqa go`shti steem sharoblar ustida ortiqcha texnik stakan; Qopqoq
    //     chekuvchi soya sousi mevali gazak. Shirin bir-o`nlab qirib tashlash
    //     mazali, non varaq xom crunch xantal. Minutlar aqlli tirqishli qisqichlar
    //     qirib tashlaydi, jigarrang po`stlog`i bezovtalanmagan guruch.
    //   </p>
    //   <p className="text-lg my-5">
    //     Oziq-ovqat sifatlari qovurilgan tovuq kesilgan bo`laklar orqali piyola
    //     butternut gazak. Yumshoq go`shtli suvli kechki ovqatlar. Bir idishdagi
    //     past harorat ko`p vaqt adobo yog` xom yumshatish meva. shirin qiladi
    //     suyak iligi boyligi oshxona, frikasse cho`chqa go`shti elka. Mazali
    //     sariyog` qovoqlari. Lazzat markazi plastinka, mazali qovurg`a
    //     suyak-go`shti, ortiqcha oshpaz oxiri. shirin dastak cho`chqa go`shti,
    //     past issiqlik chekuvchi soya sousi lazzat go`sht, guruch meva meva.
    //     Romantik yiqilib tushadigan butternut guruchli burgerlar.
    //   </p>
    //   <div className="my-9">
    //     <h2 className="text-4xl font-playfair">Sizga ham yoqishi mumkin</h2>
    //   </div>
    // </section>
    <section className="container py-12">
      <h2 className="font-playfair text-4xl">
        Bo`limlar
      </h2>
        <div className="flex justify-between items-center gap-2">
          <Article/>
        </div>
    </section>
  );
}
