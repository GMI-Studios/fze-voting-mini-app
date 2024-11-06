import { backWild } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";

type Props = {
  isShowing: boolean;
  onClose: () => void;
  userName: string;
  userHandle: string;
  avatar: string;
};

const ResultModal: React.FC<Props> = ({
  isShowing,
  onClose,
  userName,
  userHandle,
  avatar,
}) => {
  return (
    isShowing && (
      <div className="fixed left-0 top-0 z-[999] flex h-full w-full items-center justify-center bg-black/60">
        <div
          className={cn(
            "relative mx-auto flex w-[360px] flex-col items-center justify-center rounded-xl bg-[linear-gradient(_178.89deg,_#EDFFD6_1.31%,_#CAFFE0_93.51%)] px-4 text-center overflow-hidden"
          )}
        >
          <Image
            src="/images/cloud.png"
            alt="cloud"
            width={225}
            height={123}
            className="absolute top-3 left-0 -translate-x-1/2"
          />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <X size={16} className="" />
          </button>

          <p
            className={cn(
              backWild.className,
              "text-[40px] text-[#121212] mt-11 mb-7"
            )}
          >
            Winner
          </p>

          <div className="flex flex-col items-center justify-center gap-3 bg-[#CBFF70] rounded-3xl py-5 w-full relative">
            <Image
              src="/images/like.png"
              alt="like"
              width={44}
              height={44}
              className="absolute -top-8 left-6 z-10 rotate-[15deg]"
            />
            <Image
              src="/images/heart.png"
              alt="heart"
              width={112}
              height={96}
              className="absolute -top-[70px] -right-3 z-10 -rotate-[15deg]"
            />
            <Image
              src="/images/coin.png"
              alt="coin"
              width={63}
              height={71}
              className="absolute -bottom-10 -left-4 scale-x-[-1] rotate-[15deg]"
            />
            <Image
              src="/images/coin.png"
              alt="coin"
              width={93}
              height={104}
              className="absolute bottom-[30px] right-0 translate-y-full translate-x-[50%] rotate-[10deg]"
            />

            <Image
              src={avatar}
              alt="avatar"
              width={200}
              height={200}
              className="rounded-full w-[120px] h-[120px] object-cover"
            />

            <div className="text-[#121212] bg-[linear-gradient(_360deg,_#DFFF88_-44.71%,_#5BC700_100%)] w-[calc(100%-72px)]  rounded-[38px] py-2 flex flex-col items-center justify-center border-2 border-[#5ACC2D]">
              <p className="text-2xl font-medium ">{userName}</p>
              <p className="text-base flex items-center gap-0.5">
                <Image
                  src="/icons/twitter-fill-black.svg"
                  alt="twitter-fill-black"
                  width={18}
                  height={18}
                />
                @{userHandle}{" "}
              </p>
            </div>
            <div className="bg-[#F8FFF8] rounded-[18px] px-2 py-3 mx-3 flex flex-col items-center">
              <div className="flex items-center gap-2 text-base text-[#707070] font-medium">
                <Image
                  src="/images/fox-head-2.png"
                  alt="head"
                  width={33}
                  height={29}
                />
                The winner must :
                <Image
                  src="/images/fox-head-1.png"
                  alt="head"
                  width={28}
                  height={28}
                />
              </div>
              <p
                className={cn(backWild.className, "text-[38px] text-[#121212]")}
              >
                Winner Winner Chicken Dinner
              </p>
            </div>
          </div>

          <Image
            src="/images/ferris-fox.png"
            alt="head"
            width={161}
            height={161}
          />
        </div>
      </div>
    )
  );
};

export default ResultModal;
