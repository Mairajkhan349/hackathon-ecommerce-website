import Image from "next/image";
export default function Hero() {
  return (
    <>
      {/* first we will put the main image for the hero section */}
      <div>
        <Image
          src="/images/carousel-inner.png"
          alt="Description of the image"
          width={1439}
          height={716}
        />
      </div>
      {/* now we are structuring and designing the editor's pick */}
      <div className="w-[1440px] h-[770px] bg-white h-screen ">
        <div className="grid place-items-center gap-[48px] w-[1050px] h-[770px] ml-[195px] pt-[80px] pb-[80px]">
          <div className="grid place-items-center gap-[10px] w-[607px] h-[62px] ">
            <h3 className="w-[181px] h-[32px] text-[24px] font-bold text-headerBlue">
              EDITOR'S PICK
            </h3>
            <p className="font-normal w-auto h-[20px] text-[14px] text-headergrey">
              Problems trying to resolve the conflict between
            </p>
          </div>
          <div>
            <Image
              src="/images/row.png"
              alt="Description of the image"
              width={1050}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
