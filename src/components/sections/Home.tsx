// src/pages/Home.tsx
import React from "react";

const linkCls =
  "underline decoration-dotted underline-offset-[3px] [text-decoration-thickness:1px] \
text-muted-foreground decoration-stone-400 \
hover:text-foreground hover:decoration-stone-600 \
dark:decoration-stone-500 hover:dark:decoration-stone-300 \
transition-colors duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-400/40 rounded-sm";


export const Home = () => {
  return (
    <div className="max-w-3xl font-serif text-foreground">
      {/* Title */}
      <h1 className="mb-10 text-3xl font-medium">Sonia Tam</h1>

      {/* ---------- About (home) ---------- */}
      <section
        id="home"
        className="gap-x-8 gap-y-2 mb-12"
      >
        <div>
          <p className="text-muted-foreground">
            I recently graduated from the University of Pennsylvania, where I
            studied Cognitive Science and Computer Science.</p><p className="text-muted-foreground"> I’m interested in complex systems — anything
            from the human psyche to the artificial mind to the macroeconomic machine. I follow where my 
            curiosity leads me, and I’m always looking for new challenges.
          </p>
        </div>
      </section>

      {/* ---------- Past work ---------- */}
      <section
        id="past-work"
        className="grid grid-cols-[200px,1fr] gap-x-8 gap-y-2 mb-12"
      >
        <h2 className="text-base font-bold">Past Work</h2>
        <div>
          <p className="mb-3">
            I love building complex things, fast. In the past, I've: 
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-stone-400 text-muted-foreground">
            <li>
              <p> Built a self-serve rankings dashboard for institutional market makers for <a href="https://international.coinbase.com/?tab=derivatives" className={linkCls} target="_blank" rel="noreferrer">
                Coinbase International Exchange
              </a></p> 
            </li>
            <li>
              <p>Redesigned all 17 of <a href="https://www.airwallex.com/us" className={linkCls} target="_blank" rel="noreferrer"> Airwallex's</a> product landing pages, 
              defining the product narratives for their new embedded finance products</p>
            </li>
            <li>
              <p>Built an <a href="https://www.airwallex.com/us" className={linkCls} target="_blank" rel="noreferrer"> image localization tool</a> to help designers launch Airwallex's website in 11 regions under 3 weeks </p>
            </li>
            <li>
              <p>Built an AI <a href="https://www.airwallex.com/us" className={linkCls} target="_blank" rel="noreferrer"> copy suggestion Figma plugin</a> for product designers</p>
            </li>
            <li>
              <p>Co-founded <a href="https://drive.google.com/file/d/1R1MJZVozLimkxFvCyaOmbg-Znoi9JbeY/view?usp=sharing" className={linkCls} target="_blank" rel="noreferrer">Cabrium AI</a>, a startup aimed to empower product designers to make better decisions by collecting, documenting, and suggesting decisions made during the design process </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Personal projects ---------- */}
      <section
        id="personal-projects"
        className="grid grid-cols-[200px,1fr] gap-x-8 gap-y-2 mb-12"
      >
        <h2 className="text-base font-bold">Personal Projects</h2>
        <div>
          <p className="mb-3">
            Some personal projects I've dabbled in to learn and explore more about the world:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground marker:text-stone-400">
            <li>
              <p> Redesigning and exploring the <a href="#" className={linkCls}>
                AI search experience
              </a></p>
            </li>
            <li>
              <p> Articulating and building my own thesis of the future</p>
            </li>
            <li>
              <p> Curating a portfolio of my own taste in terms of the 5 senses</p>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Writing ---------- */}
      <section
        id="writing"
        className="grid grid-cols-[200px,1fr] gap-x-8 gap-y-2 mb-12"
      >
        <h2 className="text-base font-bold">Writing</h2>
        <div>
          <p className="mb-3">
            Reflections and ramblings about everything from culture to the human condition.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground marker:text-stone-400">
            <li>
              <p> <a href="https://soniatam.substack.com/p/our-current-dystopia" className={linkCls}>
                Our current dystopia
              </a> - on the flattening of humanity and necessity of suffering</p>
            </li>
            <li>
              <p> <a href="https://soniatam.substack.com/p/psychology-of-fraternities" className={linkCls}>
                The psychology of Greek life
              </a> - what purpose do fraternities serve?</p>
            </li>
            <li>
              <p> <a href="https://soniatam.substack.com/p/our-relationship-with-information" className={linkCls}>
                Our relationship with information
              </a> - how is AI changing the way we interact with knowledge?</p>
            </li>
            <li>
              <p> <a href="https://soniatam.substack.com/p/agency" className={linkCls}>
                Agency
              </a> - what is agency in the face of chaos?</p>
            </li>
            <li>
              <p> <a href="https://soniatam.substack.com/p/ruminations-on-abstraction" className={linkCls}>
                Ruminations on abstraction
              </a> - on the topic of art as escapism and the marriage of art and music</p>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Things I love ---------- */}
      <section
        id="things-i-love"
        className="grid grid-cols-[200px,1fr] gap-x-8 gap-y-2 mb-12"
      >
        <h2 className="text-base font-bold">Things I Love</h2>
        <div>
          <p className="mb-3">
            Things that make me feel alive, keep me grounded, and are near and dear to my heart.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground marker:text-stone-400">
            <li className="text-muted-foreground"><a href="https://www.sfomuseum.org/exhibitions/camille-seaman-big-cloud" className={linkCls}>
                Storm chasing
              </a> and cloud watching</li>
            <li className="text-muted-foreground">
              Playing the pipe organ
            </li>
            <li className="text-muted-foreground">
              Muay Thai / boxing
            </li>
            <li className="text-muted-foreground">
              The <a href="https://en.wikipedia.org/wiki/Sublime_(philosophy)" className={linkCls}>
                sublime
              </a>, Surrealist art, Romanticist paintings
            </li>
            <li className="text-muted-foreground">
              The art of flamenco, classical Spanish guitar, acoustic rock - especially <a href="https://www.rodgab.com/" className={linkCls}>
                Rodrigo y Gabriela
              </a>
            </li>
            <li className="text-muted-foreground">
              Cooking and baking for others
            </li>
            <li className="text-muted-foreground">
              Scuba diving and exploring the ocean
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Curious about ---------- */}
      <section
        id="things-im-curious-about"
        className="grid grid-cols-[200px,1fr] gap-x-8 gap-y-2 mb-12"
      >
        <h2 className="text-base font-bold">Things I’m Curious About</h2>
        <div>
          <p className="mb-3">
            Questions and topics that have fascinated me lately.
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-stone-400">
            <li className="text-muted-foreground">
              What explains the 1990s Japanese "lost decade" and the current Japanese economic stagnation? Is China headed for a similar fate?
            </li>
            <li className="text-muted-foreground">
              How does modern Chinese history (Mao Zedong, the Cultural Revolution, Chinese Civil War etc.) shape the current Chinese psyche and politics?
            </li>
            <li className="text-muted-foreground">
              How did Japan and China respond differently to the West/modernization in the 19th and 20th century, and how did that shape their current cultural identities?
            </li>
            <li className="text-muted-foreground">
              What do the current political polarization, cultural degredation, increasing wealth inequality, and ongoing de-dollarization mean for the future of the US and the world?
            </li>
            <li className="text-muted-foreground">
              How does the increasing financialization of the US economy affect the way we live and work?
            </li>
            <li className="text-muted-foreground">
              What's causing the current dating crisis, marriage crisis, and birth rate crisis in the US, China, Korea, and other developed countries? What do we do about it?
            </li>
            <li className="text-muted-foreground">
              How do we define personal identity? Can AI ever have a personal identity?
            </li>
            <li className="text-muted-foreground">
              How do the narratives we tell ourselves shape our reality and identities?
            </li>
            <li className="text-muted-foreground">
              What is the psychological function of religion in society? Is technology the new religion?
            </li>
            <li className="text-muted-foreground">
              The concept of non-self in Buddhism, and the nature of emptiness and the void
            </li>
            <li className="text-muted-foreground">
              How did the history of US China relations lead up to the 2019 Hong Kong protests, and how does it shape the identity of Hong Kongers today?
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Read / watch ---------- */}
      <section
        id="things-i-read-watch"
        className="grid grid-cols-[200px,1fr] gap-x-8 gap-y-2 mb-12"
      >
        <h2 className="text-base font-bold">Favorite Books &amp; Films</h2>
        <div>
          <p className="text-muted-foreground mb-3">Books or movies that struck a chord</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-stone-400">
            <li className="text-muted-foreground">
              <em>Brave New World</em> — Aldous Huxley
            </li>
            <li className="text-muted-foreground">
              <em>Severance</em> — Ling Ma
            </li>
            <li className="text-muted-foreground">
              <em>The Sheltering Sky</em> — Paul Bowles
            </li>
            <li className="text-muted-foreground">
              <em>A Single Man</em> — Christopher Isherwood
            </li>
            <li className="text-muted-foreground">
              <em>The Picture of Dorian Gray</em> — Oscar Wilde
            </li>
            <li className="text-muted-foreground">
              <em>Bound Feet &amp; Western Dress</em> — Pang-Mei Natasha Chang
            </li>
            <li className="text-muted-foreground">
              <em>The Power and the Glory</em> — Graham Greene
            </li>
            <li className="text-muted-foreground">
              <em>The Wall</em> — Marlen Haushofer
            </li>
            <li className="text-muted-foreground">
              Koyaanisqatsi (1982)
            </li>
            <li className="text-muted-foreground">
              Ghost in the Shell (1995)
            </li>

          </ul>
        </div>
      </section>
    </div>
  );
};
