import { useState,useEffect } from "react"
import naruto from "../assets/Uzamaki.png"
import onepiece from "../assets/OnePiece.png"
import bleach from "../assets/Bleach.png"

export default function Hero(){

    const HeroAnime = [
        { title: "Naruto",
          description: "Naruto Uzumaki, a determined young ninja who dreams of becoming Hokage and earning the respect of his village.",
          img: naruto,  
        },

        { title: "Bleach",
          description: "Ichigo Kurosaki gains the powers of a Soul Reaper and takes on dangerous spirits to protect his family and the people he loves.",
          img: bleach,  
        },
        { title: "One Piece",
          description: "Monkey D. Luffy and his crew go on an epic adventure across the seas as they search for the legendary treasure known as One Piece.",
          img: onepiece,  
        }
    ]

    const [currentAnime, setCurrentAnime] = useState(0);

const anime = HeroAnime[currentAnime];

const nextAnime = () => {
setCurrentAnime((previous) => (previous + 1) % HeroAnime.length);
};

const previousAnime = () => {
setCurrentAnime(
(previous) => (previous - 1 + HeroAnime.length) % HeroAnime.length
);
};

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentAnime((previous) => (previous + 1) % HeroAnime.length);
  }, 10000);

  return () => clearInterval(interval);
}, [HeroAnime.length]);


    return(
  <section className="relative mx-6 mt-2 h-[600px] overflow-hidden rounded-2xl bg-black text-white md:mx-12">
    <img
      src={anime.img}
      alt={anime.title}
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />


    <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pb-5 text-center md:pb-10">
      <h1 className="mb-1 text-5xl font-bold md:text-3xl">
        {anime.title}
      </h1>

      <p className="max-w-2xl text-xs leading-7 text-gray-200 md:text-base">
        {anime.description}
      </p>

   
      <div className="mt-2 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-300"
        >
          Watch Now
        </button>
      </div>

    
      <div className="mt-2 flex items-center gap-4">
        <button
          type="button"
          onClick={previousAnime}
          aria-label="Previous anime"
          className="rounded-full border border-white/50 px-4 py-2 hover:bg-white hover:text-black"
        >
          ←
        </button>

        <span className="text-sm text-gray-300">
          {currentAnime + 1} / {HeroAnime.length}
        </span>

        <button
          type="button"
          onClick={nextAnime}
          aria-label="Next anime"
          className="rounded-full border border-white/50 px-4 py-2 hover:bg-white hover:text-black"
        >
          →
        </button>
      </div>
    </div>
  </section>
     )
}