import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import cover from "@/assets/jessica-front.jpg.asset.json";
import atmosphere from "@/assets/fire-landscape.jpg.asset.json";

const chapters = [
  "Leaving",
  "Day 1",
  "Day 2",
  "Day 3",
  "Day 4",
  "Day 5",
  "Day 6",
  "Day 7",
  "Leave or Stay",
  "The Talk with Mother and Her Siblings",
  "The Gentleman Waited in the Lobby Until Breakfast Was Served",
  "The Talk with Breakfast Man Dad",
  "Bank Transfer",
  "Jessica Has a Baby",
  "Earl Is Back",
  "Return Home for Three Days",
  "Day 1 at Home",
  "Day 2 Back Home",
  "Day 3 Back Home",
  "On the Way Back Home, Jessica Received Good News",
  "There Is a God",
  "Jessica Moves to an Island with Her Family",
  "The Uproar",
  "The Call from the Doctor",
  "The Baby",
  "Together Forever",
  "What Are You Going to Do?",
];

const themes = [
  { title: "Betrayal & Broken Trust", text: "When the people closest to you become the ones you can least believe." },
  { title: "Toxic Love", text: "A cycle that feels like home precisely because it hurts." },
  { title: "Family & Grief", text: "Siblings, mothers, secrets — and the ties that refuse to loosen." },
  { title: "Identity", text: "Who are you when everything you believed in burns away?" },
  { title: "The Mind at Night", text: "Sleepless nights, overthinking, and the search for peace." },
  { title: "The Leap of Faith", text: "Sometimes the bravest thing you can do is drive away and not look back." },
];

