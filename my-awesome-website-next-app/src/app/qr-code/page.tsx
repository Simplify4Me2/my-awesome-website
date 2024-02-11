import { Header } from "@/components/header";
import Image from "next/image";

export default function QRCode() {
  return (
    <>
      <main className="bg-sky-100 h-screen">
        <Header />

        <h1>QR Code Component</h1>
        <h2>I have been expecting you</h2>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/image-qr-code.png"
          alt="QR code"
          width={180}
          height={37}
          priority
        />
      </main>
    </>
  );
}
