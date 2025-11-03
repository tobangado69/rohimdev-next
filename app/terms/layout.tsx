import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using the Rohim Dev website and services. Read our terms of service to understand the legal agreements between you and Abdul Rohim.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "legal",
    "rohim dev",
    "abdul rohim",
    "web developer terms",
    "developer services terms",
  ],
  openGraph: {
    title: "Terms of Service | Rohim Dev",
    description:
      "Terms and conditions for using the Rohim Dev website and services.",
    url: "https://rohimdev.com/terms",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Rohim Dev",
    description:
      "Terms and conditions for using the Rohim Dev website and services.",
  },
  alternates: {
    canonical: "https://rohimdev.com/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

