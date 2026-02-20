"use client";

import { useState, useEffect } from "react";

interface TocItem {
  id: string;
  title: string;
  number?: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="hidden lg:block sticky top-24 self-start">
      <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wider">
        On this page
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm transition-colors ${
                activeId === item.id
                  ? "text-neutral-900 font-medium"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              {item.number && (
                <span className="text-neutral-400 mr-2">{item.number}</span>
              )}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
