import { assets } from "@/assets/assets";
import ProjectCard from "@/components/layouts/ProjectCard";
import { useTheme } from "@/components/theme-provider";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const categories = ["poster", "card", "design", "kemasan", "logo", "lukisan"];
const ProjectPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { theme } = useTheme();

  // State untuk kategori yang dipilih dan input pencarian
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Handler untuk perubahan kategori
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  // Handler untuk perubahan input pencarian
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtering assets berdasarkan kategori dan pencarian

  const filteredAssets = assets.filter((asset) => {
    const matchesCategory =
      selectedCategory === "all" || asset.category === selectedCategory;
    const matchesSearch =
      asset.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.image.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="py-16 pt-8 min-h-screen w-full">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-2xl md:text-4xl text-primary font-extrabold tracking-wide text-center mb-8 underline"
        >
          Projects{" "}
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

        <div className="w-full flex flex-col md:flex-row gap-5 justify-between mt-8">
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger
              className={`w-[180px] ${
                theme === "dark"
                  ? "bg-primary-foreground"
                  : "bg-secondary-foreground "
              }`}
            >
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value={"all"}>All Categories</SelectItem>
                {categories.map((category, index) => (
                  <SelectItem value={category} key={index}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            className={`w-[180px] ${
              theme === "dark"
                ? "bg-primary-foreground"
                : "bg-secondary-foreground "
            }`}
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
          {filteredAssets.length > 0 ? (
            filteredAssets.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          ) : (
            <div>No projects found.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
