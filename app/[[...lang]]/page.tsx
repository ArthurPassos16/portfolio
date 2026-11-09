import Image from "next/image";
import { type App, apps, content, getLang, type Params, profile } from "@/lib/data";
import shots from "../../public/apps/manifest.json";
import { ThemeToggle } from "./theme-toggle";

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-zinc-500">{n}</p>
      <h2 className="chrome mb-10 font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">{title}</h2>
      {children}
    </section>
  );
}

// "Em breve" apps have no real downloads yet, so they stay out of the sums
const sum = (list: App[]) => list.filter((a) => a.status !== "Em breve").reduce((n, a) => n + a.downloads, 0);
// one block per series, most downloaded first
const bySeries = (list: App[]) => {
  const m: Record<string, App[]> = {};
  for (const a of list) (m[a.series] ??= []).push(a);
  return Object.entries(m)
    .map(([series, l]) => ({ series, list: l.sort((a, b) => b.downloads - a.downloads), downloads: sum(l) }))
    .sort((a, b) => b.downloads - a.downloads);
};
const published = apps.filter((a) => !a.status);
const unpublished = apps.filter((a) => a.status);

const link = "rounded-full border border-white/20 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-300 transition hover:border-white hover:text-white";

function StoreLinks({ app, status }: { app: App; status: Record<string, string> }) {
  if (app.status) return <span className="rounded-full border border-dashed border-white/20 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500">{status[app.status] ?? app.status}</span>;
  return (
    <>
      <a href={app.play} target="_blank" rel="noopener noreferrer" className={link}>Google Play</a>
      {app.apple && <a href={app.apple} target="_blank" rel="noopener noreferrer" className={link}>App Store</a>}
    </>
  );
}

