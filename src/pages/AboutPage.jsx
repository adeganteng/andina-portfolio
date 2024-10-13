import { mainLogo, skills } from "@/assets/assets";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Briefcase, Download, GraduationCap } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AboutPage = () => {
  const { theme } = useTheme();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="py-16 pt-8 w-full">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-2xl md:text-4xl text-primary font-extrabold tracking-wide text-center mb-8 underline"
        >
          About{" "}
          <span
            className={`${
              theme === "dark"
                ? "text-secondary-foreground"
                : "text-primary-foreground"
            }`}
          >
            Me
          </span>
        </h1>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
          {/* left */}
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="flex-1 w-full group"
          >
            <div className=" m-auto w-fit overflow-hidden rounded-lg group-hover:bg-gradient-to-tr from-purple-500 to-primary transition-all duration-500 shadow-md shadow-primary">
              <img
                className="border-4 border-primary rounded-lg shadow-md shadow-primary transition-transform duration-500 group-hover:scale-105"
                src={mainLogo}
                alt=""
              />
            </div>
          </div>
          {/* right */}
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="flex-1 flex flex-col justify-evenly w-full h-full"
          >
            <p className={`text-lg md:text-xl font-bold mb-5 tracking-wide`}>
              Summery
            </p>
            <p className="text-base tracking-tight text-slate-500">
              Hi, I am Andina Aulia Agustina. I am currently a Visual
              Communication Design student at Sahid University, Surakarta. I
              possess skills in the visual creative field, such as creating
              Instagram feed designs, Instagram stories, and pamphlets.
              Additionally, I am active as a painting content creator on the
              Tiktok platform{" "}
              <a
                href="https://www.tiktok.com/@andinaa.aul?_t=8qKoZ9Gzayu&_r=1"
                className="text-primary"
                target="_blank"
              >
                @andinaa.aul
              </a>
              . I am someone who can work well in a team and contribute
              positively towards achieving shared goals. I am continuously
              developing my abilities with the hope of delivering a satisfying
              real work experience.
            </p>
            <div className="mt-3 md:mt-5 w-full gap-5 flex justify-start items-center">
              <Link
                to={
                  "https://drive.google.com/file/d/1-2QJrmTNFeCeTAUPYxBz8rO9FZeox27Q/view?usp=sharing"
                }
                target="_blank"
              >
                <Button
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="rounded-xl text-white text-lg p-5 hover:scale-105 duration-300 "
                >
                  MY RESUME <Download size={20} className="ml-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 w-full flex flex-col">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-2xl md:text-3xl text-primary font-extrabold tracking-wide text-start underline"
        >
          My Career{" "}
          <span
            className={`${
              theme === "dark"
                ? "text-secondary-foreground"
                : "text-primary-foreground"
            }`}
          >
            Journey
          </span>
        </h1>

        <div className="w-full hidden lg:flex lg:justify-center mt-8 ">
          <div className=" relative">
            <div className="absolute right-0 top-40 flex items-center">
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="flex items-center w-max gap-5 p-5 border border-primary rounded-md"
              >
                <div className="flex-1 flex flex-col gap-3 w-max p-2">
                  <p className="text-center text-xl font-bold">
                    Tim Kreatif in Audina Indonesia
                  </p>
                  <div className="flex w-full gap-5 justify-between">
                    <p className="font-medium text-sm">Internship</p>
                    <p className="font-medium text-sm">2021 (Juny - July)</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Briefcase
                    size={30}
                    className="text-primary font-extrabold text-2xl"
                  />
                </div>
              </div>
              <div className="w-10 h-1 bg-primary" />
            </div>
            <div className="absolute right-0 top-[400px] flex items-center">
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="flex items-center w-max gap-5 p-5 border border-primary rounded-md"
              >
                <div className="flex-1 flex flex-col gap-3 w-max p-2">
                  <p className="text-center text-xl font-bold">
                    Sahid Surakarta University
                  </p>
                  <div className="flex w-full gap-5 justify-between">
                    <p className="font-medium text-sm">
                      Design Komunikasi Visual
                    </p>
                    <p className="font-medium text-sm">2021-now</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Briefcase
                    size={30}
                    className="text-primary font-extrabold text-2xl"
                  />
                </div>
              </div>
              <div className="w-10 h-1 bg-primary" />
            </div>
          </div>
          <div className="min-h-[600px] border border-primary w-1 bg-primary" />
          <div className=" relative">
            <div className="absolute left-0 top-10 flex items-center">
              <div className="w-10 h-1 bg-primary" />
              <div
                data-aos="fade-left"
                data-aos-duration="3000"
                className="flex items-center w-max gap-5 p-5 border border-primary rounded-md"
              >
                <div className="flex justify-center items-center">
                  <GraduationCap
                    size={30}
                    className="text-primary font-extrabold text-2xl"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-3 w-max p-2">
                  <p className="text-center text-xl font-bold">
                    SMK IT Nur Hasan
                  </p>
                  <div className="flex w-full gap-5 justify-center">
                    <p className="font-medium text-sm">
                      Design Komunikasi Visual
                    </p>
                    <p className="font-medium text-sm">2019 - 2022</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-72 flex items-center">
              <div className="w-10 h-1 bg-primary" />
              <div
                data-aos="fade-left"
                data-aos-duration="3000"
                className="flex items-center w-max gap-5 p-5 border border-primary rounded-md"
              >
                <div className="flex justify-center items-center">
                  <Briefcase
                    size={30}
                    className="text-primary font-extrabold text-2xl"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-3 w-max p-2">
                  <p className="text-center text-xl font-bold">
                    Studio E&E Media Kreatif
                  </p>
                  <div className="flex w-full gap-5 justify-between">
                    <p className="font-medium text-sm">Internship</p>
                    <p className="font-medium text-sm">2022 (May - July)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full m-auto flex flex-col justify-center items-center lg:hidden mt-8">
          <div className="h-5 w-5 bg-primary border border-primary rounded-full animate-pulse duration-1000" />
          <div className="h-10 w-1 bg-primary border border-primary" />
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="flex items-center gap-5 border border-primary p-3 rounded-lg w-[100%] sm:w-[400px]"
          >
            <div>
              <GraduationCap
                size={30}
                className="text-primary font-extrabold text-2xl"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">SMK IT Nur Hasan</p>
              <div className="flex gap-5 items-center">
                <p className="text-sm font-normal">Design Komunikasi Visual</p>
                <p className="text-sm font-normal">2019-2022</p>
              </div>
            </div>
          </div>
          <div className="h-10 w-1 bg-primary border border-primary" />
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="flex items-center gap-5 border border-primary p-3 rounded-lg w-[100%] sm:w-[400px]"
          >
            <div>
              <Briefcase
                size={30}
                className="text-primary font-extrabold text-2xl"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">
                Tim Kreatif in Audina Indonesia
              </p>
              <div className="flex gap-5 justify-between items-center">
                <p className="text-sm font-normal">Internship</p>
                <p className="text-sm font-normal">2021 (July-Juny)</p>
              </div>
            </div>
          </div>
          <div className="h-10 w-1 bg-primary border border-primary" />
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="flex items-center gap-5 border border-primary p-3 rounded-lg w-[100%] sm:w-[400px]"
          >
            <div>
              <Briefcase
                size={30}
                className="text-primary font-extrabold text-2xl"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">Studio E&E Media Kreatif</p>
              <div className="flex gap-5 justify-between items-center">
                <p className="text-sm font-normal">Internship</p>
                <p className="text-sm font-normal">2022 (May-July)</p>
              </div>
            </div>
          </div>
          <div className="h-10 w-1 bg-primary border border-primary" />
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="flex items-center gap-5 border border-primary p-3 rounded-lg w-[100%] sm:w-[400px]"
          >
            <div>
              <GraduationCap
                size={30}
                className="text-primary font-extrabold text-2xl"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">Sahid Surakarta University</p>
              <div className="flex gap-5 justify-between items-center">
                <p className="text-sm font-normal">Design Komunikasi Visual</p>
                <p className="text-sm font-normal">2022-now</p>
              </div>
            </div>
          </div>
          <div className="h-10 w-1 bg-primary border border-primary" />
          <div className="h-1 w-10 bg-primary border border-primary" />
        </div>
      </div>
      <div className="py-16 w-full flex flex-col">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-2xl md:text-3xl text-primary font-extrabold tracking-wide text-start underline"
        >
          My{" "}
          <span
            className={`${
              theme === "dark"
                ? "text-secondary-foreground"
                : "text-primary-foreground"
            }`}
          >
            Skills
          </span>
        </h1>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          <div className="col-span-2">
            <p>
              I have a lot of skills that will help me in my future career
              journey. So don`t hesitate to collaborate with me right now.I am
              eager to bring my expertise to your team and contribute to
              innovative projects.
            </p>
          </div>
          {skills.map((skill) => (
            <div
              data-aos="flip-right"
              data-aos-duration="2000"
              key={skill.id}
              className={`${skill.bg} h-24 flex items-center justify-center rounded-lg hover:-translate-y-2 cursor-pointer duration-300`}
            >
              <p className="text-xl font-semibold text-center">{skill.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
