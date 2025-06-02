export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  dateTime: string;
  href?: string;
  showCheckItOut?: boolean;
}

export const projects: Project[] = [
  {
    id: "golfmate",
    title: "GolfMate",
    description: "AI-powered golf swing analysis tool that uses a GRU-based neural network to evaluate posture in real time, classify swing quality, and offer targeted form corrections. Winner of the 'Best AI-Driven Solution' prize at Catapult 2025.",
    date: "April 2025",
    dateTime: "2025-04",
    href: "https://devpost.com/software/golfmate",
    showCheckItOut: true
  },
  {
    id: "deeplever",
    title: "DeepLever",
    description: "A decentralized margin trading platform built on Sui blockchain, enabling users to trade cryptocurrencies with up to 50x leverage. Winner of the Sui Bounty at Nexus, TTU's Blockchain Hackathon. ",
    date: "May 2025",
    dateTime: "2025-05",
    href: "https://github.com/sahil7886/DeepLever",
    showCheckItOut: true
  },
  {
    id: "algotrust",
    title: "AlgoTrust",
    description: "Document verification platform built using smart contracts on the Algorand blockchain, IPFS storage and zk-based verification. Built using PyTeal, ReactJS, Flask and Python. Worked in collaboration with peers from Trust Lab, IIT Bombay.",
    date: "May 2024 - July 2024",
    dateTime: "2024-04",
    href: "https://github.com/unmani-shinde/Algorand-IITBombay",
    showCheckItOut: true
  },
  {
    id: "book-recommendation",
    title: "Book Recommendation Engine",
    description: "Built a recommendation system analyzing 1M+ book ratings using collaborative filtering and K-means clustering in Python. Implemented user-based similarity metrics and cluster analysis for personalized book suggestions.",
    date: "November 2024",
    dateTime: "2024-04"
  },
  {
    id: "diabetes-prediction",
    title: "Diabetes Risk Prediction System",
    description: "Engineered a medical diagnostic model analyzing patient health metrics using NumPy-based logistic regression and perceptron algorithms. Implemented gradient descent and MLE for 90%+ prediction accuracy on clinical data.",
    date: "October 2024",
    dateTime: "2024-04"
  },
  {
    id: "shell",
    title: "Shell",
    description: "Made my own terminal that handles bash and unix commands, including wildcards, subshell, scripts, etc. Utilized lex and yacc for parsing, and implemented the terminal using C and C++ with extensive use of system calls.",
    date: "April 2024",
    dateTime: "2024-04"
  },
  {
    id: "nlp-tfidf",
    title: "Natural Language Processing with TF-IDF",
    description: "Implemented TF-IDF vectorization and NLTK-based NLP pipeline in Python to analyze document similarities across classic literature, featuring custom preprocessing and cosine similarity calculations.",
    date: "September 2024",
    dateTime: "2024-04"
  },
  {
    id: "fashion-classification",
    title: "Fashion Image Classification Engine",
    description: "Built dual neural network implementations analyzing 70,000+ fashion product images using NumPy and PyTorch-Torchvision. Achieved 85%+ accuracy in classifying clothing items through custom backpropagation and optimization techniques.",
    date: "November 2024",
    dateTime: "2024-04"
  },
  {
    id: "c-compiler",
    title: "C Compiler",
    description: "Built a C compiler translating to x86_64 assembly, utilizing lex and yacc for robust parsing, supporting diverse C features.",
    date: "December 2023",
    dateTime: "2024-04"
  },
  {
    id: "workout-tracker",
    title: "Workout Tracker",
    description: "Web application using MERN stack along with Tailwind CSS that allows users to track workouts and exercises. This was done as part of a Database design course.",
    date: "April 2024",
    dateTime: "2024-04",
    href: "https://github.com/sahil7886/fitness-log",
    showCheckItOut: true
  },
  {
    id: "personal-website",
    title: "sahilshaikh.xyz",
    description: "This website. Created using NextJS, Tailwind CSS and hosted on Vercel.",
    date: "May 2024",
    dateTime: "2024-04",
    href: "https://github.com/sahil7886/personal_website",
    showCheckItOut: true
  },
  {
    id: "boiler-maps",
    title: "Boiler Maps",
    description: "Created a data visualisation platform mapping the impact of emissions on our environment in an interactive dashboard using html, css, pandas and plotly.",
    date: "January 2023",
    dateTime: "2024-04",
    href: "https://devpost.com/software/boiler-maps",
    showCheckItOut: true
  }
]; 