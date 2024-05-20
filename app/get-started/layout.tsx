import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get started with equity plus FX Trader",
  description: "Start your easy trading Today",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
