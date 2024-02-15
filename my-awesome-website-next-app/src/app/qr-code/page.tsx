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
            <h1 className="font-bold">Improve your front-end</h1>
            <h1 className="font-bold">skills by building projects</h1>
            <h2 className="font-normal text-sm">Scan the QR code to visit Frontend</h2>
            <h2 className="font-normal text-sm">Mentor and take your coding skills to</h2>
            <h2 className="font-normal text-sm">the next level</h2>
          </div>
        </div>
      </main>
    </>
  );
}
