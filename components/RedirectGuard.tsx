"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ScrollAndRedirectGuard() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Always move to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Redirect if not on home
    if (pathname !== "/") {
      router.replace("/");
    }
  }, [pathname, router]);

  return null;
}
