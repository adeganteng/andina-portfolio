import { assets, logo, testimonials } from "@/assets/assets";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, UserCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "@/components/layouts/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  const { theme } = useTheme();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = [
    "Andina Aulia Agustina",
    "Graphic Designer",
    "Painter",
    "Student",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (letterIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 200); // Interval untuk setiap huruf

      return () => clearTimeout(timeout);
    } else {
      // Reset setelah menampilkan semua huruf
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setLetterIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 1000); // Tunggu 1 detik sebelum mengganti kata

      return () => clearTimeout(timeout);
    }
  }, [letterIndex, currentTextIndex, texts]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Main */}
      <div className="pt-8 md:pt-12 pb-16 flex justify-center items-center flex-col relative">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
          className=" w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-[5px] border-primary bg-primary-foreground shadow-md shadow-primary group hover:bg-gradient-to-tr from-purple-500 to-primary transition-all duration-500 "
        >
          <img
            className="w-full h-full border-[3px] border-pink-500 rounded-full group-hover:scale-105"
            src={logo}
            alt="Logo"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-full lg:w-3/4  mt-5 md:mt-9"
        >
          <p className="flex flex-wrap justify-center gap-2 text-3xl md:text-5xl font-extrabold tracking-wide text-center">
            <span>Hello, I am </span>
            <span className="text-primary underline  duration-1000 ease-in-out animate-fade ">
              {displayedText}
            </span>
          </p>
          <p
            className={`mt-5 text-center text-lg tracking-wide ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I am a graphic designer based in Indonesia and currently a student
            at Sahid Surakarta University. I usually work with design tools and
            techniques for various creative projects.
          </p>
        </div>
        <Link
          to={
            "https://drive.google.com/file/d/1-2QJrmTNFeCeTAUPYxBz8rO9FZeox27Q/view?usp=sharing"
          }
          target="_blank"
          className="mt-5 md:mt-10 "
        >
          <Button
            data-aos="fade-up"
            data-aos-duration="3000"
            className="rounded-xl text-white text-lg p-5 hover:scale-105 duration-300 "
          >
            MY RESUME <Download size={20} className="ml-3" />
          </Button>
        </Link>

        <div className="absolute top-3 right-3 w-44 h-[500px] -rotate-45 rounded-full -z-40 opacity-45  bg-primary  blur-3xl animate-pulse duration-1000 " />
        <div className="absolute bottom-3 left-3 w-44 h-[500px] -rotate-45 rounded-full -z-40 opacity-45  bg-primary  blur-3xl  animate-pulse duration-1000 " />
      </div>
      {/* Related Me */}
      <div className="py-16 w-full">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-2xl md:text-3xl text-primary font-extrabold tracking-wide text-start underline"
        >
          Related{" "}
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
        <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-5 mt-5">
          {/* left */}
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
              <Link
                to={"/about"}
                className="group"
                onClick={() => scrollTo(0, 0)}
              >
                <Button
                  variant="outline"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className={`rounded-xl ${
                    theme === "dark"
                      ? "text-secondary-foreground"
                      : "text-white"
                  }`}
                >
                  ABOUT ME{" "}
                  <ArrowRight
                    size={20}
                    className="ml-3 group-hover:translate-x-2 duration-300"
                  />
                </Button>
              </Link>
            </div>
          </div>

          {/* right */}
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="flex-1 w-full group"
          >
            <div className=" m-auto w-fit overflow-hidden rounded-lg group-hover:bg-gradient-to-tr from-purple-500 to-primary transition-all duration-500 shadow-md shadow-primary">
              <img
                className="border-4 border-primary rounded-lg shadow-md shadow-primary transition-transform duration-500 group-hover:scale-105"
                src={logo}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Latest Project */}
      <div className="py-16 w-full flex flex-col justify-start">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-2xl md:text-3xl text-primary font-extrabold tracking-wide text-start underline"
        >
          Latest{" "}
          <span
            className={`${
              theme === "dark"
                ? "text-secondary-foreground"
                : "text-primary-foreground"
            }`}
          >
            Projects
          </span>
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-5">
          {assets.slice(assets.length - 5, assets.length).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Link
          to={"/project"}
          onClick={() => scrollTo(0, 0)}
          className="w-full flex justify-end gap-1 text-sm mt-5 hover:text-primary underline items-center group"
        >
          show more{" "}
          <ArrowRight
            size={18}
            className="group-hover:translate-x-2 duration-300"
          />
        </Link>
      </div>
      <div className="py-8 w-full grid grid-cols-3">
        <div className="h-24 flex flex-col items-center justify-center ">
          <p className="text-3xl font-bold text-primary">-1</p>
          <p className="text-sm text-slate-500">Years of Experience</p>
        </div>
        <div className="h-24 flex flex-col items-center justify-center  border-x border-x-primary">
          <p className="text-3xl font-bold text-primary">{assets.length}</p>
          <p className="text-sm text-slate-500">Projects Completed</p>
        </div>
        <div className="h-24 flex flex-col items-center justify-center ">
          <p className="text-3xl font-bold text-primary">
            {testimonials.length}
          </p>
          <p className="text-sm text-slate-500">Happy Clients</p>
        </div>
      </div>
      <div className="py-16 w-full flex flex-col justify-start">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-2xl md:text-3xl text-primary font-extrabold tracking-wide text-start underline"
        >
          Testimonials{" "}
          <span
            className={`${
              theme === "dark"
                ? "text-secondary-foreground"
                : "text-primary-foreground"
            }`}
          >
            Clients
          </span>
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testi, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 overflow-hidden mt-8"
              >
                <div className="p-1">
                  <Card>
                    <CardContent
                      className={`w-full flex flex-col p-3 rounded-lg ${
                        theme === "dark"
                          ? "bg-primary-foreground"
                          : " bg-secondary-foreground"
                      }`}
                    >
                      <UserCircle
                        size={100}
                        className={`m-auto ${
                          theme === "dark"
                            ? "text-secondary-foreground"
                            : "text-primary-foreground"
                        }`}
                      />
                      <p
                        className={`text-2xl font-bold my-3 ${
                          theme === "dark"
                            ? "text-secondary-foreground"
                            : "text-primary-foreground"
                        }`}
                      >
                        {testi.namaCustomer}
                      </p>
                      <p
                        className={`text-base font-medium ${
                          theme === "dark"
                            ? "text-secondary-foreground"
                            : "text-primary-foreground"
                        }`}
                      >
                        {testi.deskripsi}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={`${
              theme === "dark"
                ? "bg-primary-foreground"
                : " bg-secondary-foreground"
            }`}
          />
          <CarouselNext
            className={`${
              theme === "dark"
                ? "bg-primary-foreground"
                : " bg-secondary-foreground"
            }`}
          />
        </Carousel>

        <Link
          to={"/contact"}
          onClick={() => scrollTo(0, 0)}
          className="mt-8 mx-auto"
        >
          <Button className="w-max text-center text-white flex gap-2 group">
            Contact Me{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 duration-300"
            />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
