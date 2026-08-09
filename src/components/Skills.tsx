import Title from "./Common/Title";
import data from "@/data/data.json";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

const Skills = () => {
  return (
    <div id="skills">
      <Title num={5} title="Skills" />

      <div className="flex flex-wrap items-center justify-center mt-10 space-x-5 gap-y-6 sm:space-x-6 sm:gap-y-[30px] md:space-x-10 md:items-start md:justify-start">
        {data.skills.map((skill, i) => (
          <motion.a
            className="cursor-pointer relative w-16 h-16 sm:w-20 sm:h-20"
            href={skill.link}
            key={i}
            rel="noreferrer"
            target="_blank"
            whileHover={{
              scale: [1, 1.3, 1.15],
              zIndex: 1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Image
              alt={skill.name}
              layout="fill"
              objectFit="contain"
              src={skill.src}
            />
          </motion.a>
        ))}
      </div>
      <div className="relative h-40 sm:h-56 md:h-80 mt-10 md:mt-20">
        <Image
          alt={data.name}
          layout="fill"
          objectFit="contain"
          src="/stats.png"
        />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl sm:text-3xl text-textDark md:text-6xl">
          Github Contibution
        </h2>
        <div className="hideScrollBar mt-6 w-full overflow-x-auto">
          <GitHubCalendar
            blockSize={11}
            fontSize={12}
            showColorLegend={false}
            showTotalCount={false}
            username="kunalpratapsinghh"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
