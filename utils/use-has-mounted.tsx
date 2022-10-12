import { useEffect, useState } from "react";

export const useHasMounted = (): { hasMounted: boolean } => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return { hasMounted };
};
