import localFont from "next/font/local";

export const backWild = localFont({
  src: [
    {
      path: "../../public/fonts/BackWild/Back-Wild.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-back-wild",
});
