import { backWild } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "../ui/dialog";
import { Candidate } from "@/types/model-types";

type Props = {
  isShowing: boolean;
  onClose: () => void;
  candidate: Candidate;
};

const ResultModal: React.FC<Props> = ({ isShowing, onClose, candidate }) => {
  const socialLinks = Object.entries(candidate.socialLinks || {})
    .filter(([_, value]) => value)
    .map(([key, value]) => ({
      icon: key,
      url: value,
    }));

  return (
    <Dialog open={isShowing} onOpenChange={onClose}>
      <DialogContent className="flex w-[360px] flex-col items-center justify-center rounded-xl bg-[linear-gradient(_178.89deg,_#EDFFD6_1.31%,_#CAFFE0_93.51%)] text-center overflow-y-scroll py-0 px-3 gap-0 max-h-[calc(100vh-32px)] scrollbar-none">
        <img
          src="/images/cloud.png"
          alt="cloud"
          width={225}
          height={123}
          className="absolute top-3 left-0 -translate-x-1/2"
        />

        <p
          className={cn(
            backWild.className,
            "text-[40px] text-[#121212] mt-11 mb-7"
          )}
        >
          Winner
        </p>

        <div className="flex flex-col items-center justify-center gap-3 bg-[#CBFF70] rounded-3xl py-5 w-full relative">
          <img
            src="/images/like.png"
            alt="like"
            width={44}
            height={44}
            className="absolute -top-8 left-6 z-10 rotate-[15deg]"
          />
          <img
            src="/images/heart.png"
            alt="heart"
            width={112}
            height={96}
            className="absolute -top-[70px] -right-3 z-10 -rotate-[15deg]"
          />
          <img
            src="/images/coin.png"
            alt="coin"
            width={63}
            height={71}
            className="absolute -bottom-10 -left-4 scale-x-[-1] rotate-[15deg]"
          />
          <img
            src="/images/coin.png"
            alt="coin"
            width={93}
            height={104}
            className="absolute bottom-[30px] right-0 translate-y-full translate-x-[50%] rotate-[10deg]"
          />
          <img
            src={candidate.profilePhotoUrl}
            alt="avatar"
            width={200}
            height={200}
            className="rounded-full w-[120px] h-[120px] object-cover"
          />

          <div className="text-[#121212] bg-[linear-gradient(_360deg,_#DFFF88_-44.71%,_#5BC700_100%)] w-[calc(100%-72px)]  rounded-[38px] py-2 flex flex-col items-center justify-center border-2 border-[#5ACC2D]">
            <p className="text-2xl font-medium ">{candidate.name}</p>
            <div className="flex flex-col text-base items-center gap-0.5">
              {socialLinks.map(({ icon, url }, index) => (
                <div
                  key={index + "-" + url}
                  className="flex items-center gap-0.5"
                >
                  <img
                    src={`/icons/twitter-fill-black.svg`}
                    alt="twitter-fill-black"
                    width={18}
                    height={18}
                  />
                  <span>@{url}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#F8FFF8] rounded-[18px] px-2 py-3 mx-3 flex flex-col items-center">
            <div className="flex items-center gap-2 text-base text-[#707070] font-medium">
              <img
                src="/images/fox-head-2.png"
                alt="head"
                width={33}
                height={29}
              />
              The winner must :
              <img
                src="/images/fox-head-1.png"
                alt="head"
                width={28}
                height={28}
              />
            </div>
            <p className={cn(backWild.className, "text-[38px] text-[#121212]")}>
              Winner Winner Chicken Dinner
            </p>
          </div>
        </div>

        <img src="/images/ferris-fox.png" alt="head" width={161} height={161} />
      </DialogContent>
    </Dialog>
  );
};

export default ResultModal;
