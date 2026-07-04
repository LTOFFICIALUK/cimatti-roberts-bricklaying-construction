"use client";

import { createContext, useContext, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import { useScrollVisibility } from "@/hooks/useScrollVisibility";

type MobileMenuContextValue = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
};

const MobileMenuContext = createContext<MobileMenuContextValue | null>(null);

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);

  if (!context) {
    throw new Error("useMobileMenu must be used within MobileShell");
  }

  return context;
};

export const MobileShell = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isChromeVisible = useScrollVisibility(isMenuOpen);

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <Header isChromeVisible={isChromeVisible} />
      <main className="min-h-screen pb-[calc(5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileContactBar isChromeVisible={isChromeVisible} isMenuOpen={isMenuOpen} />
    </MobileMenuContext.Provider>
  );
};
