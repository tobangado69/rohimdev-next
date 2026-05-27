import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/work/project-detail/project-detail-page";
import { getProjectBySlug, getProjects } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const seo = project.seo;
  return {
    title: seo.title || project.title,
    description: seo.description || project.summary,
    keywords: seo.keywords,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: seo.title || project.title,
      description: seo.description || project.summary,
      images: [{ url: seo.ogImage || project.image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title || project.title,
      description: seo.description || project.summary,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
