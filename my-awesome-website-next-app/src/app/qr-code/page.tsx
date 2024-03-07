import { Header } from "@/components/header";
import Image from "next/image";

export default function QRCode() {
  return (
    <main className="bg-slate-200 h-screen flex flex-col justify-center">
        <Header />
      <div className="flex justify-center">
        <div className="font-outfit bg-white flex flex-col items-center rounded-xl p-2 drop-shadow-xl">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-xl m-2"
            src="/image-qr-code.svg"
            alt="QR code"
            width={290}
            height={37}
            priority
          />
          <h1 className="font-bold flex flex-col items-center m-4 text-2xl">
            <span>Improve your front-end</span>
            <span>skills by building projects</span>
          </h1>
          <p className="font-normal text-sm text-slate-400 flex flex-col items-center mb-6">
            <span>Scan the QR code to visit Frontend</span>
            <span>Mentor and take your coding skills to</span>
            <span>the next level</span>
          </p>
        </div>
      </div>
    </main>
  );
}
