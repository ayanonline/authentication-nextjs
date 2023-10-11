"use client";
import UserAuthService from "@/services/UserAuthService";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [user, setUser] = useState();

  // const router = useRouter();

  useEffect(() => {
    setUser(UserAuthService.getUser());
  }, []);

  // const handleLogout = () => {
  //   UserAuthService.logout();
  //   router.push("/login"); // Redirect to the login page after logout
  // };

  return (
    <header className="bg-black text-white p-4">
      <nav className="flex gap-4 justify-center text-xl">
        <Link href="/" className={pathname === "/" ? "underline" : ""}>
          Home
        </Link>
        {user ? (
          <Link
            href="/account"
            className={pathname === "/account" ? "underline" : ""}
          >
            Account
          </Link>
        ) : (
          <Link
            href="/login"
            className={pathname === "/login" ? "underline" : ""}
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
