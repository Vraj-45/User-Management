import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "User Management",
  description: "Replica project with Next.js + TanStack Query + Redux",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
