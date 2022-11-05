import Link from "next/link";
import { ReactNode, MouseEvent } from "react";

type ConditionalProps =
  | {
      as?: "a";
      href?: string;
      onClick?: never;
      internal?: boolean;
    }
  | {
      as: "button";
      href?: never;
      onClick: (event: MouseEvent<HTMLButtonElement>) => void;
      internal?: never;
    };

export type ActionLinkProps = {
  children: ReactNode;
} & ConditionalProps;

function ActionLinkItem({
  href,
  children,
  internal,
}: Pick<ActionLinkProps, "href" | "children" | "internal">) {
  return (
    <a
      href={href}
      className="px-6 py-3 text-lg border rounded-full md:text-base text-purple border-purple hover:bg-purple/5 hover:transition-all"
      {...(internal
        ? {}
        : {
            target: "_blank",
            rel: "noreferrer",
          })}
    >
      {children}
    </a>
  );
}

export function ActionLink({ as = "a", href, children, onClick, internal }: ActionLinkProps) {
  if (as === "button") {
    return (
      <button
        onClick={onClick}
        className="px-6 py-3 text-lg border rounded-full md:text-base text-purple border-purple hover:bg-purple/5 hover:transition-all cursor-pointer"
      >
        {children}
      </button>
    );
  }

  if (internal) {
    return (
      <Link href={href as string}>
        <ActionLinkItem href={href} internal>
          {children}
        </ActionLinkItem>
      </Link>
    );
  }

  return <ActionLinkItem href={href}>{children}</ActionLinkItem>;
}
