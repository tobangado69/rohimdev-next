interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <h2 className="lg:text-5xl text-4xl font-medium text-neutral-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base text-neutral-500">{subtitle}</p>
      )}
    </div>
  );
}
