// import backgroundImage from "~/assets/images/instructor-photo.jpg";
import { useLayoutEffect } from "react";
import backgroundImage from "~/assets/images/david2.png";

import Section from "~/components/Section/Section";
import PageInfo from "~/components/PageInfo/PageInfo";

export default function HeroSection() {
    return (
        <div
            className="
            h-56 sm:h-64 md:h-80 lg:h-140 
            transform bg-cover 
            bg-right 
            lg:bg-position-[right_0px_top_-4em] 
            my-transition"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className=" relative w-full bg-red-400/0 h-full">
                <h1
                    className="
                absolute transform origin-center 
                text-nlight text-right 
                text-3xl/normal bottom-1/3 right-5/12  
                sm:text-5xl/snug sm:bottom-3/10 sm:right-5/12  
                md:text-6xl/snug md:bottom-1/3 
                lg:text-7xl/snug lg:bottom-1/4 lg:right-5/12
                my-transition "
                >
                    <span className=" bg-ndark/40  rounded-2xl px-4">
                        Hi! I'm
                    </span>
                    <br />
                    <span className="text-primary bg-nlight/80 backdrop-blur-lg rounded-2xl px-4">
                        David Strum
                    </span>
                </h1>
                <p
                    hidden={true}
                    className="absolute bottom-0 text-2xl w-full text-center text-nlight bg-nbehind"
                >
                    and I teach live guitar lessons!
                </p>
            </div>
        </div>
    );
}
