import classNames from "classnames";
import { ReactNode, useState } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }: { children: ReactNode }) {
  const [disableScroll, setDisableScroll] = useState(false);

  return (
    <div
      className={classNames("relative flex flex-col w-full h-full bg-dark", {
        "overflow-hidden": disableScroll,
      })}
    >
      <Header setDisableScroll={setDisableScroll} />
      {children}
      <Footer />
    </div>
  );
}
