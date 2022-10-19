import { useRouter } from "next/router";
import { useEffect } from "react";
import { routes } from "../utils/routes";

export default function QR() {
  const router = useRouter();

  useEffect(() => {
    router.replace(routes.blogArticle("dear-family-dear-friends"));
  }, [router]);

  return <div className="h-full bg-dark" />;
}
