import localFont from "next/font/local";
import { Cover } from "../ui/cover";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { cn } from "@/lib/utils";

const refile = localFont({
  src: "/font/Refile.woff2",
});

const About = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="flex items-center justify-center gap-5  border-b border-emerald-600">
          <TextGenerateEffect
            words="Our"
            wordsClassName={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
              refile.className
            )}
          />
          <TextGenerateEffect
            words="Services"
            className="  "
            wordsClassName={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-emerald-600 to-[#9f9e15] !text-transparent bg-clip-text",
              refile.className
            )}
          />
        </div>
      </div>

      <div>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 bg-clip-text text-transparent bg-gradient-to-bl from-amber-200 to-fuchsia-300 ">
          We Create Designs That are <br />{" "}
          <Cover className={refile.className}>Creative</Cover> and{" "}
          <Cover className={refile.className}>Awsome</Cover>
        </h1>
      </div>

      <p className="py-5 text-pretty max-w-[35rem] mx-auto flex items-center text-center">
        We Are Editease , a creative team for professionals graphic designers
        passionate about Crafting Really Good Designs.
      </p>

      <div className="flex items-center justify-center flex-col py-10 text-3xl">
        <li>sdsd</li>
        <li>sdsd</li>
        <li>sdsd</li>
      </div>
    </div>
  );
};

export default About;
