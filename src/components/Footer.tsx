import React from "react";

export function Footer() {
  const d = new Date(document.lastModified);
  const label = d.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <footer className="mt-16 border-t border-[#D6D3CB]">
      {/* 1) outer wrapper mirrors <main class="md:ml-40 px-6"> */}
      <div className="md:ml-40 px-6">
        {/* 2) inner container mirrors <div class="mx-auto max-w-3xl"> */}
        <div className="mx-auto max-w-3xl py-6 font-serif text-sm text-muted-foreground">
          Last updated {label} · Built with{" "}
          <a
            href="https://lovable.dev"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-dotted underline-offset-[3px] [text-decoration-thickness:1px] decoration-stone-400 hover:text-primary hover:decoration-stone-600 transition-colors"
          >
            Lovable
          </a>{" "}
          · Source on{" "}
          <a
            href="https://github.com/soniatam6/soniatam6.github.io/tree/main"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-dotted underline-offset-[3px] [text-decoration-thickness:1px] decoration-stone-400 hover:text-primary hover:decoration-stone-600 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