const facts = [
  { label: "Genre", value: "Dark Fiction / Emotional Drama" },
  { label: "Series", value: "The Storm Collection · Book One" },
  { label: "Publisher", value: "Parker Publishers" },
  { label: "ISBN", value: "978-1-963456-78-0" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Book | Mastersippi J2 – Jessica by Tempestt Lyles" },
      { name: "description", content: "Inside Mastersippi J2 – Jessica: the synopsis, themes, and all twenty-seven chapters of the first book in Tempestt Lyles's Storm Collection, published by Parker Publishers." },
      { property: "og:title", content: "About the Book | Mastersippi J2 – Jessica" },
      { property: "og:description", content: "Betrayal, broken trust, and one leap of faith. Explore the story, themes, and chapters of Mastersippi J2 – Jessica." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />

      <main id="top">
        <section className="relative isolate overflow-hidden bg-night pt-[72px]" aria-labelledby="about-heading">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${atmosphere.url})` }} aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-night/92 via-night/85 to-night" aria-hidden="true" />
          <div className="ember-field pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1560px] items-center gap-14 px-5 pt-16 pb-24 sm:px-8 lg:grid-cols-[1fr_auto] lg:gap-20 lg:px-14 lg:pt-24">
            <div className="max-w-[820px]">
              <div className="mb-7 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.28em] text-copper"><span className="h-px w-9 bg-primary" />About the book</div>
              <h1 id="about-heading" className="font-display text-[clamp(56px,7.5vw,118px)] leading-[.88] font-medium text-foreground">Master<span className="italic text-copper">sippi</span> <span className="text-primary">J2</span><span className="mt-1 block">Jessica<span className="text-primary">.</span></span></h1>
              <p className="mt-7 max-w-[560px] font-display text-[clamp(21px,2.3vw,30px)] italic leading-[1.2] text-foreground/90">The first book of The Storm Collection — a story of trust, ruin, and everything a person can rebuild.</p>
              <div className="mt-10 grid max-w-[640px] grid-cols-2 gap-px border border-primary/40 bg-primary/40 sm:grid-cols-4">
                {facts.map(fact => (
                  <div key={fact.label} className="bg-night/85 px-4 py-5">
                    <span className="block text-[9px] font-bold uppercase tracking-[.22em] text-copper">{fact.label}</span>
                    <span className="mt-2 block text-xs leading-5 text-foreground">{fact.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild className="h-13 rounded-none bg-primary px-7 text-[11px] font-bold uppercase tracking-[.18em] text-primary-foreground shadow-none hover:bg-copper"><a href="#synopsis">Read the synopsis <ArrowRight /></a></Button>
                <Button asChild variant="outline" className="h-13 rounded-none border-primary/65 bg-transparent px-7 text-[11px] font-bold uppercase tracking-[.18em] text-foreground shadow-none hover:bg-primary/10 hover:text-foreground"><a href="#get-the-book">Get the Book <ArrowUpRight /></a></Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[360px] pb-6 lg:max-w-[430px]">
              <div className="absolute inset-5 rounded-full bg-ember/25 blur-[90px]" aria-hidden="true" />
              <img src={cover.url} alt="Official cover artwork for Mastersippi J2 – Jessica, showing Jessica holding a glowing globe amid a burning city" className="relative w-full border border-copper/40 object-contain shadow-[0_40px_110px_-30px_var(--night)]" fetchPriority="high" />
              <span className="absolute -bottom-3 left-0 border-l border-primary pl-4 text-[10px] font-bold uppercase tracking-[.25em] text-copper">Book one of three</span>
            </div>
          </div>
        </section>

        <section id="synopsis" className="scroll-mt-20 border-t border-border bg-background py-24 md:py-32" aria-labelledby="synopsis-heading">
          <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.55fr_1fr] lg:gap-24 lg:px-14">
            <div>
              <SectionLabel number="01" label="The synopsis" />
              <p className="mt-8 text-[11px] font-bold uppercase tracking-[.22em] text-muted-foreground">Dark fiction / Emotional drama</p>
            </div>
            <div>
              <h2 id="synopsis-heading" className="max-w-[900px] font-display text-[clamp(40px,5.1vw,76px)] leading-[1.02] font-medium">Everything can feel good.<br /><em className="text-primary">And still be a lie.</em></h2>
              <div className="mt-10 max-w-[760px] space-y-7 border-l border-primary pl-7">
                <p className="text-sm leading-8 text-muted-foreground">To everyone watching, Jessica's life holds together. She shows up. She smiles. She keeps going. But the people she trusted most are the ones testing her hardest — and somewhere between the lies she was told and the ones she tells herself, the life she built starts slipping from her grasp.</p>
                <p className="text-sm leading-8 text-muted-foreground">The weight piles on in silence: sleepless nights that steal her rest, grief that never got its turn, family disagreements that cut deeper than strangers ever could, and a love that holds her and hurts her in the same breath. Stuck in a cycle she can barely name, Jessica starts to wonder if she even remembers who she is — or how to be loved.</p>
                <p className="text-sm leading-8 text-muted-foreground">So she does the one thing she has never dared to do: she leaves. Seven days away from everything familiar. A leap of faith to see where she will end up — and who she will be when she gets there.</p>
                <p className="text-sm leading-8 text-muted-foreground"><em className="text-foreground">Mastersippi J2 – Jessica</em> is the first movement of The Storm Collection: a dark, emotional journey through betrayal, broken trust, and the long climb back to yourself.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-border bg-secondary py-24 text-center md:py-32">
          <div className="ember-field pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1040px] px-5">
            <span className="font-display text-7xl leading-none text-primary/70" aria-hidden="true">“</span>
            <blockquote className="-mt-4 font-display text-[clamp(28px,3.8vw,54px)] leading-[1.14] italic text-foreground">Have you ever felt like your identity was gone? Have you ever been betrayed by the ones you love?</blockquote>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[.3em] text-copper">From the opening pages of the novel</p>
          </div>
        </section>

        <section id="themes" className="scroll-mt-20 bg-background py-24 md:py-32" aria-labelledby="themes-heading">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <SectionLabel number="02" label="What the storm is about" />
                <h2 id="themes-heading" className="mt-7 font-display text-[clamp(44px,5.4vw,80px)] leading-[.95]">Themes of <em className="text-primary">the storm</em></h2>
              </div>
              <p className="max-w-[300px] text-sm leading-7 text-muted-foreground">The currents that run underneath Jessica's story from the first page to the last.</p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {themes.map(theme => (
                <article key={theme.title} className="border border-border bg-card p-8 transition-colors hover:border-primary/50">
                  <h3 className="font-display text-3xl text-foreground">{theme.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{theme.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="chapters" className="scroll-mt-20 border-y border-border bg-secondary py-24 md:py-32" aria-labelledby="chapters-heading">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <SectionLabel number="03" label="Inside the pages" />
                <h2 id="chapters-heading" className="mt-7 font-display text-[clamp(44px,5.4vw,80px)] leading-[.95]">One storm, told in <em className="text-primary">twenty-seven chapters.</em></h2>
              </div>
              <p className="max-w-[300px] text-sm leading-7 text-muted-foreground">Chapter titles from the book's table of contents.</p>
            </div>
            <ol className="mt-14 grid gap-x-12 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
              {chapters.map((chapter, index) => (
                <li key={chapter} className="flex items-baseline gap-4 border-b border-border py-4">
                  <span className="min-w-8 font-display text-lg font-semibold text-primary/60">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-sm leading-6 text-foreground/85">{chapter}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="get-the-book" className="scroll-mt-20 relative isolate overflow-hidden bg-night" aria-labelledby="cta-heading">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${atmosphere.url})` }} aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-night via-night/80 to-night" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" aria-hidden="true" />
          <div className="ember-field pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-[900px] px-5 py-24 text-center sm:px-8 md:py-32 lg:px-14">
            <SectionLabel number="04" label="Begin the journey" />
            <h2 id="cta-heading" className="mt-7 font-display text-[clamp(52px,7vw,108px)] leading-[.9] font-medium">Own the <em className="text-primary">storm.</em></h2>
            <p className="mx-auto mt-6 max-w-[540px] font-display text-[clamp(20px,2.2vw,28px)] italic leading-[1.2] text-foreground/90">The story everyone will be talking about begins here.</p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="h-16 justify-between gap-4 rounded-none bg-primary px-8 text-[12px] font-bold uppercase tracking-[.18em] text-primary-foreground shadow-[0_0_44px_-10px_var(--ember)] hover:bg-copper hover:shadow-[0_0_64px_-8px_var(--ember)]"><a href="https://www.amazon.com/s?k=9781963456780" target="_blank" rel="noopener noreferrer">Buy on Amazon <ArrowUpRight /></a></Button>
              <Button asChild variant="outline" className="h-16 justify-between gap-4 rounded-none border-primary/60 bg-night/50 px-8 text-[12px] font-bold uppercase tracking-[.18em] text-foreground shadow-none backdrop-blur-sm hover:bg-primary/10 hover:text-foreground"><a href="https://www.barnesandnoble.com/s/9781963456780" target="_blank" rel="noopener noreferrer">Barnes & Noble <ArrowUpRight /></a></Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Retailer search results and availability may vary.</p>
            <div className="mx-auto mt-9 flex max-w-[560px] flex-wrap justify-center gap-x-10 gap-y-3 border-t border-primary/40 pt-5 text-[10px] font-bold uppercase tracking-[.16em] text-muted-foreground"><span>ISBN <span className="text-foreground">978-1-963456-78-0</span></span><span>Publisher <span className="text-foreground">Parker Publishers</span></span></div>
            <a href="/#series" className="mt-12 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-primary hover:text-copper">Explore the rest of the collection <ArrowRight size={16} /></a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
