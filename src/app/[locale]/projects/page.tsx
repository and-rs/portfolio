import { ImageDialog } from "@app/components/image-dialog";
import Marquee from "@components/marquee";
import { Button } from "@components/ui/button";
import { Card, CardContent } from "@components/ui/card";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Andres Bautista's Projects",
};

export default async function Projects() {
  const locale = await getLocale();
  const t = await getTranslations();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        {t("nav.projects")}
      </h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="overflow-hidden relative flex-none p-2 md:w-2/5 aspect-[16/10]">
                <Image
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 80vw, 100vw"
                  alt={`Screenshot of ${title}`}
                  className="object-cover brightness-95 saturate-50"
                  src={project.image}
                  priority
                  fill
                />
                <ImageDialog title={project.title} image={project.image} />
              </div>
              <CardContent className="flex-1 p-4 space-y-2 md:w-3/5">
                <Marquee technologies={project.technologies} />
                <div className="flex gap-2 justify-between w-full leading-none">
                  <h2>{project.title}</h2>
                  <span>{project.year}</span>
                </div>
                <p>
                  {locale === "en"
                    ? project.description.en
                    : project.description.es}
                </p>
                <hr />
                <div className="flex flex-row gap-2 justify-end">
                  {project.website && (
                    <ProjectsButton icon={FiGlobe} url={project.website}>
                      {t("projects.website")}
                    </ProjectsButton>
                  )}

                  {project.source && (
                    <ProjectsButton icon={FiGithub} url={project.source}>
                      {t("projects.source")}
                    </ProjectsButton>
                  )}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ProjectsButton({
  url,
  children,
  icon: Icon,
}: { url: string; children: ReactNode; icon: IconType }) {
  return (
    <Button asChild size={"sm"} variant={"outline"} className="[&_svg]:size-4">
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {children} <Icon />
      </Link>
    </Button>
  );
}
