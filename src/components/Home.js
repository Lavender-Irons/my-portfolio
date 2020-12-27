import React from "react";
import background from "../images/background.png";

export default function Home() {
  return (
    <main>
      <img
        src={background}
        alt="purple background"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-50 px-8">
        <h1 className="text-3xl text-purple-300 font-bold cursive leading-none lg:leading-snug home-name">
          Lavender Irons, M.S.Ed. Portfolio
        </h1>
      </section>
    </main>
  );
}