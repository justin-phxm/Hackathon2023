"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center font-display text-2xl"
          >
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>ToolShed</p>
          </Link>
          <input
            type="text"
            placeholder="Search"
            className="mx-4 flex h-14 shrink grow basis-0 items-center justify-start gap-2 rounded-lg bg-neutral-100 p-2"
          />
          <div className="mx-4 flex items-start justify-start gap-[52px]">
            <Link href="/" className="hover:underline text-base font-normal text-black">
              Home
            </Link>
            <Link
              href="/myBorrowed"
              className="hover:underline text-base font-normal text-black opacity-30"
            >
              Borrowed Items
            </Link>
            <Link
              href="/myLent"
              className="hover:underline text-base font-normal text-black opacity-30"
            >
              Lent Items
            </Link>
            <Link
              href="/myRequests"
              className="hover:underline text-base font-normal text-black opacity-30"
            >
              Requested Items
            </Link>
            <Link
              href="/addItem"
              className="hover:underline text-base font-normal text-black opacity-30"
            >
              Post Item
            </Link>
          </div>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
