import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "../contexts/ThemeContext";
import ErrorBoundary from "../components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Selimaj.dev",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased dark">
        <ErrorBoundary>
          <ThemeProvider defaultTheme="dark">
            <TooltipProvider>
              <Toaster />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
