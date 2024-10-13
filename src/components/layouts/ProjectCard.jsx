import { useTheme } from "../theme-provider";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import DetailProject from "./DetailProject";

const ProjectCard = ({ project }) => {
  const { theme } = useTheme();
  return (
    <Card
      data-aos="zoom-in"
      data-aos-duration="1000"
      className={`group overflow-hidden rounded-lg shadow-md shadow-slate-400 ${
        theme === "dark"
          ? "bg-primary-foreground "
          : "bg-secondary-foreground text-black"
      }`}
    >
      <img
        src={project.image}
        className="aspect-square w-full object-cover grayscale group-hover:grayscale-0 duration-300 group-hover:scale-105 rounded-md"
        alt=""
      />
      <div className="w-full px-2 py-3 flex justify-between items-center">
        <p className="text-lg font-medium tracking-wide">{project.category}</p>
        <DetailProject project={project} />
      </div>
    </Card>
  );
};

export default ProjectCard;
