import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Card } from "./components/card";
import { Navigation } from "./components/nav";
import { Github, Mail, LinkedinIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";

const navigation = [
  { name: "Projects", href: "" },
  { name: "Contact", href: "" },
];

const socials = [
	{
		icon: <LinkedinIcon size={20} />,
		href: "https://www.linkedin.com/in/sahil-shaikh-923876238/",
		label: "Linkedin",
		handle: "Sahil Shaikh",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:shaikh28@purdue.edu",
		label: "Email",
		handle: "shaikh28@purdue.edu",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/sahil7886",
		label: "Github",
		handle: "sahil7886",
	},
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-500/20 to-black">
      <Navigation/>
      <div className="mt-60 mb-16 text-center animate-fade-in">
        <h2 className="text-xl text-zinc-300 hover:text-transparent duration-500">
          Hey there! I&apos;m
        </h2>
      </div>
      <div className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl tracking-tight text-transparent duration-1100 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Sahil Shaikh
      </h1>
      <div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="mt-24 mb-16 text-center animate-fade-in">
        <h2 className="max-w-lg text-center text-base text-zinc-400 hover:text-transparent duration-500" >
          Envisioning the future through code. Pursuing Computer Science and Data Science at Purdue University.
        </h2>
      </div>
      <div className="mt-20 mb-10 text-center animate-fade-in">
        <a href="#projects">
          <ChevronDown className="text-zinc-600 hover:text-zinc-200 duration-500" size={40} />
        </a>
      </div>
      <div id = "projects" className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="animate-fade-in text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400 animate-fade-in">
            Projects from coursework, internships and those done in my own time
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
        <Card>
            <Link href={`https://github.com/mdmudassir0143/Algorand-IITBombay/`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <time dateTime="2024-04">
                    May 2024 - July 2024
                  </time>
                </div>
                </div>
                <h2
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  AlgoTrust
                </h2>
                <p className="mt-4 mb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Document verification platform built using smart contracts on the Algorand blockchain, IPFS storage and zk-based verification. Built using PyTeal, ReactJS, Flask and Python. Worked in collaboration with peers from Trust Lab, IIT Bombay.
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Check it out <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-zinc-100">
                <time dateTime="2024-04">
                  November 2024
                </time>
              </div>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display">
                Fashion Image Classification Engine
              </h2>
              <p className="mt-4 mb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                Built dual neural network implementations analyzing 70,000+ fashion product images using NumPy and PyTorch-Torchvision. Achieved 85%+ accuracy in classifying clothing items through custom backpropagation and optimization techniques.
              </p>
              {/* <div className="absolute bottom-4 md:bottom-8">
                <p className="hidden text-xs text-zinc-400 hover:text-zinc-500 duration-200 lg:block">
                  This code is private 
                </p>
              </div> */}
            </article>
          </Card>
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-zinc-100">
                <time dateTime="2024-04">
                  November 2024
                </time>
              </div>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display">
                Book Recommendation Engine
              </h2>
              <p className="mt-4 mb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                Built a recommendation system analyzing 1M+ book ratings using collaborative filtering and K-means clustering in Python. Implemented user-based similarity metrics and cluster analysis for personalized book suggestions.
              </p>
              {/* <div className="absolute bottom-4 md:bottom-8">
                <p className="hidden text-xs text-zinc-400 hover:text-zinc-500 duration-200 lg:block">
                  This code is private 
                </p>
              </div> */}
            </article>
          </Card>
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-zinc-100">
                <time dateTime="2024-04">
                  October 2024
                </time>
              </div>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display">
                Diabetes Risk Prediction System
              </h2>
              <p className="mt-4 mb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                Engineered a medical diagnostic model analyzing patient health metrics using NumPy-based logistic regression and perceptron algorithms. Implemented gradient descent and MLE for 90%+ prediction accuracy on clinical data.
              </p>
              {/* <div className="absolute bottom-4 md:bottom-8">
                <p className="hidden text-xs text-zinc-400 hover:text-zinc-500 duration-200 lg:block">
                  This code is private 
                </p>
              </div> */}
            </article>
          </Card>
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-zinc-100">
                <time dateTime="2024-04">
                  April 2024
                </time>
              </div>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                Shell
              </h2>
              <p className="mt-4 mb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                Made my own terminal that handles bash and unix commands, including wildcards, subshell, scripts, etc. Utilized lex and yacc for parsing, and implemented the terminal using C and C++ with extensive use of system calls.
              </p>
              {/* <div className="absolute bottom-4 md:bottom-8">
                <p className="hidden text-xs text-zinc-400 hover:text-zinc-500 duration-200 lg:block">
                  This code is private 
                </p>
              </div> */}
            </article>
          </Card>
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-zinc-100">
                <time dateTime="2024-04">
                  October 2024
                </time>
              </div>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                Fitness Data Analytics
              </h2>
              <p className="mt-4 mb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                Analyzed Fitbit time-series data using pandas and seaborn, performing statistical analysis on health metrics to discover activity patterns through data visualization and correlation studies.
              </p>
              {/* <div className="absolute bottom-4 md:bottom-8">
                <p className="hidden text-xs text-zinc-400 hover:text-zinc-500 duration-200 lg:block">
                  This code is private 
                </p>
              </div> */}
            </article>
          </Card>
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-zinc-100">
                <time dateTime="2024-04">
                  September 2024
                </time>
              </div>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display">
                Natural Language Processing with TF-IDF
              </h2>
              <p className="mt-4 mb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                Implemented TF-IDF vectorization and NLTK-based NLP pipeline in Python to analyze document similarities across classic literature, featuring custom preprocessing and cosine similarity calculations.
              </p>
              {/* <div className="absolute bottom-4 md:bottom-8">
                <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                  Check it out <span aria-hidden="true">&rarr;</span>
                </p>
              </div> */}
            </article>
          </Card>
          <Card>
            <Link href={`https://github.com/sahil7886/fitness-log`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <time dateTime="2024-04">
                    April 2024
                  </time>
                </div>
                </div>
                <h2
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Workout Tracker
                </h2>
                <p className="mt-4 mb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Web application using MERN stack along with Tailwind CSS that allows users to track workouts and exercises. This was done as part of a Database design course.
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Check it out <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-zinc-100">
                <time dateTime="2024-04">
                  December 2023
                </time>
              </div>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                C Compiler
              </h2>
              <p className="mt-4 mb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                Built a C compiler translating to x86_64 assembly, utilizing lex and yacc for robust parsing, supporting diverse C features.
              </p>
              {/* <div className="absolute bottom-4 md:bottom-8">
                <p className="hidden text-xs text-zinc-400 hover:text-zinc-500 duration-200 lg:block">
                  This code is private 
                </p>
              </div> */}
            </article>
          </Card>
          <Card>
            <Link href={`https://github.com/sahil7886/personal_website`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <time dateTime="2024-04">
                    May 2024
                  </time>
                </div>
                </div>

                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                  sahilshaikh.live
                </h2>
                <p className="mt-4 mb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  This website. Created using NextJS, Tailwind CSS and hosted on Vercel. 
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Check it out <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          <Card>
            <Link href={`https://devpost.com/software/boiler-maps`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <time dateTime="2024-04">
                    January 2023
                  </time>
                </div>
                </div>
                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                  Boiler Maps
                </h2>
                <p className="mt-4 mb-14 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Created a data visualisation platform mapping the impact of emissions on our environment in an interactive dashboard using html, css, pandas and plotly. 
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Check it out <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
        </div>
      </div>
      <div id = "contact" className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <h2 className="pt-12 mb-0 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Contact
          </h2>
          <div className="w-full h-px bg-zinc-800" />
          
        <div className="mt-0 pb-36 grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 lg:gap-16">
          {socials.map((s, index) => (
            <Card key={index}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
            
          ))}
        </div>
      </div>
    </div>
  );
}
