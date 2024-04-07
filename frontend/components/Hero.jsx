import Link from "next/link";
import { Download, Send } from "lucide-react";
// import Typed from "react-typed";

import { RiArrowDownSLine } from "react-icons/ri";
import dynamic from "next/dynamic";

import DevImg from "./DevImg";
import Socials from "./Socials";
import { Button } from "./ui/button";

// const ReactTyped = dynamic(
//     () => import("react-typed").then((mod) => ({ default: mod.ReactTyped })),
//     { ssr: false }
// );

const Hero = () => {
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none">
            <div className="container mx-auto">
                <div className="flex gap-x-8 justify-between">
                    {/* text */}
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                            Sr. Full-Stack Engineer
                        </div>
                        <h1 className="mb-4 h1">
                            Hello, my name is Kristopher
                            {/* <Typed
                                strings={["Kristopher Sato"]}
                                typeSpeed={100}
                                loop
                                backSpeed={20}
                                cursorChar="|"
                                showCursor={true}
                            /> */}
                        </h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                            Sr. Full-Stack Engineer at Graemouse Technologies |
                            Frontend Engineer at BrandRep | Full-Stack Engineer
                            at AccelOne | Junior Fontend Engineer at Prime
                            consulting
                        </p>
                        {/* buttons */}
                        <div className="flex flex-col gap-x-3 gap-y-3 mx-auto mb-12 md:flex-row xl:mx-0">
                            <Link href="/contact">
                                <Button className="gap-x-2">
                                    Contact Me <Send size={18} />
                                </Button>
                            </Link>
                            <Button variant="secondary" className="gap-x-2">
                                Download CV <Download size={18} />
                            </Button>
                        </div>
                        {/* Socials */}
                        <Socials
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
                        />
                    </div>
                    {/* image */}
                    <div className="hidden relative xl:flex">
                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                        <DevImg
                            containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                            imgSrc="/hero/me.png"
                        />
                    </div>
                </div>
                <div className="hidden absolute bottom-44 left-2/4 animate-bounce md:flex xl:bottom-12">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
