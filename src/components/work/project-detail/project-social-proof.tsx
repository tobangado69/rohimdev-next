import type { ProjectSocialProof } from "@/types/content";
import { hasItems } from "./utils";

type ProjectSocialProofProps = {
  socialProof: ProjectSocialProof;
};

export function ProjectSocialProofSection({ socialProof }: ProjectSocialProofProps) {
  const hasBadges = hasItems(socialProof.badges);
  const hasLinks = hasItems(socialProof.links);
  const hasStats = hasItems(socialProof.repositoryStats);
  const hasLaunchNotes = Boolean(socialProof.launchNotes?.trim());

  if (!hasBadges && !hasLinks && !hasStats && !hasLaunchNotes) {
    return null;
  }

  return (
    <section className="space-y-6 animate-fade-up">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
        Social Proof
      </h2>
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm space-y-6">
        {hasBadges && (
          <div className="flex flex-wrap gap-2">
            {socialProof.badges!.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 bg-neutral-100 border border-neutral-200 rounded-full text-sm text-neutral-700"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        {hasLinks && (
          <div className="flex flex-wrap gap-4">
            {socialProof.links!.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-900 underline hover:text-neutral-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        {hasStats && (
          <ul className="space-y-2">
            {socialProof.repositoryStats!.map((stat) => (
              <li key={stat} className="text-neutral-600">
                {stat}
              </li>
            ))}
          </ul>
        )}
        {hasLaunchNotes && (
          <p className="text-neutral-600 leading-relaxed">{socialProof.launchNotes}</p>
        )}
      </div>
    </section>
  );
}
