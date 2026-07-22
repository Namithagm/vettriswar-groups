"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

// Dark mode is the brand default. Light mode is offered as an option.
// next-themes injects a small blocking script into <head> (see layout.tsx)
// so the correct class is applied before first paint — no flash.
export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      themes={["dark", "light"]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
