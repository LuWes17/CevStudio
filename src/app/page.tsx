import ContactForm from "@/components/ContactForm";

const SERVICES = [
  {
    no: "01",
    name: "Web Development",
    desc: "Sites and apps that load fast and age well.",
  },
  {
    no: "02",
    name: "Mobile Apps",
    desc: "iOS and Android that feel native — shipped to the store.",
  },
  {
    no: "03",
    name: "Brand Identity",
    desc: "Marks, type systems, and the rules to use them.",
  },
  {
    no: "04",
    name: "3D Modelling",
    desc: "Product, scenes, and motion rendered in three dimensions.",
  },
];

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col border-rule sm:border-x">
      {/* ---- header ---- */}
      <header className="flex items-center justify-between border-b border-rule px-6 py-5 sm:px-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/final-logo.png"
          alt="cev.studio"
          className="h-6 w-auto select-none sm:h-7"
        />
        <span className="flex items-center gap-2.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open for new work
        </span>
      </header>

      {/* ---- main ---- */}
      <main className="flex flex-1 flex-col lg:grid lg:grid-cols-12 lg:grid-rows-[auto_1fr]">
        {/* intro — top left */}
        <section className="flex flex-col justify-center px-6 pt-16 pb-10 sm:px-10 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:pt-24">
          <p
            className="reveal font-mono text-[0.72rem] uppercase tracking-[0.22em] text-ink-soft"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="text-accent">/</span> independent digital studio
          </p>
          <h1
            className="reveal mt-6 max-w-[14ch] font-display text-[clamp(3rem,8vw,6.75rem)] font-extrabold leading-[0.9] tracking-[-0.035em] text-ink"
            style={{ animationDelay: "0.14s" }}
          >
            Tell us what you&rsquo;re{" "}
            <span className="text-lime-grad">making.</span>
          </h1>
          <p
            className="reveal mt-8 max-w-[44ch] font-sans text-lg leading-relaxed text-ink-soft"
            style={{ animationDelay: "0.24s" }}
          >
            We&rsquo;re a small studio building the web, mobile apps, brand
            identities, and 3D — end to end, with the same people who&rsquo;ll
            actually do the work. The form is the front door. Use it.
          </p>
        </section>

        {/* form — the hero, spanning both rows on the right */}
        <section
          className="reveal panel-hero relative flex flex-col justify-center border-t border-rule px-6 py-12 sm:px-10 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:border-t-0 lg:border-l"
          style={{ animationDelay: "0.4s" }}
        >
          {/* quiet lime marker — flags the hero without flooding it */}
          <span
            aria-hidden
            className="rule-lime absolute left-6 top-0 h-[2px] w-14 sm:left-10"
          />
          <div className="mx-auto w-full max-w-md">
            <div className="mb-9 flex items-baseline justify-between">
              <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-ink">
                Start a project
              </h2>
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-ink-soft">
                (msg / 01)
              </span>
            </div>
            <ContactForm />
            <p className="mt-8 font-mono text-[0.68rem] leading-relaxed tracking-wide text-ink-soft">
              No briefs lost to a portal. This goes straight to the studio and a
              person replies.
            </p>
          </div>
        </section>

        {/* services index — bottom left */}
        <section className="border-t border-rule px-6 py-10 sm:px-10 lg:col-span-7 lg:col-start-1 lg:row-start-2">
          <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-ink-soft">
            What we do
          </h2>
          <ul className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <li key={s.no} className="group flex gap-4">
                <span className="mt-1.5 font-mono text-xs tracking-wide text-accent transition-colors">
                  {s.no}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-none tracking-tight text-ink decoration-accent decoration-2 underline-offset-[6px] transition-all group-hover:underline">
                    {s.name}
                  </h3>
                  <p className="mt-2 max-w-[34ch] font-sans text-sm leading-relaxed text-ink-soft">
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* ---- ticker ---- */}
      <Ticker />
    </div>
  );
}

function Ticker() {
  const items = ["Web Development", "Mobile Apps", "Brand Identity", "3D Modelling"];
  // Two identical copies so translateX(-50%) loops seamlessly.
  const sequence = [...items, ...items];
  return (
    <footer className="overflow-hidden border-t border-rule">
      <div className="marquee-track flex w-max whitespace-nowrap py-3">
        {sequence.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center font-mono text-xs uppercase tracking-[0.2em] text-ink-soft"
          >
            <span className="mx-6 h-1 w-1 rounded-full bg-accent" />
            {item}
          </span>
        ))}
      </div>
    </footer>
  );
}
