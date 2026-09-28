import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, Menu, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import cover from "@/assets/jessica-front.jpg.asset.json";
import portrait from "@/assets/tempestt-portrait.jpg.asset.json";
import atmosphere from "@/assets/fire-landscape.jpg.asset.json";

const navigation = [
  { label: "The Story", href: "#story" },
  { label: "The Series", href: "#series" },
  { label: "The Author", href: "#author" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mastersippi J2 – Jessica | The Storm Collection by Tempestt Lyles" },
      { name: "description", content: "Enter the world of Mastersippi J2 – Jessica, the first story in Tempestt Lyles's dark, emotional three-book Storm Collection. Published by Parker Publishers." },
      { property: "og:title", content: "Mastersippi J2 – Jessica | The Storm Collection" },
      { property: "og:description", content: "Betrayal. Survival. Rebirth. Discover Jessica's journey in Tempestt Lyles's The Storm Collection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [newsletterState, setNewsletterState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setNewsletterState("loading");
    const { error } = await supabase.from("newsletter_subscribers").insert({ email: email.trim().toLowerCase(), source: "homepage" });
    if (error) {
      if (error.code === "23505") {
        setNewsletterState("success");
        setNewsletterMessage("You're already on the list. We'll keep you posted.");
      } else {
        setNewsletterState("error");
        setNewsletterMessage("We couldn't sign you up right now. Please try again.");
      }
      return;
    }
    setNewsletterState("success");
    setNewsletterMessage("You're on the list. The storm is only beginning.");
    setEmail("");
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-night/90 backdrop-blur-xl">
        <div className="mx-auto grid h-[72px] max-w-[1560px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 sm:px-8 lg:px-14">
          <a href="#top" className="min-w-0 font-display text-[25px] leading-none font-semibold text-foreground sm:text-[29px]" aria-label="Mastersippi J2, back to top">Master<span className="text-copper italic">sippi</span> <span className="text-primary">J2</span><span className="ml-2 hidden align-middle font-body text-[9px] font-medium uppercase tracking-[.24em] text-muted-foreground xl:inline">The Storm Collection</span></a>
          <div className="hidden items-center gap-10 lg:flex">
            <nav className="flex items-center gap-9" aria-label="Main navigation">{navigation.map(item => <a key={item.href} href={item.href} className="text-[11px] font-semibold uppercase tracking-[.18em] text-muted-foreground transition-colors hover:text-primary">{item.label}</a>)}</nav>
            <Button asChild className="h-10 rounded-none border border-primary bg-transparent px-6 text-[10px] font-bold uppercase tracking-[.19em] text-primary shadow-none hover:bg-primary hover:text-primary-foreground"><a href="#get-the-book">Get the Book <ArrowUpRight /></a></Button>
          </div>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none text-foreground lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-night px-5 py-5 lg:hidden" aria-label="Mobile navigation">{[...navigation, { label: "Get the Book", href: "#get-the-book" }].map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-border py-4 font-display text-2xl text-foreground">{item.label}</a>)}</nav>}
      </header>

      <main id="top">
        <section className="relative isolate min-h-[760px] overflow-hidden bg-night pt-[72px] lg:min-h-[800px]" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${atmosphere.url})` }} aria-hidden="true" />
          <div className="hero-veiling absolute inset-0" aria-hidden="true" />
          <div className="ember-field pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="hero-bottom pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32" aria-hidden="true" />
          <div className="relative mx-auto grid min-h-[688px] max-w-[1560px] grid-cols-1 items-center gap-4 px-5 sm:px-8 lg:min-h-[728px] lg:grid-cols-[minmax(0,1fr)_minmax(390px,.8fr)] lg:gap-12 lg:px-14">
            <div className="relative z-20 max-w-[740px] pt-16 pb-4 lg:py-20">
              <div className="mb-7 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.28em] text-copper"><span className="h-px w-9 bg-primary" />A novel by Tempestt Lyles</div>
              <h1 id="hero-heading" className="font-display text-[clamp(68px,8vw,132px)] leading-[.81] font-medium text-foreground">Master<span className="italic text-copper">sippi</span><span className="mt-1 block text-primary">J2</span><span className="mt-1 block text-[clamp(75px,9vw,148px)] font-semibold tracking-normal">Jessica<span className="text-primary">.</span></span></h1>
              <div className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.23em] text-primary"><span className="h-px w-8 bg-primary" />The Storm Collection · Book One</div>
              <p className="mt-5 max-w-[510px] font-display text-[clamp(25px,2.6vw,38px)] leading-[1.1] italic text-foreground">When everything she knows falls apart, who will Jessica become?</p>
              <p className="mt-5 max-w-[450px] text-sm leading-7 text-muted-foreground">A journey through betrayal, broken trust, and the courage it takes to rebuild yourself.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild className="h-13 rounded-none bg-primary px-7 text-[11px] font-bold uppercase tracking-[.18em] text-primary-foreground shadow-none hover:bg-copper"><a href="#series">Read the Series <ArrowRight /></a></Button>
                <Button asChild variant="outline" className="h-13 rounded-none border-primary/65 bg-transparent px-7 text-[11px] font-bold uppercase tracking-[.18em] text-foreground shadow-none hover:bg-primary/10 hover:text-foreground"><a href="#get-the-book">Get the Book <ArrowUpRight /></a></Button>
              </div>
            </div>
            <div className="relative z-10 mx-auto flex w-full max-w-[430px] items-center justify-center pb-24 lg:ml-auto lg:max-w-[560px] lg:pb-16">
              <div className="absolute inset-[12%] rounded-full bg-ember/15 blur-[85px]" aria-hidden="true" />
              <img src={cover.url} alt="Official cover artwork for Mastersippi J2 – Jessica, showing Jessica holding a glowing globe amid a burning city" className="relative max-h-[610px] w-auto max-w-full border border-copper/25 object-contain shadow-[0_30px_90px_-30px_var(--night)] lg:max-h-[640px]" fetchPriority="high" />
              <span className="absolute -bottom-2 left-0 hidden border-l border-primary pl-4 text-[10px] font-bold uppercase tracking-[.25em] text-copper lg:block">The story begins here</span>
            </div>
          </div>
          <a href="#story" className="absolute bottom-7 left-5 z-20 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[.23em] text-muted-foreground transition-colors hover:text-primary sm:left-8 lg:flex lg:left-14">Scroll to explore <ArrowDown size={15} /></a>
        </section>

        <section id="story" className="scroll-mt-20 border-t border-border bg-background py-24 md:py-32">
          <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.55fr_1fr] lg:gap-24 lg:px-14">
            <div><SectionLabel number="01" label="Inside the story" /><p className="mt-8 text-[11px] font-bold uppercase tracking-[.22em] text-muted-foreground">Dark fiction / Emotional drama</p></div>
            <div><h2 className="max-w-[900px] font-display text-[clamp(40px,5.1vw,76px)] leading-[1.02] font-medium">Some storms don’t pass.<br /><em className="text-primary">They change you.</em></h2><div className="mt-10 grid gap-8 border-l border-primary pl-7 md:grid-cols-2 md:gap-12"><p className="text-sm leading-8 text-muted-foreground">Jessica thought she knew the people closest to her. But when trust begins to fracture, the life she’s built starts slipping from her grasp. Feeling trapped and set up, she must navigate a world of secrets, shifting loyalties, and painful revelations.</p><p className="text-sm leading-8 text-muted-foreground">At the heart of the storm is a question only Jessica can answer: how do you find your way back when everything you believed in has burned away?</p></div><a href="#series" className="mt-9 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-primary hover:text-copper">Explore the collection <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-border bg-secondary py-24 text-center md:py-32"><div className="ember-field pointer-events-none absolute inset-0" aria-hidden="true" /><div className="relative mx-auto max-w-[1040px] px-5"><span className="font-display text-7xl leading-none text-primary/70" aria-hidden="true">“</span><blockquote className="-mt-4 font-display text-[clamp(32px,4.3vw,60px)] leading-[1.12] italic text-foreground">Her trust is shattered, and she fights to rebuild it and find healing.</blockquote><p className="mt-7 text-[10px] font-bold uppercase tracking-[.3em] text-copper">From Tempestt Lyles’s note on the book jacket</p></div></section>

        <section id="series" className="scroll-mt-20 py-24 md:py-32"><div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14"><div className="flex flex-wrap items-end justify-between gap-8"><div><SectionLabel number="02" label="The collection" /><h2 className="mt-7 font-display text-[clamp(50px,6vw,88px)] leading-[.95]">The Storm <em className="text-primary">Collection</em></h2></div><p className="max-w-[300px] text-sm leading-7 text-muted-foreground">Three books. One transformative journey. It begins with Jessica.</p></div><div className="mt-14 grid gap-4 md:grid-cols-3"><article className="group relative min-h-[430px] overflow-hidden border border-primary/60 bg-card"><img src={cover.url} alt="Mastersippi J2 – Jessica book cover" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top opacity-50 transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-transparent" /><div className="relative flex h-full min-h-[430px] flex-col justify-end p-8"><span className="text-[10px] font-bold uppercase tracking-[.25em] text-copper">01 / The beginning</span><h3 className="mt-3 font-display text-5xl">Jessica</h3><p className="mt-3 max-w-[250px] text-sm leading-6 text-foreground/75">A life unravels. A new self begins to emerge.</p><a href="#get-the-book" className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-primary">Get the book <ArrowRight size={15} /></a></div></article>{[2,3].map(number => <article key={number} className="flex min-h-[430px] flex-col justify-between border border-border bg-card p-8"><span className="text-[10px] font-bold uppercase tracking-[.25em] text-muted-foreground">0{number} / The journey continues</span><div><div className="mb-10 h-px w-full bg-border" /><span className="font-display text-[82px] leading-none text-primary/30">0{number}</span><h3 className="mt-3 font-display text-4xl italic text-foreground">The storm continues</h3><p className="mt-4 text-sm text-muted-foreground">The next chapter is coming soon.</p></div></article>)}</div></div></section>

        <section id="author" className="scroll-mt-20 border-y border-border bg-secondary"><div className="mx-auto grid max-w-[1320px] lg:grid-cols-[.75fr_1fr]"><div className="relative min-h-[420px] overflow-hidden bg-night lg:min-h-[630px]"><img src={portrait.url} alt="Black-and-white portrait of author Tempestt Lyles, from the original book jacket" loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale contrast-125" /><div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" /><span className="absolute bottom-7 left-8 font-display text-2xl italic text-foreground">The voice behind the storm.</span></div><div className="flex flex-col justify-center px-5 py-20 sm:px-12 lg:px-20"><SectionLabel number="03" label="Meet the author" /><h2 className="mt-7 font-display text-[clamp(52px,6vw,84px)] leading-[.95]">Tempestt <em className="text-primary">Lyles</em></h2><p className="mt-8 max-w-[530px] text-sm leading-8 text-muted-foreground">Tempestt Lyles is the author of the three-book series <em className="text-foreground">The Book of Jessica</em>, part of The Storm Collection. Her writing follows Jessica through the challenges that test her trust, her relationships, and her strength.</p><div className="mt-9 border-l border-primary pl-6"><p className="font-display text-[27px] leading-[1.25] italic text-foreground">“I hope you enjoy this series and don’t miss out on the rest of Tempestt Lyles’s ‘The Storm Collection.’”</p><span className="mt-5 block text-[10px] font-bold uppercase tracking-[.22em] text-copper">A note from Tempestt · Book jacket</span></div></div></div></section>

        <section id="get-the-book" className="scroll-mt-20 relative isolate overflow-hidden border-y border-border bg-night">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${atmosphere.url})` }} aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-night via-night/80 to-night" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" aria-hidden="true" />
          <div className="ember-field pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1560px] items-center gap-14 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-[1fr_auto] lg:gap-20 lg:px-14">
            <div className="max-w-[780px]">
              <SectionLabel number="04" label="Begin the journey" />
              <h2 className="mt-7 font-display text-[clamp(56px,7.5vw,118px)] leading-[.9] font-medium">Own the <em className="text-primary">storm.</em></h2>
              <p className="mt-6 max-w-[540px] font-display text-[clamp(20px,2.2vw,28px)] italic leading-[1.2] text-foreground/90">Mastersippi J2 – Jessica. The first book of The Storm Collection, published by Parker Publishers.</p>
              <p className="mt-4 max-w-[470px] text-sm leading-7 text-muted-foreground">Search by title or ISBN at your preferred bookseller and step into Jessica's story.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild className="h-16 justify-between gap-4 rounded-none bg-primary px-8 text-[12px] font-bold uppercase tracking-[.18em] text-primary-foreground shadow-[0_0_44px_-10px_var(--ember)] hover:bg-copper hover:shadow-[0_0_64px_-8px_var(--ember)]"><a href="https://www.amazon.com/s?k=9781963456780" target="_blank" rel="noopener noreferrer">Buy on Amazon <ArrowUpRight /></a></Button>
                <Button asChild variant="outline" className="h-16 justify-between gap-4 rounded-none border-primary/60 bg-night/50 px-8 text-[12px] font-bold uppercase tracking-[.18em] text-foreground shadow-none backdrop-blur-sm hover:bg-primary/10 hover:text-foreground"><a href="https://www.barnesandnoble.com/s/9781963456780" target="_blank" rel="noopener noreferrer">Barnes & Noble <ArrowUpRight /></a></Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Retailer search results and availability may vary.</p>
              <div className="mt-9 flex flex-wrap gap-x-10 gap-y-3 border-t border-primary/40 pt-5 text-[10px] font-bold uppercase tracking-[.16em] text-muted-foreground"><span>ISBN <span className="text-foreground">978-1-963456-78-0</span></span><span>Publisher <span className="text-foreground">Parker Publishers</span></span></div>
            </div>
            <div className="relative mx-auto w-full max-w-[330px] lg:mx-0 lg:max-w-[400px]">
              <div className="absolute inset-6 rounded-full bg-ember/25 blur-[90px]" aria-hidden="true" />
              <img src={cover.url} alt="Mastersippi J2 – Jessica official book cover" loading="lazy" className="relative w-full border border-copper/40 object-contain shadow-[0_40px_110px_-30px_var(--night)]" />
              <span className="absolute -bottom-3 left-0 border-l border-primary pl-4 text-[10px] font-bold uppercase tracking-[.25em] text-copper">Get your copy</span>
            </div>
          </div>
        </section>

        <section id="newsletter" className="border-t border-border bg-card py-20 md:py-24"><div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_.8fr] lg:items-end lg:gap-20 lg:px-14"><div><SectionLabel number="05" label="Stay close to the story" /><h2 className="mt-6 font-display text-[clamp(42px,5vw,68px)] leading-none">The story doesn’t <em className="text-primary">end here.</em></h2><p className="mt-5 max-w-[500px] text-sm leading-7 text-muted-foreground">Be the first to hear about the next chapter of The Storm Collection.</p></div><form onSubmit={subscribe} className="w-full"><label htmlFor="email" className="mb-3 block text-[10px] font-bold uppercase tracking-[.22em] text-copper">Your email address</label><div className="flex border-b border-primary"><input id="email" type="email" autoComplete="email" required value={email} onChange={event => setEmail(event.target.value)} placeholder="you@example.com" className="min-w-0 flex-1 bg-transparent py-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-0" /><Button type="submit" disabled={newsletterState === "loading"} aria-label="Join the newsletter" className="h-13 w-13 rounded-none bg-primary text-primary-foreground hover:bg-copper">{newsletterState === "success" ? <Check /> : <ArrowRight />}</Button></div><p className="mt-3 min-h-5 text-xs text-muted-foreground" role="status" aria-live="polite">{newsletterMessage || "Occasional updates from The Storm Collection."}</p></form></div></section>
      </main>

      <footer className="border-t border-border bg-night"><div className="mx-auto max-w-[1320px] px-5 pt-16 pb-7 sm:px-8 lg:px-14"><div className="grid gap-12 border-b border-border pb-14 md:grid-cols-[1fr_auto]"><div><div className="font-display text-4xl font-semibold">Master<span className="italic text-copper">sippi</span> <span className="text-primary">J2</span></div><p className="mt-3 text-xs uppercase tracking-[.22em] text-muted-foreground">Jessica · The Storm Collection</p></div><div className="flex flex-wrap gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[.18em] text-muted-foreground">{navigation.map(item => <a key={item.href} href={item.href} className="hover:text-primary">{item.label}</a>)}<a href="#get-the-book" className="hover:text-primary">Get the Book</a></div></div><div className="grid gap-5 pt-7 text-[10px] uppercase tracking-[.18em] text-muted-foreground sm:grid-cols-[1fr_auto] sm:items-center"><div className="flex items-center gap-3"><BookOpen size={21} className="text-primary" /><span className="font-bold text-foreground">Parker Publishers</span><span className="hidden sm:inline">· ISBN 978-1-963456-78-0</span></div><span>© {new Date().getFullYear()} Parker Publishers. All rights reserved.</span></div></div></footer>
    </div>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.25em] text-copper"><span className="font-display text-xl font-semibold tracking-normal text-primary">{number}</span><span className="h-px w-7 bg-primary" />{label}</div>;
}