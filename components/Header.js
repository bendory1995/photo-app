import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* LEFT */}
        <div
          onClick={() => router.push("/")}
          className=" mt-2 relative hidden lg:inline-grid w-24 cursor-pointer"
        >
          <Image src="/photoapp.png" layout="fill" objectFit="contain" />
        </div>
        <div
          onClick={() => router.push("/")}
          className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer"
        >
          <Image
            src="https://www.seekpng.com/png/full/131-1310384_png-file-diary-icon-png.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />

          {session ? (
            <>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="profile pic"
                className=" mt-2 mb-2 h-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
