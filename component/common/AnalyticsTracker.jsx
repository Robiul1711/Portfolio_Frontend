"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef(null);

  useEffect(() => {
    if (pathname === lastTrackedPath.current) return;
    lastTrackedPath.current = pathname;

    const trackPing = async () => {
      try {
        const isNewVisitor = !sessionStorage.getItem("has_visited");
        if (isNewVisitor) {
          sessionStorage.setItem("has_visited", "true");
        }

        const isMobile =
          typeof window !== "undefined"
            ? /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
                navigator.userAgent
              )
            : false;

        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        await fetch(`${apiUrl}/api/analytics/track`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            path: pathname,
            isNewVisitor,
            isMobile,
          }),
        });
      } catch (e) {
        // Silently skip tracking on network error
      }
    };

    trackPing();
  }, [pathname]);

  return null;
}
