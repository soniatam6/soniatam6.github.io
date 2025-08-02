const linkCls =
  "underline decoration-dotted underline-offset-[3px] [text-decoration-thickness:1px] \
text-muted-foreground decoration-stone-400 \
hover:text-foreground hover:decoration-stone-600 \
dark:decoration-stone-500 hover:dark:decoration-stone-300 \
transition-colors duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-400/40 rounded-sm";




export const Writing = () => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-serif font-medium mb-8 text-foreground">
        Writing
      </h2>

      <section
        id="writing"
        className="gap-x-8 gap-y-2 mb-12"
      >
        <div>
          <p className="mb-3">
            Reflections and ramblings about everything from the impact of AI to the human condition.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground marker:text-stone-400">
            <li>
              <p> <a href="https://soniatam.substack.com/p/ai-as-augmentation-not-replacement" className={linkCls}>
                AI as augmentation, not replacement
              </a> - my thoughts and experience using AI tools to enhance me</p>
            </li>
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
      <section
        id="writing"
        className="gap-x-8 gap-y-2 mb-12"
      >
        <p className="mb-3">
          Notes about books I've read / films I've watched.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground marker:text-stone-400">
          <li>
            <p> <a href="https://soniatam.substack.com/p/takeaways-from-heaven-and-hell" className={linkCls}>
              Heaven and Hell
            </a> - Aldous Huxley</p>
          </li>
          <li>
            <p> <a href="https://soniatam.substack.com/p/takeaways-from-doors-of-perception" className={linkCls}>
              Door of Perception
            </a> - Aldous Huxley</p>
          </li>
          <li>
            <p> <a href="https://soniatam.substack.com/p/book-notes-picture-of-dorian-gray" className={linkCls}>
              The Picture of Dorian Gray
            </a> - Oscar Wilde</p>
          </li>
          <li>
            <p> <a href="https://soniatam.substack.com/p/book-notes-brave-new-world" className={linkCls}>
              Brave New World
            </a> - Aldous Huxley</p>
          </li>
          <li>
            <p> <a href="https://soniatam.substack.com/p/koyaanisqatsi" className={linkCls}>
              Koyaanisqatsi (1983)
            </a></p>
          </li>
        </ul>
      </section>
    </div>
  );
};