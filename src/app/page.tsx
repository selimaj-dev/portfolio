"use client";

import { motion, spring } from "framer-motion";
import PinnedRepos from "@/components/PinnedRepos";
import Skill from "@/components/Skill";
import {
  faGithub,
  faGolang,
  faInstagram,
  faJs,
  faLinkedin,
  faPython,
  faReact,
  faRust,
} from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons/faJava";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CoffeeIcon, HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { fadeInUp, popIn, staggerContainer } from "@/components/effects";

export default function App() {
  const [contribs, setContribs] = useState<number>();

  useEffect(() => {
    const fetchContributions = async () => {
      const res = await fetch("/api/contribs");
      const data = await res.json();
      setContribs(data.total || undefined);
    };
    fetchContributions();
  }, []);

  return (
    <motion.div
      className="w-full max-w-screen-lg mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="px-8 md:px-10 lg:px-15 xl:px-24">
        {/* HEADER */}
        <motion.h1
          className="py-2 text-gray-300"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          Hey, I'm Klesti! 👋🏻
        </motion.h1>

        <motion.p
          className="font-semibold text-gray-300"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.15 }}
        >
          A 15 year old Software Engineer from Tirane, Albania, with 6 years of
          experience, specializing in full-stack web development, desktop
          applications, TUI apps, and hacking. I also have a deep interest in
          low-level programming.
        </motion.p>

        {/* KO-FI BUTTON */}
        <motion.div
          className="pt-6"
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <a href="https://ko-fi.com/X8X01OX1WR" target="_blank">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent-ish rounded-md border border-slate-400 p-2 flex w-max gap-2 items-center cursor-pointer"
            >
              <CoffeeIcon /> Support me on Ko-fi
            </motion.span>
          </a>
        </motion.div>

        {/* SOCIALS + SKILLS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 bg-transparent"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* socials */}
          <motion.div className="pt-5 flex flex-row gap-5 w-max">
            {[faGithub, faLinkedin, faInstagram].map((icon, i) => (
              <motion.a
                key={i}
                href={
                  icon === faGithub
                    ? "https://github.com/selimaj-dev/"
                    : icon === faLinkedin
                    ? "https://www.linkedin.com/in/klesti-selimaj-7a0162343/"
                    : "https://www.instagram.com/selimaj.dev/"
                }
                target="blank_"
                variants={popIn}
                whileHover={{ scale: 1.2, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="text-slate-400 size-[2.3rem]"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* skills */}
          <motion.div variants={popIn}>
            <div className="p-3 rounded-xl">
              <motion.div
                className="mx-auto w-max flex flex-row gap-5"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={popIn}>
                  <Skill skill="Rust" icon={faRust} />
                </motion.div>
                <motion.div variants={popIn}>
                  <Skill skill="Go" icon={faGolang} />
                </motion.div>
                <motion.div variants={popIn}>
                  <Skill skill="JavaScript" icon={faJs} />
                </motion.div>
                <motion.div variants={popIn}>
                  <Skill skill="Java" icon={faJava} classInsert="p-1" />
                </motion.div>
                <motion.div variants={popIn}>
                  <Skill skill="Python" icon={faPython} />
                </motion.div>
                <motion.div variants={popIn}>
                  <Skill skill="React" icon={faReact} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* PINNED PROJECTS */}
        <motion.h1
          className="text-slate-300 mt-4"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          Pinned Projects
        </motion.h1>

        <motion.section>
          <PinnedRepos />
        </motion.section>

        {/* CONTRIBUTIONS */}
        <motion.h2
          className="text-slate-300 mt-7"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          {contribs || "Loading.."} contributions in the last year
        </motion.h2>

        <motion.section
          className="mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <GitHubCalendar
            // hideTotalCount
            username="selimaj-dev"
            theme={{
              light: [
                "rgba(255, 255, 255, 0.1)",
                "rgba(255, 255, 255, 0.3)",
                "rgba(255, 255, 255, 0.5)",
                "rgba(255, 255, 255, 0.7)",
                "rgba(255, 255, 255, 1)",
              ],
              dark: [
                "rgba(255, 255, 255, 0.1)",
                "rgba(255, 255, 255, 0.3)",
                "rgba(255, 255, 255, 0.5)",
                "rgba(255, 255, 255, 0.7)",
                "rgba(255, 255, 255, 1)",
              ],
            }}
          />
        </motion.section>

        {/* FOOTER */}
        <footer className="mt-8 border-t pt-3 pb-8">
          <motion.p
            className="flex gap-1 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            If you see this i{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.3 }}
            >
              <HeartIcon className="size-4" />
            </motion.span>{" "}
            you
          </motion.p>

          <motion.p
            className="text-slate-300 mx-auto w-max mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            © 2025 Klesti. All rights reserved.
          </motion.p>
        </footer>
      </div>
    </motion.div>
  );
}
