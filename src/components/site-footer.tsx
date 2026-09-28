import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

const footerNav = [
  { label: "The Story", to: "/#story" },
  { label: "About the Book", to: "/about" },
  { label: "The Series", to: "/#series" },
  { label: "The Author", to: "/#author" },
  { label: "Get the Book", to: "/#get-the-book" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-night">
      <div className="mx-auto max-w-[1320px] px-5 pt-16 pb-7 sm:px-8 lg:px-14">
        <div className="grid gap-12 border-b border-border pb-14 md:grid-cols-[1fr_auto]">
          <div>
            <Link to="/" className="font-display text-4xl font-semibold">Master<span className="italic text-copper">sippi</span> <span className="text-primary">J2</span></Link>
            <p className="mt-3 text-xs uppercase tracking-[.22em] text-muted-foreground">Jessica · The Storm Collection</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[.18em] text-muted-foreground">
            {footerNav.map(item => <Link key={item.label} to={item.to} className="hover:text-primary">{item.label}</Link>)}
          </div>
        </div>
        <div className="grid gap-5 pt-7 text-[10px] uppercase tracking-[.18em] text-muted-foreground sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex items-center gap-3"><BookOpen size={21} className="text-primary" /><span className="font-bold text-foreground">Parker Publishers</span><span className="hidden sm:inline">· ISBN 978-1-963456-78-0</span></div>
          <span>© {new Date().getFullYear()} Parker Publishers. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
