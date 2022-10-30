export type FlagType = "serbia" | "croatia" | "bosnia" | "montenegro" | "macedonia" | "slovenia";

export function Flag({ country }: { country: FlagType }) {
  switch (country) {
    case "serbia":
      return <span>🇷🇸</span>;
    case "croatia":
      return <span>🇭🇷</span>;
    case "bosnia":
      return <span>🇧🇦</span>;
    case "montenegro":
      return <span>🇲🇪</span>;
    case "macedonia":
      return <span>🇲🇰</span>;
    case "slovenia":
      return <span>🇸🇮</span>;
  }
}
