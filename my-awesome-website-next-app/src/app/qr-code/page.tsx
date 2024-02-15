import { Header } from "@/components/header";
import Image from "next/image";

export default function QRCode() {
  return (
    <>
      <main className="bg-sky-100 h-screen">
        <Header />

        <div className="flex justify-center m-10">
          <div className="font-outfit bg-white flex flex-col items-center rounded-xl">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-xl m-2"
              src="/image-qr-code.png"
              alt="QR code"
              width={180}
              height={37}
              priority
            />
            <h1 className="font-bold flex flex-col items-center">
              <span>Improve your front-end</span>
              <span>skills by building projects</span>
            </h1>
            <p className="font-normal text-sm text-slate-400 flex flex-col items-center">
              <span>Scan the QR code to visit Frontend</span>
              <span>Mentor and take your coding skills to</span>
              <span>the next level</span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
