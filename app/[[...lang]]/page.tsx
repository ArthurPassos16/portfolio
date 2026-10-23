import { type App, apps, content, getLang, type Params, profile, publishedApps } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

function Section({ id, act, title, children }: { id: string; act: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-zinc-500">{act}</p>
      <h2 className="chrome mb-10 font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">{title}</h2>
      {children}
    </section>
  );
}

const sum = (list: App[]) => list.reduce((n, a) => n + a.downloads, 0);
// one card per series, most downloaded first
const groups = Object.entries(Object.groupBy(apps, (a) => a.series) as Record<string, App[]>)
  .map(([series, list]) => ({ series, list: list.sort((a, b) => b.downloads - a.downloads), downloads: sum(list) }))
  .sort((a, b) => b.downloads - a.downloads);
const totalDownloads = sum(apps);

const link = "rounded-full border border-white/20 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-300 transition hover:border-white hover:text-white";
const published = publishedApps().length;

function StoreLinks({ app, status }: { app: App; status: Record<string, string> }) {
  if (app.status) return <span className="rounded-full border border-dashed border-white/20 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500">{status[app.status] ?? app.status}</span>;
  return (
    <>
      <a href={app.play} target="_blank" rel="noopener noreferrer" className={link}>Google Play</a>
      {app.apple && <a href={app.apple} target="_blank" rel="noopener noreferrer" className={link}>App Store</a>}
    </>
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
          <a href="#" className="chrome font-display text-sm font-bold tracking-widest">AP</a>
          <div className="flex gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 sm:gap-8">
            <a href="#apps" className="hover:text-white">{ui.nav.apps}</a>
            <a href="#experiencia" className="hover:text-white">{ui.nav.experience}</a>
            <a href="#skills" className="hidden hover:text-white sm:inline">{ui.nav.skills}</a>
            <a href="#contato" className="hover:text-white">{ui.nav.contact}</a>
            <a href={ui.switchLang.href} hrefLang={ui.switchLang.href === "/en" ? "en" : "pt-BR"} aria-label={ui.switchLang.aria} className="hover:text-white">{ui.switchLang.label}</a>
            <ThemeToggle labels={ui.theme} />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <section className="relative grid min-h-[85vh] content-center items-center gap-12 py-20 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="holo font-mono text-xs uppercase tracking-[0.5em]">{ui.acts[0]} · {profile.location}</p>
            <h1 className="chrome mt-6 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Arthur<br />Passos
            </h1>
            <p className="mt-6 font-mono text-sm uppercase tracking-[0.3em] text-zinc-300">{t.role}</p>
            <p className="mt-8 max-w-xl leading-relaxed text-zinc-400">{t.summary}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#apps" className="btn-chrome rounded-full px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest">
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

          <dl className="grid grid-cols-3 gap-3 lg:col-span-2">
            {[
              [`${published}`, ui.stats[0]],
              [`+${fmt(Math.floor(totalDownloads / 100) * 100)}`, ui.stats[1]],
              ["4", ui.stats[2]],
            ].map(([n, label]) => (
              <div key={label} className="glass flex flex-col p-4 sm:p-6">
                <dt className="order-last mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500 sm:text-xs">{label}</dt>
                <dd className="chrome font-display text-xl font-bold sm:text-4xl">{n}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Section id="apps" act={ui.acts[1]} title={`${published} ${ui.appsTitle}`}>
          <p className="-mt-4 mb-10 max-w-2xl text-zinc-400">
            {ui.appsIntro}
          </p>
          <div className="mb-10 space-y-6">
            {t.caseStudies.map((c) => (
              <article key={c.app} className="glass grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.5fr_1fr]">
                <div>
                  <p className="holo font-mono text-xs uppercase tracking-[0.25em]">{ui.caseStudy} · {c.client}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{c.app}</h3>
                  <p className="mt-4 text-zinc-300">{c.problem}</p>
                  <ul className="mt-5 space-y-2 text-zinc-300">
                    {c.role.map((r) => (
                      <li key={r} className="flex gap-3"><span className="text-zinc-600">✦</span>{r}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.stack.map((s) => (
                      <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200">{s}</span>
                    ))}
                    {c.repo && <a href={c.repo} target="_blank" rel="noopener noreferrer" className={link}>{ui.repo}</a>}
                  </div>
                </div>
                <dl className="grid content-center gap-3">
                  {c.stats.map(([n, label]) => (
                    <div key={label} className="flex flex-col border-l border-white/20 pl-4">
                      <dt className="order-last font-mono text-[10px] uppercase tracking-widest text-zinc-500">{label}</dt>
                      <dd className="chrome font-display text-3xl font-bold">{n}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {groups.map((g) => (
              <section key={g.series} className="glass p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-zinc-100">{t.series[g.series] ?? g.series}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                    {g.list.length} {g.list.length > 1 ? "apps" : "app"} · {fmt(g.downloads)} downloads
                  </span>
                </div>
                <ul className="mt-4 divide-y divide-white/10">
                  {g.list.map((app) => (
                    <li key={app.name} className="flex flex-wrap items-center justify-between gap-2 py-2">
                      <span className="text-sm text-zinc-200">
                        {app.name}
                        <span className="ml-2 font-mono text-[11px] text-zinc-500">{fmt(app.downloads)}</span>
                      </span>
                      <span className="flex gap-2">
                        <StoreLinks app={app} status={t.status} />
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Section>

        <Section id="experiencia" act={ui.acts[2]} title={ui.experienceTitle}>
          <ol className="space-y-6">
            {t.experience.map((job) => (
              <li key={job.company} className="glass p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{job.company}</h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">{job.period}</span>
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
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.education.map((e) => (
              <li key={e.title} className="glass p-6">
                <span className="font-mono text-xs text-zinc-500">{e.year}</span>
                <p className="mt-1 font-display font-semibold">{e.title}</p>
                <p className="text-sm text-zinc-400">{e.place}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" act={ui.acts[3]} title={ui.skillsTitle}>
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(t.skills).map(([group, items]) => (
              <div key={group} className="glass p-6">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contato" act={ui.acts[4]} title={ui.contactTitle}>
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
