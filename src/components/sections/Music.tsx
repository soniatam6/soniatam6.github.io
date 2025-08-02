const linkCls =
    "underline decoration-dotted underline-offset-[3px] [text-decoration-thickness:1px] \
text-muted-foreground decoration-stone-400 \
hover:text-foreground hover:decoration-stone-600 \
dark:decoration-stone-500 hover:dark:decoration-stone-300 \
transition-colors duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-400/40 rounded-sm";




export const Music = () => {
    return (
        <div className="max-w-2xl">
            <h2 className="text-2xl font-serif font-medium mb-8 text-foreground">
                Music
            </h2>

            <section
                id="music"
                className="gap-x-8 gap-y-2 mb-12"
            >
                <p className="mb-3">
                    Some pieces that I've enjoyed playing on the pipe organ.
                </p>
                <div className="my-6">
                    <h3 className="mb-2 font-bold">Toccata in D minor, BWV 565 - Bach</h3>

                    <audio
                        controls
                        controlsList="nodownload"
                        className="w-full max-w-lg"
                    >
                        <source src="/music/Toccata%20Final%20Recording.m4a" type="audio/mp4" />
                    </audio>
                </div>
                <div className="my-6">
                    <h3 className="mb-2 font-bold">Adagio in G minor - Albinoni</h3>

                    <audio
                        controls
                        controlsList="nodownload"
                        className="w-full max-w-lg"
                    >
                        <source src="/music/Adagio%20in%20G%20minor.m4a" type="audio/mp4" />
                    </audio>
                </div>
                <div className="my-6">
                    <h3 className="mb-2 font-bold">Feng Xiu Zhu</h3>

                    <audio
                        controls
                        controlsList="nodownload"
                        className="w-full max-w-lg"
                    >
                        <source src="/music/Feng%20Xiu%20Zhu.m4a" type="audio/mp4" />
                    </audio>
                </div>
                <section
                    id="videos"
                    className="grid gap-6 mb-12 sm:grid-cols-2"
                >
                    {/* Video 5 */}
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/Atadkdn6sD8?si=qGUulX4LhWfnbxYl"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                    {/* Video 1 */}
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/1EKlxvJCO4w?si=vnkWHQpCohU5HQqG"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>

                    {/* Video 2 */}
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/XEdVz9Xk63U?si=A_fSI-ySfq6ODh0j"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                    {/* Video 3 */}
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/5h-482qXsWA?si=n922cZ-ZZtz2e7K-"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                    {/* Video 4 */}
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/0QOxYg8V1Oo?si=SJb-xZ_cDtMmC-_P"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>

                </section>

            </section>
        </div>
    );
};