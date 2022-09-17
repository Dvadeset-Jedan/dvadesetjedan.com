import { ReactNode, useRef } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
