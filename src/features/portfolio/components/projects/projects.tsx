"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";

import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { usePortfolioPreferences } from "@/providers/portfolio-preferences-provider";
import type { Project, ProjectCategory } from "@/types/portfolio";

import { GitHubIcon } from "../ui/brand-icons";
import { SectionHeading } from "../ui/section-heading";

type ProjectFilter = "all" | ProjectCategory;

interface ProjectCardProps {
  project: Project;
  featured: boolean;
}

function ProjectCard({
  project,
  featured,
}: ProjectCardProps): React.JSX.Element {
  const { translate } = usePortfolioPreferences();
  const tiltRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(
    event: PointerEvent<HTMLElement>,
  ): void {
    if (
      !tiltRef.current ||
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const xRatio =
      (event.clientX - bounds.left) / bounds.width - 0.5;
    const yRatio =
      (event.clientY - bounds.top) / bounds.height - 0.5;

    const rotateY = xRatio * 4.5;
    const rotateX = yRatio * -4.5;

    tiltRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0,-3px,0)`;
  }

  function resetTilt(): void {
    if (!tiltRef.current) {
      return;
    }

    tiltRef.current.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{
        duration: 0.48,
        ease: [0.22, 1, 0.36, 1],
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className={cn(featured && "lg:col-span-2")}
    >
      <div
        ref={tiltRef}
        className={cn(
          "group grid h-full overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-premium transition-[transform,border-color] duration-300 ease-out hover:border-line-strong",
          featured && "lg:grid-cols-[1.28fr_0.72fr]",
        )}
      >
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} — ${translate(
            portfolioData.projectsSection.liveDemo,
          )}`}
          className={cn(
            "relative block min-h-64 overflow-hidden border-b border-line bg-soft",
            featured
              ? "aspect-16/10 lg:aspect-auto lg:min-h-124 lg:border-b-0 lg:border-r"
              : "aspect-16/10",
          )}
        >
          <Image
            src={project.image}
            alt={translate(project.imageAlt)}
            fill
            sizes={
              featured
                ? "(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"
                : "(min-width: 1024px) 40vw, 100vw"
            }
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent opacity-70" />

          <span className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white text-zinc-950 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight
              className="h-5 w-5"
              aria-hidden="true"
            />
          </span>
        </a>

        <div className="flex flex-col p-6 sm:p-8 lg:p-9">
          <div className="flex flex-wrap items-center gap-2">
            {featured ? (
              <span className="rounded-full border border-accent-violet/25 bg-accent-violet/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-accent-violet">
                {translate(
                  portfolioData.projectsSection.featuredLabel,
                )}
              </span>
            ) : null}

            <span className="rounded-full border border-line px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-muted">
              {translate(project.categoryLabel)}
            </span>
          </div>

          <h3 className="display-text mt-6 text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-muted sm:text-base sm:leading-7">
            {translate(project.description)}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.techStack.map((technology) => (
              <li
                key={`${project.id}-${technology}`}
                className="rounded-lg bg-soft px-2.5 py-1.5 font-mono text-[0.68rem] text-muted-strong"
              >
                {technology}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-5 border-t border-line pt-7 sm:gap-7">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-accent-cyan"
            >
              {translate(
                portfolioData.projectsSection.liveDemo,
              )}

              <ExternalLink
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-ink"
            >
              <GitHubIcon className="h-4 w-4" />
              {translate(
                portfolioData.projectsSection.sourceCode,
              )}
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects(): React.JSX.Element {
  const { translate } = usePortfolioPreferences();
  const [selectedFilter, setSelectedFilter] =
    useState<ProjectFilter>("all");

  const projects =
    selectedFilter === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter(
        (project) => project.category === selectedFilter,
      );

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div
        data-parallax
        className="pointer-events-none absolute -right-52 top-1/3 h-128 w-lg rounded-full bg-accent-violet/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading copy={portfolioData.projectsSection} />

          <div
            role="group"
            aria-label="Bộ lọc dự án"
            className="grid w-full max-w-full grid-cols-2 gap-1.5 rounded-2xl border border-line bg-surface p-1.5 sm:grid-cols-3 lg:ml-auto lg:max-w-lg"
          >
            {portfolioData.projectsSection.filters.map(
              (filter) => {
                const isActive =
                  selectedFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() =>
                      setSelectedFilter(filter.id)
                    }
                    aria-pressed={isActive}
                    className={cn(
                      "inline-flex min-h-10 min-w-0 w-full items-center justify-center rounded-lg px-3 py-2.5 text-center text-xs font-bold leading-5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan sm:min-h-11 sm:px-4",
                      filter.id === "all"
                        ? "col-span-2 sm:col-span-3"
                        : "col-span-1",
                      isActive
                        ? "bg-ink text-canvas shadow-sm"
                        : "text-muted hover:bg-soft hover:text-ink",
                    )}
                  >
                    <span className="line-clamp-2">
                      {translate(filter.label)}
                    </span>
                  </button>
                );
              },
            )}
          </div>
        </div>

        <motion.div
          layout
          className="mt-14 grid gap-5 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={project.id === "prj-1"}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-24">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="display-text text-3xl font-semibold tracking-[-0.04em] text-ink">
                {translate(
                  portfolioData.projectsSection.archiveTitle,
                )}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                {translate(
                  portfolioData.projectsSection.archiveDescription,
                )}
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="hidden grid-cols-[1fr_1.2fr_auto] gap-6 border-b border-line px-6 py-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted md:grid">
              <span>
                {translate(
                  portfolioData.projectsSection.archiveColumns.project,
                )}
              </span>

              <span>
                {translate(
                  portfolioData.projectsSection.archiveColumns.stack,
                )}
              </span>

              <span>
                {translate(
                  portfolioData.projectsSection.archiveColumns.link,
                )}
              </span>
            </div>

            {portfolioData.archiveProjects.map(
              (project, index) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "group grid gap-4 px-5 py-5 transition-colors hover:bg-soft/55 md:grid-cols-[1fr_1.2fr_auto] md:items-center md:gap-6 md:px-6",
                    index <
                    portfolioData.archiveProjects.length - 1 &&
                    "border-b border-line",
                  )}
                >
                  <strong className="text-sm font-bold text-ink">
                    {project.title}
                  </strong>

                  <span className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[0.68rem] text-muted">
                    {project.techStack.map((technology) => (
                      <span
                        key={`${project.id}-${technology}`}
                      >
                        {technology}
                      </span>
                    ))}
                  </span>

                  <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-[background-color,color,transform] group-hover:-translate-y-0.5 group-hover:bg-ink group-hover:text-canvas">
                    <ArrowUpRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}