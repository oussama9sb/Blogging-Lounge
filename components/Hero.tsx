import Image from "next/image";
import banner from "@/images/bannerImage.jpg";

export const Hero = () => {
  return (
    <div className="w-full max-h-screen relative">
      <Image
        src={banner}
        alt="banner image"
        className="w-full max-h-screen object-contain"
      />
      <div className="absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col justify-center items-center">
        <h2 className="text-7xl lg:text-[150px] font-bold">Darlene White</h2>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold">
          Travler, Photographer
        </p>
      </div>
    </div>
  );
};
