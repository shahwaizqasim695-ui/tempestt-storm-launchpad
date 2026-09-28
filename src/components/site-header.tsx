import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

type NavItem = { label: string; hash?: string; to?: string };

const sections: NavItem[] = [
  { label: "The Story", hash: "story" },
  { label: "About the Book", to: "/about" },
  { label: "The Series", hash: "series" },
  { label: "The Author", hash: "author" },
];

const wordmark = (
  <>
    Master<span className="italic text-copper">sippi</span> <span className="text-primary">J2</span>
    <span className="ml-2 hidden align-middle font-body text-[9px] font-medium uppercase tracking-[.24em] text-muted-foreground xl:inline">The Storm Collection</span>
  </>
);

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const sectionHref = (hash: string) => (onHome ? `#${hash}` : `/#${hash}`);

  function NavAnchor({ item, className }: { item: NavItem; className: string }) {
    if (item.hash) {
      const href = sectionHref(item.hash);
      return isAnchor(href) ? <a href={href} className={className}>{item.label}</a> : <Link to={href} className={className}>{item.label}</Link>;
    }
    return item.to === pathname ? <a href="#top" className={className}>{item.label}</a> : <Link to={item.to!} className={className}>{item.label}</Link>;
  }

  function isAnchor(href: string) {
    return href.startsWith("#");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-night/90 backdrop-blur-xl">
      <div className="mx-auto grid h-[72px] max-w-[1560px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 sm:px-8 lg:px-14">
        {onHome ? (
          <a href="#top" className="min-w-0 font-display text-[25px] leading-none font-semibold text-foreground sm:text-[29px]" aria-label="Mastersippi J2, back to top">{wordmark}</a>
        ) : (
          <Link to="/" className="min-w-0 font-display text-[25px] leading-none font-semibold text-foreground sm:text-[29px]" aria-label="Mastersippi J2, back to homepage">{wordmark}</Link>
        )}
        <div className="hidden items-center gap-10 lg:flex">
          <nav className="flex items-center gap-9" aria-label="Main navigation">
            {sections.map(item => <NavAnchor key={item.label} item={item} className="text-[11px] font-semibold uppercase tracking-[.18em] text-muted-foreground transition-colors hover:text-primary" />)}
          </nav>
          <Button asChild className="h-10 rounded-none border border-primary bg-transparent px-6 text-[10px] font-bold uppercase tracking-[.19em] text-primary shadow-none hover:bg-primary hover:text-primary-foreground">
            <a href={sectionHref("get-the-book")}>Get the Book <ArrowUpRight /></a>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none text-foreground lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && (
        <nav className="border-t border-border bg-night px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          {[...sections, { label: "Get the Book", hash: "get-the-book" }].map(item => (
            <NavAnchor key={item.label} item={item as NavItem} className="block border-b border-border py-4 font-display text-2xl text-foreground" />
          ))}
        </nav>
      )}
    </header>
  );
}

export function Wordmark(): ReactNode {
  return wordmark;
}
