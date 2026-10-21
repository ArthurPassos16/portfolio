import { apps, education, experience, profile, skills } from "@/lib/data";

function Section({ id, act, title, children }: { id: string; act: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-zinc-500">{act}</p>
      <h2 className="chrome mb-10 font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">{title}</h2>
      {children}
    </section>
  );
}

const link = "rounded-full border border-white/20 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-300 transition hover:border-white hover:text-white";

export default function Home() {
  return (
    <>
      <div aria-hidden className="sparkles pointer-events-none fixed inset-0 -z-10" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#" className="chrome font-display text-sm font-bold tracking-widest">AP</a>
          <div className="flex gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 sm:gap-8">
            <a href="#apps" className="hover:text-white">Apps</a>
            <a href="#experiencia" className="hover:text-white">Trajetória</a>
            <a href="#skills" className="hidden hover:text-white sm:inline">Skills</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <section className="relative grid min-h-[85vh] content-center items-center gap-12 py-20 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="holo font-mono text-xs uppercase tracking-[0.5em]">Act I · {profile.location}</p>
            <h1 className="chrome mt-6 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Arthur<br />Passos
            </h1>
            <p className="mt-6 font-mono text-sm uppercase tracking-[0.3em] text-zinc-300">{profile.role}</p>
            <p className="mt-8 max-w-xl leading-relaxed text-zinc-400">{profile.summary}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#apps" className="btn-chrome rounded-full px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest">
                Ver apps
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-white/10">
                LinkedIn
              </a>
            </div>
          </div>

          <div aria-hidden className="relative mx-auto aspect-square w-64 sm:w-80">
            <div className="beams absolute -inset-1/2" />
            <div className="disco absolute inset-0" />
          </div>

          <dl className="grid grid-cols-3 gap-3 lg:col-span-2">
            {[
              [`${apps.length}`, "apps publicados"],
              ["4", "anos de Flutter"],
              ["2", "lojas · iOS + Android"],
            ].map(([n, label]) => (
              <div key={label} className="glass p-4 sm:p-6">
                <dt className="sr-only">{label}</dt>
                <dd className="chrome font-display text-xl font-bold sm:text-4xl">{n}</dd>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500 sm:text-xs">{label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Section id="apps" act="Act II · Discografia" title={`${apps.length} apps publicados`}>
          <p className="-mt-4 mb-10 max-w-2xl text-zinc-400">
            Bibliotecas digitais em Flutter para UNA-SUS/UFMA, Ministério da Saúde e Ministério do Turismo, publicadas na App Store e no Google Play.
          </p>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((app, i) => (
              <li key={app.name} className="glass flex flex-col p-6 transition hover:-translate-y-1">
                <span className="font-mono text-xs text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug text-zinc-100">{app.name}</h3>
                {app.date && <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-zinc-500">Lançado {app.date}</p>}
                <div className="mt-auto flex gap-2 pt-5">
                  <a href={app.play} target="_blank" rel="noopener noreferrer" className={link}>Google Play</a>
                  {app.apple && <a href={app.apple} target="_blank" rel="noopener noreferrer" className={link}>App Store</a>}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="experiencia" act="Act III · Turnê" title="Trajetória">
          <ol className="space-y-6">
            {experience.map((job) => (
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
            {education.map((e) => (
              <li key={e.title} className="glass p-6">
                <span className="font-mono text-xs text-zinc-500">{e.year}</span>
                <p className="mt-1 font-display font-semibold">{e.title}</p>
                <p className="text-sm text-zinc-400">{e.place}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" act="Act IV · Setlist" title="Habilidades">
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
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

        <Section id="contato" act="Encore" title="Vamos conversar?">
          <a href={`mailto:${profile.email}`} className="holo break-all font-display text-xl font-semibold sm:text-3xl">
            {profile.email}
          </a>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-600">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
