import { portfolioData } from "@/data/portfolioData";
import { About } from "@/features/portfolio/components/about/about";
import { Contact } from "@/features/portfolio/components/contact/contact";
import { Experience } from "@/features/portfolio/components/experience/experience";
import { Hero } from "@/features/portfolio/components/hero/hero";
import { Projects } from "@/features/portfolio/components/projects/projects";
import { Skills } from "@/features/portfolio/components/skills/skills";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioData.personalInfo.name,
  jobTitle: portfolioData.personalInfo.role.en,
  email: `mailto:${portfolioData.personalInfo.email}`,
  telephone: portfolioData.personalInfo.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Can Tho",
    addressCountry: "VN",
  },
  sameAs: [
    portfolioData.personalInfo.github,
    portfolioData.personalInfo.linkedin,
    portfolioData.personalInfo.zalo,
  ],
  knowsAbout: portfolioData.skills.flatMap((group) => group.items),
};

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
