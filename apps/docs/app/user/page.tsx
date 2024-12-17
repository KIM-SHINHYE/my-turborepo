"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div>
      Docs User <button onClick={() => router.push("/user/detail")}>detail</button>
    </div>
  );
}
