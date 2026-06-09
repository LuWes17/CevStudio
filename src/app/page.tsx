import Logo from "@/components/Logo";
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
    <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col border-rule sm:border-x">
      {/* ---- header ---- */}
      <header className="flex items-center justify-between border-b border-rule px-6 py-5 sm:px-10">
        <Logo className="text-xl" />
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
            cev.studio — independent digital studio
          </p>
          <h1
            className="reveal mt-6 max-w-[14ch] font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-ink"
            style={{ animationDelay: "0.14s" }}
          >
            Tell us what you&rsquo;re making.
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
          className="reveal flex flex-col justify-center border-t border-rule bg-ink/[0.015] px-6 py-12 sm:px-10 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:border-t-0 lg:border-l"
          style={{ animationDelay: "0.4s" }}
        >
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
                <span className="mt-1 font-mono text-xs tracking-wide text-accent">
                  {s.no}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold leading-none tracking-tight text-ink">
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