// click the app to open a strip with its App Store screenshots (native <details>, no JS)
const row = "flex flex-wrap items-center justify-between gap-2 py-2";
function ScreenshotRow({ app, children }: { app: App; children: React.ReactNode }) {
  const id = app.apple?.match(/\/id(\d+)/)?.[1];
  const imgs = id ? (shots as Record<string, string[]>)[id] : undefined;
  if (!imgs) return <div className={row}>{children}</div>;
  return (
    <details>
      <summary className={`${row} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>{children}</summary>
      <div className="flex gap-3 overflow-x-auto pb-3 pt-1">
        {imgs.map((src, i) => (
          <Image key={src} src={src} alt={`${app.name} ${i + 1}`} width={196} height={348} loading="lazy" className="h-[348px] w-auto shrink-0 rounded-xl border border-white/10" />
        ))}
      </div>
    </details>
  );
}

export default async function Home({ params }: { params: Params }) {
  const t = content[await getLang(params)];
  const { ui } = t;
  const fmt = (n: number) => n.toLocaleString(t.locale);
  return (
    <>
      <div aria-hidden className="sparkles pointer-events-none fixed inset-0 -z-10" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#" aria-label={profile.name} className="chrome font-display text-sm font-bold tracking-widest">AP</a>
          <div className="flex gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 sm:gap-8">
            <a href="#projetos" className="hover:text-white">{ui.nav.apps}</a>
            <a href="#experiencia" className="hover:text-white">{ui.nav.experience}</a>
            <a href="#tecnologias" className="hidden hover:text-white md:inline">{ui.nav.skills}</a>
            <a href="#formacao" className="hidden hover:text-white md:inline">{ui.nav.education}</a>
            <a href="#contato" className="hover:text-white">{ui.nav.contact}</a>
            <a href={ui.switchLang.href} hrefLang={ui.switchLang.href === "/en" ? "en" : "pt-BR"} aria-label={ui.switchLang.aria} className="hover:text-white">{ui.switchLang.label}</a>
            <ThemeToggle labels={ui.theme} />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <section className="relative grid min-h-[80vh] content-center items-center gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="holo font-mono text-xs uppercase tracking-[0.5em]">01 — {ui.nav.about} · {profile.location}</p>
            <h1 className="chrome mt-6 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Arthur<br />Passos
            </h1>
            <p className="mt-6 font-mono text-sm uppercase tracking-[0.3em] text-zinc-300">{t.role}</p>
            <p className="mt-8 max-w-xl leading-relaxed text-zinc-400">{t.summary}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projetos" className="btn-chrome rounded-full px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest">
                {ui.seeApps}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-white/10">
                LinkedIn
              </a>
              <a href={ui.resumeHref} download className="rounded-full border border-white/30 px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-white/10">
                {ui.resume}
              </a>
            </div>
          </div>

          <div aria-hidden className="relative mx-auto aspect-square w-64 sm:w-80">
            <div className="beams absolute -inset-1/2" />
            <div className="disco absolute inset-0" />
          </div>

        </section>

        <Section id="projetos" n="02" title={ui.appsTitle}>
          <div className="mb-10 space-y-6">
            {t.caseStudies.map((c) => (
              <article key={c.app} className="glass p-6 sm:p-8">
                {c.images.length > 0 && (
                  <div className={`mb-6 grid gap-3 ${c.images[0].includes("6448304900") ? "max-w-3xl sm:grid-cols-3" : "max-w-xl grid-cols-3"}`}>
                    {c.images.map((src, i) => (
                      <Image key={src} src={src} alt={`${c.app} ${i + 1}`} width={392} height={src.includes("6448304900") ? 180 : 696} className="h-auto w-full rounded-xl border border-white/10" />
                    ))}
                  </div>
                )}
                <div>
                  <p className="holo font-mono text-xs uppercase tracking-[0.25em]">{ui.caseStudy} · {c.client}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{c.app}</h3>
                  <p className="mt-4 text-zinc-300">{c.problem}</p>
                  <ul className="mt-5 space-y-2 text-zinc-300">
                    {c.role.map((r) => (
                      <li key={r} className="flex gap-3"><span className="text-zinc-600">✦</span>{r}</li>
                    ))}
                  </ul>
                  <p className="mt-5 font-mono text-xs uppercase tracking-wider text-zinc-400">{c.stack.join(" · ")}</p>
                  {c.repo && <a href={c.repo} target="_blank" rel="noopener noreferrer" className={`${link} mt-4 inline-block`}>{ui.repo}</a>}
                </div>
              </article>
            ))}
          </div>
          <h3 className="mb-2 font-display text-xl font-bold">{ui.catalogTitle}</h3>
          <p className="mb-8 max-w-2xl text-zinc-400">{ui.appsIntro}</p>
          {[[ui.groups.published, published], [ui.groups.unpublished, unpublished]].map(([title, list]) => (
            <div key={title as string} className="mt-10">
              <h4 className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">{title as string} · {(list as App[]).length}</h4>
          <div className="grid gap-x-10 gap-y-8 lg:grid-cols-2">
            {bySeries(list as App[]).map((g) => (
              <section key={g.series} className="border-t border-white/20 pt-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h5 className="font-display text-lg font-semibold text-zinc-100">{t.series[g.series] ?? g.series}</h5>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                    {g.list.length} {g.list.length > 1 ? "apps" : "app"} · {fmt(g.downloads)} downloads
                  </span>
                </div>
                <ul className="mt-4 divide-y divide-white/10">
                  {g.list.map((app) => (
                    <li key={app.name}>
                      <ScreenshotRow app={app}>
                        <span className="text-sm text-zinc-200">
                          {app.name}
                          {app.status !== "Em breve" && <span className="ml-2 font-mono text-[11px] text-zinc-500">{fmt(app.downloads)}</span>}
                        </span>
                        <span className="flex gap-2">
                          <StoreLinks app={app} status={t.status} />
                        </span>
                      </ScreenshotRow>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
            </div>
          ))}
        </Section>

        <Section id="experiencia" n="03" title={ui.experienceTitle}>
          <ol className="space-y-10">
            {t.experience.map((job) => (
              <li key={job.company} className="border-t border-white/20 pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{job.company}</h3>
                  {job.period && <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">{job.period}</span>}
                </div>
                <p className="holo mt-1 font-mono text-xs uppercase tracking-[0.25em]">{job.role}</p>
                <ul className="mt-5 space-y-2 text-zinc-300">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3"><span className="text-zinc-600">✦</span>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="tecnologias" n="04" title={ui.skillsTitle}>
          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {Object.entries(t.skills).map(([group, items]) => (
              <div key={group} className="border-t border-white/20 pt-4">
                <dt className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">{group}</dt>
                <dd className="mt-2 text-zinc-200">{items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="formacao" n="05" title={ui.educationTitle}>
          <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {t.education.map((e) => (
              <li key={e.title} className="border-t border-white/20 pt-4">
                <span className="font-mono text-xs text-zinc-500">{e.year}</span>
                <p className="mt-1 font-display font-semibold">{e.title}</p>
                <p className="text-sm text-zinc-400">{e.place}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contato" n="06" title={ui.contactTitle}>
          <a href={`mailto:${profile.email}`} className="holo break-all font-display text-xl font-semibold sm:text-3xl">
            {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>GitHub</a>
            <a href={ui.resumeHref} download className={link}>{ui.resume}</a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-600">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
