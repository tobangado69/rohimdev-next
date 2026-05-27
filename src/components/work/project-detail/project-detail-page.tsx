import Link from "next/link";
import type { ProjectContent } from "@/types/content";
import { ProjectConversionSection } from "./project-conversion";
import { ProjectDeliverables } from "./project-deliverables";
import { ProjectFeatures } from "./project-features";
import { ProjectGallery } from "./project-gallery";
import { ProjectHero } from "./project-hero";
import { ProjectInfrastructureSection } from "./project-infrastructure";
import { ProjectMeta } from "./project-meta";
import { ProjectMetrics } from "./project-metrics";
import { ProjectNarrativeSection } from "./project-narrative-section";
import { ProjectPricingSection } from "./project-pricing";
import { ProjectProcess } from "./project-process";
import { ProjectResponsiveUxSection } from "./project-responsive-ux";
import { ProjectSeoPerformanceSection } from "./project-seo-performance";
import { ProjectSocialProofSection } from "./project-social-proof";
import { ProjectTechStack } from "./project-tech-stack";
import { ProjectTestimonial } from "./project-testimonial";
import { hasItems, hasTestimonial } from "./utils";

type ProjectDetailPageProps = {
  project: ProjectContent;
};

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const { detail } = project;

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-20 md:space-y-28">
      <nav className="animate-fade-up">
        <Link
          href="/work"
          className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          ← Back to work
        </Link>
      </nav>

      <ProjectHero project={project} />
      <ProjectMeta project={project} />

      <ProjectNarrativeSection section={detail.overview} />
      <div className="grid gap-16 md:grid-cols-2 md:gap-12">
        <ProjectNarrativeSection section={detail.challenge} />
        <ProjectNarrativeSection section={detail.solution} />
      </div>

      {hasItems(detail.gallery) && <ProjectGallery items={detail.gallery} />}

      {detail.designDirection && (
        <ProjectNarrativeSection section={detail.designDirection} />
      )}

      {detail.responsiveUx && (
        <ProjectResponsiveUxSection responsiveUx={detail.responsiveUx} />
      )}

      <ProjectTechStack
        groups={detail.techStack ?? []}
        technologies={project.technologies}
      />

      {detail.infrastructure && (
        <ProjectInfrastructureSection infrastructure={detail.infrastructure} />
      )}

      <ProjectFeatures features={detail.features} />

      {hasItems(detail.process) && <ProjectProcess steps={detail.process} />}
      {hasItems(detail.deliverables) && (
        <ProjectDeliverables deliverables={detail.deliverables} />
      )}
      {hasItems(detail.metrics) && <ProjectMetrics metrics={detail.metrics} />}

      {hasTestimonial(detail.testimonial) && (
        <ProjectTestimonial testimonial={detail.testimonial!} />
      )}

      {detail.socialProof && (
        <ProjectSocialProofSection socialProof={detail.socialProof} />
      )}

      {detail.pricing && <ProjectPricingSection pricing={detail.pricing} />}

      {detail.seoPerformance && (
        <ProjectSeoPerformanceSection seoPerformance={detail.seoPerformance} />
      )}

      {project.body && (
        <section className="space-y-4 animate-fade-up border-t border-neutral-200 pt-12">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900">
            Extended Narrative
          </h2>
          <div className="prose prose-neutral max-w-3xl text-lg text-neutral-600 leading-relaxed whitespace-pre-line">
            {project.body}
          </div>
        </section>
      )}

      <ProjectConversionSection conversion={detail.conversion} />
    </article>
  );
}
