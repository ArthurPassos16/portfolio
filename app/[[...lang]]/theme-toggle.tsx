"use client";

export function ThemeToggle({ labels }: { labels: { light: string; dark: string } }) {
  const toggle = () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.theme = next;
    } catch {}
  };
  // both icons render; CSS shows the one for the theme you'd switch to
  return (
    <button type="button" onClick={toggle} className="hover:text-white" aria-label={`${labels.light} / ${labels.dark}`}>
      <span className="theme-icon-light" title={labels.light}>☀</span>
      <span className="theme-icon-dark" title={labels.dark}>☾</span>
    </button>
  );
}
