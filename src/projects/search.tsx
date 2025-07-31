// src/projects/Rankings.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const linkCls =
    "underline decoration-dotted underline-offset-[3px] [text-decoration-thickness:1px] " +
    "text-muted-foreground decoration-stone-400 " +
    "hover:text-primary hover:decoration-stone-600 transition-colors";

export default function Search() {
    return (
        <div className="mx-auto max-w-3xl">
            {/* main content */}
            <main className="mx-auto px-4">
                <article className="mx-auto px-4">
                    {/* back link */}
                    <Link to="/past-work" className={linkCls}>
                        ← Back to projects
                    </Link>

                    {/* title + meta */}
                    <h1 className="mt-6 text-4xl font-medium text-foreground">
                        Reimagining the AI search experience
                    </h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        July 2025 · Personal Project
                    </p>

                    <figure
                        className="breakout mt-8 overflow-hidden rounded-lg">
                        <iframe
                            src="https://bamboo-learn-07170954.figma.site"
                            className="w-full"
                            height="700"
                            loading="lazy"
                        />
                    </figure>

                    {/* placeholder sections */}
                    <section className="mt-10 space-y-6 text-muted-foreground">
                        <div className="space-y-2">
                            <h2 className="text-3xl text-foreground">Overview</h2>
                            <p>
                                Coinbase International Exchange serves institutional market makers who are rewarded based on their trading volume, where their rewards are dependent
                                on their rankings relative to other market makers. The rankings dashboard is a self-serve tool that allows market makers to view their current rankings,
                                track their performance, and compare themselves against competitors, all of which helps them optimize their trading strategies.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-3xl text-foreground">Motivation</h2>
                            <p>
                                Over the past 2 years, I've reflected a lot on how <a href="https://soniatam.substack.com/p/our-relationship-with-information" className={linkCls}>
                                    our relationship with information
                                </a> has evolved. It used to be the
                                case that information took a lot of time and effort to acquire. But now with AI chat interfaces, we can easily get summaries in seconds without
                                having to sit with the information ourselves. I've observed this has led to a lot of people not thinking critically about AI summaries, and instead just accepting them as truth.
                                I see a certain risk in this, as we are losing our ability to think critically and independently process information, hence I wanted to explore how we can change that by <strong> reimagining
                                    the AI powered search results page</strong>.
                            </p>
                            <p>
                                Instead of trying to focus on Google's AI powered search summary, I wanted to focus on <a href="https://www.glean.com/" className={linkCls}>Glean Search</a>. Glean Search is an
                                enterprise search engine that helps employees find information across their company's data, and it has an AI powered assistant that sits on top of this search engine to help summarize and synthesize answers.
                                I chose Glean because:
                            </p>
                            <ul className="list-decimal pl-6 space-y-2 text-muted-foreground">
                                <li>the scope is relatively more manageable to work with since there is a contained amount of information about a company, unlike Google with so much data, so many users and use cases.
                                </li>
                                <li>the problem of humans not thinking critically about AI summaries is substantially more important with the employee / workplace data use case – inside a company, every employee makes
                                    decisions that carry real consequences, whether in legal, financial, strategic, or product decisions. If an employee misinterprets an AI summary, the potential consequences are
                                    real for the company.
                                </li>
                            </ul>
                            {/* ▸ Call‑out with question‑mark icon */}
                            <div className="my-8 flex gap-3 rounded-md border-l-4 border-primary/60 bg-primary/5 p-4">
                                {/* question‑mark icon */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 15.2a1.2 1.2 0 111.2-1.2 1.2 1.2 0 01-1.2 1.2zm1.46-5.38l-.73.67a2 2 0 00-.73 1.51v.2H10.9v-.27a3.37 3.37 0 011.08-2.47l.85-.78a1.7 1.7 0 00.57-1.28 1.77 1.77 0 00-3.54 0H8.4a3.42 3.42 0 016.84 0 3.09 3.09 0 01-1.78 2.61z"
                                    />
                                </svg>

                                {/* call‑out text */}
                                <p className="text-sm leading-6 text-foreground">
                                    <strong className="font-medium">How might we </strong>
                                    redesign Glean's AI powered search results page so employees can still enjoy easily accessible answers yet remain
                                    motivated to verify sources and make informed business decisions?
                                </p>
                            </div>

                        </div>
                        <div className="mt-10 pb-4 space-y-2 text-muted-foreground">
                            <figure className="overflow-hidden rounded-lg border">
                                {/* TODO: replace io-diagram.jpg with your actual image */}
                                <img
                                    src="/images/projects/search/glean.svg"
                                    alt="Glean's existing search results page"
                                    className="w-full object-cover"
                                />
                            </figure>
                            <figcaption className="mt-2 mx-auto text-center text-sm text-muted-foreground">
                                Glean's existing AI powered search results page
                            </figcaption>
                        </div>
                        <section className="mt-16 space-y-12">
                            {/* hero diagram (full‑width inside article) */}
                            {/* caption / next section */}
                            <div className="space-y-6">
                                {/* big question headline */}
                                <h2 className="text-3xl text-foreground">
                                    JTBD of Glean's AI Search Results Page
                                </h2>

                                {/* explanatory paragraph */}
                                <p className="text-muted-foreground">
                                    {/* TODO: adjust copy */}
                                    First, I wanted to understand the job-to-be-done of a search results page, regardless of whether it uses AI or not.
                                    What does a search results page do? What are the inputs and outputs? I came up with a simple flow:
                                </p>
                                <figure className="overflow-hidden max-w-lg mx-auto">
                                    <img
                                        src="/images/projects/search/jtbd.svg"
                                        alt="Glean's existing search results page"
                                        className="w-full object-cover"
                                    />
                                </figure>
                                <p>But there are different types of input and output data. For example, when a user asks a question to the search engine, they may
                                    look more for a singular answer or a summary of information, whereas when they are looking for a document, they may be
                                    looking for a list of documents that match their query. Since Glean Search has Glean Assistant sitting on top of it, I mapped out the different possible types of inputs and outputs:
                                </p>
                                <figure className="overflow-hidden">
                                    <img
                                        src="/images/projects/search/io.svg"
                                        alt="Glean's existing search results page"
                                        className="w-full object-cover"
                                    />
                                </figure>
                            </div>

                        </section>
                    </section>
                    <div className="mt-10 space-y-2">
                        <h2 className="text-3xl text-foreground">(Mini) User Research</h2>
                        <p className="text-muted-foreground">
                            To understand when users would prefer AI-powered search answers vs traditional list search results, I ran a mini user research experiment at Penn.
                            Since I didn't have access to Glean users, I showed 8 of my friends two static UIs side-by-side: an AI summarized search results page and a
                            classic ranked list results page. I asked each of them 4 different prompts – two were direct questions ("What is Lovable AI?" and
                            "what are the prerequisites for CIS 2620?") and two exploratory keyword queries ("random name generator" and "cute cats"). For each of the prompts,
                            I asked which UI they would prefer to see their answer in.
                        </p>
                        <figure className="overflow-hidden max-w-md mx-auto">
                            <img
                                src="/images/projects/search/experiment.png"
                                alt="Glean's existing search results page"
                                className="w-full object-cover"
                            />
                        </figure>
                        <p className="text-muted-foreground">The results were consistent – 7 out of 8 of my friends picked the AI overview UI for the question prompts, saying they just wanted to "see a direct answer".
                            All 8 said they would prefer the list view for keyword prompts, saying they wanted to browse different options and that the AI summary would be useless
                            in that scenario. My main takeaway was that AI summaries in search results are useful mainly for question queries, where users expect an answer.
                        </p>
                        <p className="text-muted-foreground">My assumption here is that Glean has some sort of algorithm or engine to decide when a user should see an AI generated summary vs a traditional
                            list format on their search results page. Given I wanted to focus on reimagining the AI powered search results, I therefore decided to focus only on question type queries, where a
                            user is trying to seek a direct answer.
                        </p>
                    </div>
                    <div className="mt-10 space-y-2">
                        <h2 className="text-3xl text-foreground">Synthesis, Scoping & Ideation</h2>
                        <p className="text-muted-foreground">
                            Knowing all of this, let’s focus on one specific user story:
                            an employee who asks a question to Glean Search, and who has stakes in what the AI gives as an answer.
                        </p>
                        <ol className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>As a Product Manager, I want to ask Glean “What’s the latest on Infra Project V5?” because I need to update stakeholders in tomorrow’s committee meeting, and I don’t have time to sift through dozens of documents and Slack threads.
                            </li>
                            <li>Perhaps I am not the main PM or I am substituting temporarily for
                                someone else, but either way the stakeholders will take me responsible
                                for what I say. I know the CTO may challenge a detail (“did security really sign off?”)
                                or Legal may demand the exact wording of the compliance memo. If I just rely on the AI generated summary and I can’t point to the precise sentence to back me up, my credibility will be negatively affected.
                            </li>
                        </ol>
                        <p className="text-muted-foreground">From this user story, we can deduce that the AI search must deliver the following qualities:
                        </p>
                        <ol className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li><strong>Traceability / credibility </strong>– the AI search should be able to answer “does the doc actually say what the summary implies?”
                                or “what if there are differences between what the summary says and what is said in context of the document?”
                            </li>
                            <li><strong>Confidence</strong> – As a user, I need confidence that the AI summary is accurate. If it’s not accurate, I need the confidence that the AI will show me it’s
                                not hallucinating and that I should do something (eg follow up with authors or look deeper into the source documents)
                            </li>
                            <li><strong>Follow up</strong> – if I have more questions as a PM, who can I ask? How can I contact them? Who was the last person who edited this? How long ago was it edited? </li>
                            <li><strong>Suggestions on relevancy</strong> – is there anything else that I might need to know about the project, for example tangential projects that might impact the progress of this one? </li>
                        </ol>
                        <p className="text-muted-foreground"> Based on these qualities, we can turn these into tangible deisgn changes:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                            <li><strong>Direct quotations</strong> that lead to a doc preview of the highlighted quote in the document
                                The preview could show Author, Last edited, and highlights exactly where the quote comes from so that 
                                users can see what context the quote is in and decide for themselves whether that is a valid thing to believe or bench on
                            </li>
                            <li><strong>Author chips</strong> – adding an easy way for the user to reach out to the relevant contributors to the project so that they can easily ask follow up questions </li>
                            <li><strong>Confidence banner</strong> – if sources conflict (say one Slack thread says this about the latest, but the Infra project document says another) then AI should flag that and tell the user to clarify </li>
                        </ol>
                    </div>
                </article>
            </main>

        </div >
    );
}
