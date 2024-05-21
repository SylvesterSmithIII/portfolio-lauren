import Image from "next/image"
import Link from "next/link"

export default function Page() {
    return (
        <>
            <div className="h-screen relative">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                >
                    <source src="/vid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <h1 className="relative flex justify-center items-start pt-4 cursor-pointer z-30">
                    <Link href={"/"}><Image src="/logo.png" alt="logo pic" width={500} height={500} /></Link>
                    <div className="absolute right-0 top-4">
                    <div className="flex mt-12 mr-8 justify-end text-white gap-4 text-sm">
                        <Link href="/shop">SHOP</Link>
                        <Link href="/contact">GET IN TOUCH</Link>
                        <Link href="/about">ABOUT ME</Link>
                    </div>
                </div>
                </h1>

                

                <div className="relative z-10 py-4 mx-52">
                    <p className="text-white">
                        My art is a vibrant exploration of self-expression, capturing the complexities of my emotions and experiences. My art aims to shine a light inside the mind of a girl, revealing inner thoughts and emotions. I aspire to make the world a more empathetic and creative place through my work, fostering understanding and connection.
                    </p>
                </div>

                <div className="flex">
                    <div className="w-3/5 flex flex-col relative text-white text-xs gap-2 pl-6 pr-2">
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <h1 className="font-bold">EARLY LIFE</h1>
                                <p>Growing up between two completely opposite households as a child of divorce shaped my creative journey from an early age. This duality fueled my imagination, teaching me to embrace contrasts and take risks. Born in Seattle, WA, I moved to Los Angeles right after high school, spending a transformative year there before relocating to Connecticut for another year. Now, I call New York home. Throughout these transitions, art has been my constant companion and therapy, offering solace and a means of expression. I&apos;ve always wished for art to hold a more significant place in society, recognizing its profound impact on personal and communal well-being.</p>
                            </div>
                            <div className="flex-1">
                                <h1>&nbsp;</h1>
                                <p>By making art more integral to our daily lives, we can begin to heal some of the damage caused by our misplaced priorities. I want my work to be a catalyst for change, encouraging others to embrace their own creativity and recognize the importance of nurturing our shared humanity. Through exhibitions, collaborations, and community projects, I aim to create spaces where art is celebrated and its transformative power is acknowledged. My ultimate goal is to see art regain its rightful place as a cornerstone of a healthy, vibrant society.</p>
                            </div>

                        </div>
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <h1 className="font-bold">MY GOALD THROUGH ART</h1>
                                <p>Through my art, I aspire to connect deeply with others and elevate the importance of creativity in our lives. I believe art has the power to communicate complex emotions and ideas, transcending words and bridging gaps between people. In today&apos;s society, we have lost sight of many of the values that truly matter. Our relentless pursuit of material success and superficial achievements has overshadowed the significance of empathy, beauty, and genuine human connection. My goal is to use my art to to challenge this paradigm and inspire a shift in perspective. I hope to remind people of the profound impact that creativity and expression can have on our mental and emotional well-being.</p>
                            </div>
                            <div className="flex-1">
                                <h1 className="font-bold">MY ARTISTIC INSPIRATION</h1>
                                <p>My inspiration, Banksy, embodies the power of art to enact change without seeking personal recognition. His work challenges societal norms and provokes thought, demonstrating that art can be a powerful tool for social commentary and transformation. Like Banksy, I strive to create art that speaks to important issues and inspires change, all while letting the message take center stage over the messenger.</p>
                            </div>
                        </div>

                    </div>
                    <div className="w-2/5 relative">
                        <Image src={"/lauren.png"} alt="selfie" width={450} height={500} className="object-contain"></Image>
                    </div>
                </div>
            </div>
        </>
    )
}