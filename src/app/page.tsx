import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Card } from "./components/card";
import { Navigation } from "./components/nav";

const navigation = [
  { name: "Projects", href: "" },
  { name: "Contact", href: "" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      {/* <nav className="mb-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-550 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav> */}
      <div className="mt-60 my-10 text-center animate-fade-in">
        <h2 className="text-xl text-zinc-300 hover:text-transparent duration-500">
          Hey there! I'm
        </h2>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="mb-6 z-10 text-4xl tracking-tight text-transparent duration-1100 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Sahil Shaikh
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-lg text-zinc-400 hover:text-transparent duration-500">
          I'm studying Computer Science at Purdue University.
        </h2>
      </div>
      <div className="relative pb-16">
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Projects from coursework, internships and those done in my own time
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <time dateTime="2024-04">
                    April 2024
                  </time>
                </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {"Fitness Tracker"}
                </h2>
                <p className="mt-4 mb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Web application using MERN stack that allows users to track workouts and exercises
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          </div>

        {/* <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div> */}
      </div>
    </div>
    </div>
    


  );

}
