import Title from "../Common/Title";
import ExperienceTile from "./Experience";
import data from "@/data/data.json";

const Experience = () => {
  return (
    <div id="experience">
      <Title num={2} title="Experience" />
      <div className="flex flex-col mt-10">
        {data.experience.map((project: any, i: number) => (
          <div key={i}>
            <p>
              <a
                className="text-neon text-base sm:text-lg md:text-xl"
                href={project.link}
                rel="noreferrer"
                target="_blank"
              >
                {`${i + 1}. ${project.name}`}
              </a>
              <span className="ml-3 italic text-sm sm:text-base text-textDark">
                {project.time}
              </span>
            </p>
            <div
              className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start"
              key={i}
            >
              <ExperienceTile work={project.work} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
