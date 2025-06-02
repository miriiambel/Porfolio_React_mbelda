import { ArrowRight, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    titleKey: "pr1_title",
    descriptionKey: "pr1_descr",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/miriiambel/comercial-2smr.git"
  },
  {
    id: 2,
    titleKey: "pr2_title",
    descriptionKey: "pr2_descr",
    image: "/projects/project2.png",
    tags: ["HTML/CSS", "JavaScript", "SpringBoot"],
    githubUrl: "https://github.com/Cachad605/ProyectoIntermodular.git"
  },
  {
    id: 3,
    titleKey: "pr3_title",
    descriptionKey: "pr3_descr",
    image: "/projects/project3.png",
    tags: ["React", "CSS", "HTML"],
    githubUrl: "https://github.com/miriiambel/Dashboard_project.git"
  }
];

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("title1_projects")}<span className="text-primary">{t("title2_projects")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("descripction_projects")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-ws card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{t(project.titleKey)}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t(project.descriptionKey)}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/miriiambel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("btn_projects")} <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};
