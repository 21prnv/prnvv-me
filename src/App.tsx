import { useState } from "react";
import { DATA } from "./data/resume";
import AudioWallpaper from "./components/AudioWallpaper";

/* inline blue link */
function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

/* a small labelled list of links with one-line notes */
function LinkList({
  heading,
  items,
}: {
  heading: string;
  items: { name: string; href: string; note: string }[];
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-3 text-base font-bold text-ink">{heading}</h2>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.name} className="leading-relaxed">
            <A href={it.href}>{it.name}</A>
            <span className="text-body"> · {it.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* one company row: name is a real external link, the rest toggles the panel */
function WorkItem({
  item,
}: {
  item: { name: string; href: string; note: string; period: string; description: string };
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/5">
      <div
        className="flex cursor-pointer items-baseline gap-1 py-2 select-none"
        onClick={() => setOpen((o) => !o)}
      >
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="font-medium"
        >
          {item.name}
        </a>
        <span className="text-body"> · {item.note}</span>
        <span
          className={`ml-auto shrink-0 text-muted transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        >
          ›
        </span>
      </div>
      {/* grid-rows 0fr -> 1fr animates height smoothly */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-3 text-[15px] leading-6 text-body">
            <p className="text-muted">{item.period}</p>
            <p className="mt-1">{item.description.toLowerCase()}</p>
            <A href={item.href}>visit {item.name} →</A>
          </div>
        </div>
      </div>
    </div>
  );
}

/* expandable work history */
function WorkList({
  items,
}: {
  items: { name: string; href: string; note: string; period: string; description: string }[];
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-3 text-base font-bold text-ink">where i've worked</h2>
      <div className="space-y-1">
        {items.map((it) => (
          <WorkItem key={it.name} item={it} />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const s = DATA.contact.social;

  const projects = [
    { name: "codedestate", href: "https://www.codedestate.com/", note: "real estate on-chain: fractional ownership, rentals + rwa trading" },
    { name: "biorswap", href: "https://www.biorswap.com/", note: "a multi-asset crypto exchange" },
    { name: "satyacheck ai", href: "https://satya-check.vercel.app/", note: "fights political propaganda + misinformation with ai" },
    { name: "nodesq ai", href: "https://nodesq.site", note: "visual ai chat on an infinite canvas (not maintaining)" },
    { name: "impactarc ai", href: "https://impact-arc-4cog.vercel.app/", note: "ranks who really matters (not maintaining)" },
    { name: "asktocmd", href: "https://www.npmjs.com/package/asktocmd", note: "an ai helper for your terminal" },
  ];

  // apps i've shipped to the play store, sorted by downloads
  const num = (u: string) => parseInt(u.replace(/[^0-9]/g, ""), 10) || 0;
  const apps = [...DATA.appProjects]
    .sort((a, b) => num(b.users) - num(a.users))
    .map((a) => ({
      name: a.title.toLowerCase(),
      href: a.link,
      note: a.users.replace("users", "downloads"),
    }));

  // order matches DATA.work, so descriptions/dates zip by index
  const work = [
    { name: "biorlabs", href: "https://biorlabs.com/", note: "software engineer, leading a multi-chain crypto wallet (now)" },
    { name: "ziti", href: "https://letsziti.com/", note: "founding engineer" },
    { name: "codehelp", href: "https://www.codehelp.in/", note: "wrote 80+ articles on react + typescript" },
    { name: "tarotit", href: "https://tarotit.com/", note: "react native developer intern" },
    { name: "tripo saints", href: "https://triposaints.com/", note: "software developer intern" },
  ].map((w, i) => ({
    ...w,
    period: `${DATA.work[i].start} to ${DATA.work[i].end}`.toLowerCase(),
    description: DATA.work[i].description,
  }));

  return (
    <main className="mx-auto max-w-prose px-6 py-16 text-[17px] leading-7 sm:py-24">
      <AudioWallpaper />

      {/* top nav */}
      <nav className="mb-10 flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
        <A href={s.GitHub.url}>github</A>
        <A href={s.X.url}>twitter</A>
        <A href={s.LinkedIn.url}>linkedin</A>
        <A href={s.Resume.url}>resume</A>
      </nav>

      {/* heading */}
      <h1 className="text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
        hey, i'm pranav.
      </h1>

      {/* story */}
      <div className="mt-6 space-y-5 text-body">
        <p>
          i started coding on a keypad phone. no laptop, no ide, just a tiny
          screen and way too much curiosity. i'd sit up at night writing little
          programs on it because i genuinely wanted to know how things worked.
        </p>
        <p>that curiosity never left. it quietly turned into a whole career.</p>
        <p>
          today i'm a 22-year-old software engineer based in{" "}
          <A href={DATA.locationLink}>pune</A>, india. i build full-stack web and
          mobile products, and i've spent the last few years shipping things
          end-to-end with founders at 5+ startups.
        </p>
        <p>
          right now i'm a software engineer at{" "}
          <A href="https://biorlabs.com/">biorlabs</A>, where i lead a small team
          building a multi-chain crypto wallet that supports 20+ blockchains. i
          work across the whole stack: react and react native on the front,
          node, redis and bullmq on the back.
        </p>
        <p>
          on the side i can't stop building my own things. an ai that fights
          misinformation, a visual way to chat with ai, a cli that answers your
          terminal questions, a few apps used by thousands of people. some of
          them worked, some didn't. i learned from all of them. these days i'm
          building on the agent layer, teaching ai to actually do things instead
          of just talking about them.
        </p>
        <p>
          when i'm not at a keyboard, i farm. real farming, on real land back
          home. it keeps me grounded, pun fully intended.
        </p>
        <p>
          i'm still that curious kid, just with better tools now. if you're
          building something interesting,{" "}
          <A href={`mailto:${DATA.contact.email}`}>say hi</A>.
        </p>
      </div>

      <LinkList heading="things i've built" items={projects} />
      <LinkList heading="apps i've shipped" items={apps} />
      <WorkList items={work} />

      {/* footer */}
      <footer className="mt-14 border-t border-black/5 pt-6 text-[15px] text-muted">
        <p>
          find me on <A href={s.GitHub.url}>github</A>,{" "}
          <A href={s.X.url}>twitter</A>, <A href={s.LinkedIn.url}>linkedin</A>, or
          just email me at{" "}
          <A href={`mailto:${DATA.contact.email}`}>{DATA.contact.email}</A>.
        </p>
        <p className="mt-3">
          © {new Date().getFullYear()} pranav patil.
        </p>
      </footer>
    </main>
  );
}
