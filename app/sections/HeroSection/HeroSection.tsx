// import backgroundImage from "~/assets/images/instructor-photo.jpg";
import { useLayoutEffect } from "react";
import backgroundImage from ".//assets/images/david2.png";

import Section from "~/components/Section/Section";
import PageInfo from "~/components/PageInfo/PageInfo";
import P from "~/components/P/P";

export default function HeroSection() {
    return (
        <div
            className="
            relative
            
            
            
            bg-fixed
            h-56 bg-position-[100%_20%] bg-[length:120%]
            xs:h-80 xs:bg-position-[100%_10%] xs:bg-[length:115%] 
            
            sm:h-100 sm:bg-position-[100%_5%]   sm:bg-[length:112%]
            
            md:h-110 md:bg-position-[100%_0%]   md:bg-[length:110%]
            
            lg:h-120 lg:bg-position-[100%_0%] lg:bg-[length:100%]
            
            2xl:h-130 2xl:bg-position-[100%_10%]
            my-transition overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* <div className="fixed backdrop-blur-[2px] bottom-0 h-20 w-full bg-linear-0 from-nlight/50 to to-red-300/0 opacity-80 z-100"></div> */}

            <div hidden={false} className="relative w-full bg-red-400/0 h-full">
                <h1 hidden={true}>
                    Turn Your Passion into Skill- One Lesson at a Time
                </h1>
                <div
                    className="
                absolute
                bg-red-300s/0 
                text-nlight text-left 
                
                -translate-y-1/2
                w-8/12  top-1/2 right-0    
                xs:w-/5 xs:text-2xl xs:top-1/2  
                 sm:top-1/2 sm:right-0/12  
                 md:bottom-1/3 
                 lg:top-1/2 lg:right-0/12
                my-transition "
                >
                    <p
                        className=" text-nlight font-medium bg-primary/70 rounded-tl-2xl pt-8 pl-2 mb-0 my-transition shadow-xl shadow-accent/50
                    text-xl
                        sm:text-3xl/snug
                    zdmd:text-4xl/snug
                    lg:text-5xl/snug
                    "
                    >
                        Turn Your Passion into <b>Skill</b>
                    </p>

                    <p
                        className=" text-nlight bg-primary/70 rounded-bl-2xl pl-3 pt-1 pb-10 my-transition
                    text-lg
                    sm:text-2xl/snug
                    zdmd:text-3xl/snug
                    lg:text-4xl/snug
                    "
                    >
                        One Lesson at a Time
                    </p>
                </div>
            </div>
        </div>
    );
}
