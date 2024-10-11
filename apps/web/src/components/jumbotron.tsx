import Image from "next/image";
import jumboImg from "@/assets/jumboimg.jpg";
import { Homepage } from "@pkrbt/openapi";
import { addPrefix } from "@/utils/prefix";

type Props = {
  homepage: Required<Homepage>;
};

export default function Home({ homepage }: Props) {
  return (
    <div className="flex space-x-5 flex-col md:flex-row">
      <div className="flex-[1]">
        <Image
          placeholder="blur"
          priority
          className="rounded w-full md:w-auto"
          width={500}
          height={300}
          alt="side"
          src={addPrefix(homepage.images[0].url ?? jumboImg.src)}
          blurDataURL={String(jumboImg)}
        />
      </div>
      <div className="py-4 flex-[1]">
        <h2 className="uppercase font-semibold mb-4 tracking-widest text-xs">
          {homepage.subtitle}
        </h2>
        <h2 className="scroll-m-20 text-xl text-primary-500 font-extrabold tracking-tight lg:text-3xl mb-4">
          {homepage.title}
        </h2>
        <div className="markdown">{homepage.content}</div>
      </div>
    </div>
  );
}
