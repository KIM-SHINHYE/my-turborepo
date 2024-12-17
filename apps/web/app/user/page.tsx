"use client";

import { useRouter } from "next/navigation";
import { createNavigateToDetail } from "@repo/router";

export default function UserPage() {
  const router = useRouter();
  const navigateToDetail = createNavigateToDetail(router);
  const userId = "1";
  return (
    <div>
      Web User <button onClick={() => navigateToDetail(userId)}>detail</button>
    </div>
  );
}
