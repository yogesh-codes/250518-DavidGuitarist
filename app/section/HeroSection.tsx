import backgroundImage from "../assets/images/instructor-photo.jpg";

export default function HeroSection() {
    return (
        <div
            className="bg-amber-200 h-120 bg-cover bg-center w-full flex flex-col items-start justify-start pl-4 pt-4"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div></div>
            <h1 className="text-5xl text-white">
                Hi, I'm{" "}
                <span className="text-amber-700">
                    {" "}
                    <br /> David Strum
                </span>
            </h1>
        </div>
    );
}
