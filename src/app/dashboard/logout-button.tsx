"use client";

import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button
      className="cursor-pointer rounded-lg bg-[#17201d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#24322d]"
      onClick={() => signOut({ callbackUrl: "/" })}
      type="button"
    >
      Log out
    </button>
  );
}
