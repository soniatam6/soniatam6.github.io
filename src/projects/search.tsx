// src/projects/Search.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/image-carousel";

/* ---------------- shared link style ---------------- */
const linkCls =
  "underline decoration-dotted underline-offset-[3px] [text-decoration-thickness:1px] \
text-muted-foreground decoration-stone-400 hover:text-primary hover:decoration-stone-600 transition-colors";

export default function Search() {
  return (
    <div className="mx-auto max-w-3xl">
      {/* ---------- Main content ---------- */}
      <main className="flex-1 ">
        <article className="mx-auto max-w-3xl font-serif">
          {/* Back link */}
          <Link to="/past-work" className={linkCls}>
            ← Back to projects
          </Link>

          {/* ---------- Hero ---------- */}
          <h1 className="mt-6 text-4xl font-medium text-foreground">
            {/* TODO: project title */}
            Redesigning the AI search experience
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {/* TODO: year · role */}
            Jan 2024, Product Design
          </p>

          {/* Hero image (16:9 or any ratio you like) */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-[#D6D3CB] bg-white">
            {/* TODO: replace hero.jpg */}
            <img
              src="/images/projects/search/hero.svg"
              alt="Search redesign hero mock"
              className="w-full object-cover"
            />
          </figure>

          {/* ---------- Intro / TL;DR ---------- */}
          <section className="mt-10 space-y-4 text-muted-foreground">
            <p className="text-lg">
              In the past year, all the changes happening in the AI world have made me really think about how humans interact with information, and how our relationship with information has evolved in the past 20 years. With everyone using AI around me, I personally saw how AI chat interface marks a new page in how humans interact with information, and so I’m really interested in how to design user experiences for this new form of interaction. I saw Glean’s search results page as a perfect opportunity to challenge myself to design an integrated user experience between new and old patterns, between traditional search and AI powered search experiences.
            </p>
          </section>

        <section className="mt-10 space-y-4 text-muted-foreground">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight">
                Glean's existing search results page
                </h2>
            <figure className="overflow-hidden rounded-lg border">
                {/* TODO: replace io-diagram.jpg with your actual image */}
                <img
                src="/images/projects/search/glean.svg"
                alt="Glean's existing search results page"
                className="w-full object-cover"
                />
            </figure>
          </section>
          <div className="my-12 h-px w-full bg-stone-300 dark:bg-stone-600" />

          
            {/* ---------- INPUT–OUTPUT MODEL + JTBD ---------- */}
            <section className="mt-16 space-y-12">
            {/* hero diagram (full‑width inside article) */}
            {/* caption / next section */}
            <div className="space-y-6">
                {/* small label */}
                <h3 className="text-xs tracking-wider uppercase text-muted-foreground">
                Understanding the product
                </h3>

                {/* big question headline */}
                <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight">
                What are the JTBD of a search results page?
                </h2>

                {/* explanatory paragraph */}
                <p className="text-muted-foreground">
                {/* TODO: adjust copy */}
                If we step back and look at a search results page, we see it sits between
                the user and enterprise data. From that perspective, the key jobs‑to‑be‑done
                are:
                </p>

                {/* numbered list */}
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Receive input queries from the user.</li>
                <li>Display output data to the user.</li>
                </ol>

                <p className="text-muted-foreground">
                The types of inputs and outputs also shape the overall user experience.
                </p>
            </div>
                        <figure className="overflow-hidden rounded-lg border">
                {/* TODO: replace io-diagram.jpg with your actual image */}
                <img
                src="/images/projects/search/jtbd.svg"
                alt="Flow of user inputs → search → data outputs"
                className="w-full object-cover"
                />
            </figure>
            </section>
<div className="my-12 h-px w-full bg-stone-300 dark:bg-stone-600" />


        {/* ---------- USER RESEARCH block ---------- */}
            <section className="mt-16 space-y-6">
            {/* small uppercase label */}
            <h3 className="text-xs tracking-wider uppercase text-muted-foreground">
                User Research
            </h3>

            {/* big headline */}
            <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight">
                Traditional search&nbsp;vs&nbsp;AI‑powered search
            </h2>

            {/* intro paragraph */}
            <p className="text-muted-foreground">
                I interviewed five friends, most of whom were software engineers or designers
                experienced with AI. A few example research questions:
            </p>

            {/* bullet list of research questions */}
            <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
                <li>In what situations would you use Google versus ChatGPT?</li>
                <li>What are the most important things to you when you use Google or ChatGPT?</li>
            </ul>

            {/* key‑takeaway subheading */}
            <h4 className="font-semibold text-foreground">Key takeaways:</h4>

            {/* numbered list */}
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>
                Users tend to choose traditional search when they want direct,
                fast, and clear answers.
                </li>
                <li>
                They turn to AI‑powered search when they feel confused and want to engage
                in a question–and–answer flow.
                </li>
                <li>
                When both modes are available, people read the AI‑generated answer first
                but value seamless navigation back to Google results.
                </li>
            </ol>
            <figure className="overflow-hidden rounded-lg border">
                {/* TODO: replace io-diagram.jpg with your actual image */}
                <img
                src="/images/projects/search/user-research.svg"
                alt="Flow of user inputs → search → data outputs"
                className="w-full object-cover"
                />
            </figure>
            </section>

<div className="my-12 h-px w-full bg-stone-300 dark:bg-stone-600" />

          {/* ---------- USER TESTING ---------- */}
            <section className="mt-16 space-y-6">
            {/* section label */}
            <h3 className="text-xs tracking-wider uppercase text-muted-foreground">
                User Testing
            </h3>

            {/* headline */}
            <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight">
                Testing the existing search results page
            </h2>

            {/* context paragraph */}
            <p className="text-muted-foreground">
                Based on the JTBD defined earlier and the takeaways from my user interviews, I
                wrote four goals users would want to achieve on the search results page. I crafted
                my user‑test questions around these goals, and tested the same interviewees with 
                these goals, assessing how well the existing search results page
                performed against them.
            </p>

            {/* numbered goals */}
            <ol className="list-decimal pl-6 space-y-4 text-muted-foreground">
                <li>
                <strong className="text-foreground">Converse with Assistant</strong> – users
                need to ask follow‑up questions naturally.
                </li>
                <li>
                <strong className="text-foreground">Find relevant information fast</strong> –
                they should quickly spot the most relevant piece of information.
                </li>
                <li>
                <strong className="text-foreground">Navigate information easily</strong> –
                the layout must help users move through results without friction.
                </li>
                <li>
                <strong className="text-foreground">Customize search</strong> – advanced
                filters or parameters let users refine what they see.
                </li>
            </ol>

            <Carousel className="mt-14">
                <CarouselContent>
                    {[
                    {
                        src: "/images/projects/search/slide1.svg",
                        alt: "Infra query result",
                        goal: "Goal 1: Converse with Assistant",
                        test: "Test: Write a follow up question to Glean Assistant",
                        result:
                        "Result: Users were confused they should click 'new chat' to ask a question or to tap on 'Ask...'",
                    },
                    {
                        src: "/images/projects/search/slide2.svg",
                        alt: "Profile card query result",
                        goal: "Goal 2: Find relevant information fast",
                        test: "Test: Tell me who Sam Eve is",
                        result:
                        "Result: Very fast and positive responses; users loved this card component.",
                    },
                    {
                        src: "/images/projects/search/slide3.svg",
                        alt: "Profile card query result",
                        goal: "Goal 3: Navigate information easily",
                        test: "Test: Say you are on the product team and want to find the product quarterly goals. Point to where you would click.",
                        result:
                        "Result: All users said they felt overwhelmed by the amount of information, and some said it was confusing why 'Company quarterly goals' appeared twice under two different contexts.",
                    },
                    {
                        src: "/images/projects/search/slide4.svg",
                        alt: "Profile card query result",
                        goal: "Goal 4: Customize search",
                        test: "Test: Filter out for all results of type 'Notion'",
                        result:
                        "Result: Initial reactions were to use the top bar and select 'what type', most were confused about the filter on the right",
                    },
                    ].map((s) => (
                    <CarouselItem key={s.src} className="flex flex-col items-center">
                        {/* image */}
                        <img
                        src={s.src}
                        alt={s.alt}
                        className="w-full rounded-lg border border-[#D6D3CB] bg-white object-cover"
                        />
                        {/* caption */}
                        <div className="mt-6 w-full max-w-2xl space-y-2 font-serif text-muted-foreground">
                        <p className="text-base font-semibold text-foreground">{s.goal}</p>
                        <p className="text-sm">{s.test}</p>
                        <p className="text-sm">{s.result}</p>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>

                {/* arrows & dots */}
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
        </section>
        <div className="my-12 h-px w-full bg-stone-300 dark:bg-stone-600" />
        {/* <div className="my-12 h-px w-full bg-stone-300 dark:bg-stone-600" />

        <section className="mt-16 space-y-10">
        <figure className="overflow-hidden">
            <img
            src="/images/projects/search/hmw-trad-search.svg"
            alt="Interview + testing insights leading to HMW question"
            className="w-full object-cover"
            />
        </figure>

        <h3 className="text-xs tracking-wider uppercase text-muted-foreground">
            Design: Traditional Search
        </h3>

        <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight">
            Redesigning the traditional search experience to be less overwhelming and more consistent
        </h2>

        <p className="text-muted-foreground">
            To achieve this, I tackled two things in the UI:
        </p>

        <ol className="list-decimal pl-6 space-y-12 text-muted-foreground">
            <li className="space-y-6">
            <p>
                <span className="font-semibold text-foreground">Less overwhelming —</span>{" "}
                I prioritised key features, hid the rest, and toned down colour.
            </p>

            <img
            src="/images/projects/search/trad-search-1.svg"
            alt="Interview + testing insights leading to HMW question"
            className="w-full object-cover"
            />
            </li>

            <li className="space-y-6">
            <p>
                <span className="font-semibold text-foreground">More consistent —</span>{" "}
                I defined guidelines for component usage based on whether a result is
                primary or tangential.
            </p>
            <img
            src="/images/projects/search/trad-search-2.svg"
            alt="Interview + testing insights leading to HMW question"
            className="w-full object-cover"
            />
            </li>
        </ol>
        </section>
        <div className="my-12 h-px w-full bg-stone-300 dark:bg-stone-600" /> */}
        
        {/* ---------- AI‑Powered Search Redesign ---------- */}
        <section className="mt-20 px-4 -mx-4 ">
        <div className="mx-auto max-w-3xl space-y-12">
            {/* hero insight diagram */}
            <figure className="overflow-hidden">
            {/* TODO: replace insights-ai-diagram.jpg */}
            <img
                src="/images/projects/search/hmw-ai-search.svg"
                alt="Interview + testing insights leading to AI assistant HMW"
                className="w-full object-cover"
            />
            </figure>

            {/* label */}
            <h3 className="text-xs tracking-wider uppercase text-muted-foreground">
            Design: AI‑powered search
            </h3>

            {/* headline */}
            <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight">
            Redesigning the AI‑powered search to let users ask follow‑up
            questions more easily
            </h2>

            {/* intro paragraph */}
            <p className="text-muted-foreground">
            Users struggled to see where they could follow up with the assistant.
            I iterated on several layouts to make the chat entry point obvious and
            contextual. Click through the image carousel to see a few key iterations.
            </p>

            {/* ---------- carousel of iterations ---------- */}
            <Carousel className="mt-8">
            <CarouselContent>
                {[
                {
                    src: "/images/projects/search/ai-slide1.svg", // TODO
                    alt: "Iteration 1 mock",
                    test: "Decision: make the AI response lay on the gray background instead of white",
                    result: "Rationale: create color contrast with the follow up input field, and create a stronger delineation between traditional search results and AI response",
                },
                {
                    src: "/images/projects/search/ai-slide2.svg", // TODO
                    alt: "Iteration 2 mock",
                    test: "Decision: to make the input field stand out, I made it much taller and longer so that it takes up more space",
                    result: "Iteration 1: in order to make the input field big and noticeable, I made the decision to get rid of the suggested questions that were initially next to the input field",
                    revision: "Revision: As I thought more about it, I struggled to reason why I should get rid of this feature beyond purely aesthetic reasons. There was value being added by having suggested questions there, and I also felt that this was a discussion meant more for product and strategy than design",
                    iteration: "Iteration 2: I included the suggested questions back in again, using the same visual language as the original"
                },
                {
                    src: "/images/projects/search/ai-slide3.svg", // TODO
                    alt: "Iteration 3 mock",
                    test: "Decision: Added a toggle ability (chevron) to allow users to shrink the assistant when needed",
                    result: "Rationale: so that users can navigate between the AI powered serach vs traditional search results more easily",
                },
                ].map((s) => (
                    <CarouselItem key={s.src} className="flex flex-col items-center">
                        {/* image */}
                        <img
                        src={s.src}
                        alt={s.alt}
                        className="w-full rounded-lg border border-[#D6D3CB] bg-white object-cover"
                        />
                        {/* caption */}
                        <div className="mt-6 w-full max-w-2xl space-y-2 font-serif text-muted-foreground">
                        <p className="text-m">{s.test}</p>
                        <p className="text-m">{s.result}</p>
                        <p className="text-m">{s.revision}</p>
                        <p className="text-m">{s.iteration}</p>
                        </div>
                </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>
        </section>
        {/* <div className="my-12 h-px w-full bg-stone-300 dark:bg-stone-600" />
        <section className="mt-20 space-y-10">
        <figure>
            <img
            src="/images/projects/search/hmw-ia.svg"
            alt="Interview + testing insights leading to IA HMW"
            className="w-full object-cover" 
            />
        </figure>

        <h3 className="text-xs tracking-wider uppercase text-muted-foreground">
            Design: IA structure
        </h3>

        <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight">
            Redesigning the structure of the page to let users more intuitively filter their searches
        </h2>

        <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Iteration #1:</span>{" "}
            I redesigned the layout so the filter lives on the left as a fixed menu bar.
        </p>

        <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Rationale:</span>{" "}
            This scales: future filters (time, author, collection) stack neatly.
        </p>

        <figure>
            <img
            src="/images/projects/search/ia-v1.svg"
            alt="Left‑side fixed filter menu mock"
            className="w-full object-cover"
            />
        </figure>

        <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Revision:</span>{" "}
            Users are familiar with Google‑like top filters; the left rail felt odd.
        </p>

        <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Iteration #2:</span>{" "}
            I moved filters into the top bar and let users refine results from there.
        </p>

        <figure>
            <img
            src="/images/projects/search/ia-v2.svg"
            alt="Left‑side fixed filter menu mock"
            className="w-full object-cover"
            />
        </figure>
        </section> */}
        <div className="my-12 h-px w-full bg-stone-300 dark:bg-stone-600" />
                {/* ---------- FINAL REDESIGNS ---------- */}
        <section className="mt-20 space-y-10">
{/* 
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-center">
            Final redesigns of traditional search experience
        </h2>
        <figure>
            <img
            src="/images/projects/search/trad-after1.png"
            alt="Left‑side fixed filter menu mock"
            className="w-full object-cover"
            />
        </figure>
         */}
                <h2 className="text-3xl md:text-4xl font-medium text-foreground text-center">
            Final redesigns of AI search experience
        </h2>
        <figure>
            <img
            src="/images/projects/search/ai-final.png"
            alt="Left‑side fixed filter menu mock"
            className="w-full object-cover"
            />
        </figure>
        </section>
        <div className="my-12 h-px w-full bg-stone-300 dark:bg-stone-600" />

        {/* ---------- REFLECTION ---------- */}
        <section className="mt-20 space-y-10">
        {/* tiny label */}
        <h3 className="text-xs tracking-wider uppercase text-muted-foreground">
            Reflection
        </h3>

        {/* main headline */}
        <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight">
            Designing without access to the product, and<br className="hidden md:block" />
            reflecting on next steps
        </h2>

        {/* ---------- block 1 ---------- */}
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
            Biggest challenge: not having access to the product
            </h3>
            <p className="text-muted-foreground">
            Since I tackled this challenge solely from screenshots on&nbsp;Glean’s
            website, I couldn’t play with the live product. Most design decisions were
            therefore assumption‑driven. That constraint forced me to break problems
            apart, bump into walls, and problem‑solve in new ways. It also made me
            more aware of how information is presented to me every day.
            </p>
        </div>

        {/* ---------- block 2 ---------- */}
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
            Next steps: usability testing
            </h3>
            <p className="text-muted-foreground">
            My next move would be a round of usability tests on these designs,
            alignment sessions with Product, Engineering, and Strategy, and another
            iterate‑and‑revise cycle. Several decisions here are large and should be
            validated through studies or A/B tests.
            </p>
        </div>

        {/* ---------- block 3 ---------- */}
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
            Next steps: aligning with PMs, strategy and engineers
            </h3>
            <p className="text-muted-foreground">
            Continuous alignment with PMs and strategy partners would be critical in
            a real project. Decisions like removing the right‑hand filter bar or
            moving entity outputs could have wider product implications. I’d hold
            discussions early to understand those trade‑offs before committing.
            </p>
        </div>
        </section>

        </article>
      </main>
    

    </div>
  );
}
