import Image from "next/image";
import { IconImageProps } from "./IconImage.types";

const IconImage = ({ src, alt, width = 48, height = 48 }: IconImageProps) => {
  return (
    <div className="border border-amber-50 bg-emerald-50 rounded p-2">
      <Image src={src} alt={`${alt} logo`} width={width} height={height} />
    </div>
  );
};

export default IconImage;
