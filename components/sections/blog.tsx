"use client";

import { useMemo, useState } from "react";
import { Search, Calendar, Clock, User, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/reveal";

type Post = {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  excerpt: string;
};

// Demo articles — illustrative posts used to showcase this section's layout.
// Replace with real, published articles before launch.
const POSTS: Post[] = [
  {
    id: "b1",
    title: "Where Generative AI Actually Pays Off in the Enterprise",
    category: "Artificial Intelligence",
    author: "Maneswar Abishek",
    date: "Jul 2026",
    readingTime: "6 min read",
    excerpt:
      "Not every workflow needs an LLM. Here's a practical framework for spotting the use cases worth building first.",
  },
  {
    id: "b2",
    title: "What Manufacturing Clients Actually Ask For",
    category: "Manufacturing",
    author: "Priya Raman",
    date: "Jun 2026",
    readingTime: "5 min read",
    excerpt:
      "Notes from the field on the real priorities behind digital transformation requests on the shop floor.",
  },
  {
    id: "b3",
    title: "Choosing the Right ERP Scope for a Growing Business",
    category: "ERP",
    author: "David Chen",
    date: "Jun 2026",
    readingTime: "7 min read",
    excerpt:
      "A phased approach to ERP rollout that avoids the 18-month big-bang implementation trap.",
  },
  {
    id: "b4",
    title: "Why Most Automation Projects Stall Before Launch",
    category: "Automation",
    author: "Meera Iyer",
    date: "May 2026",
    readingTime: "4 min read",
    excerpt:
      "The gap between a working demo and a production workflow is usually process, not code.",
  },
  {
    id: "b5",
    title: "A Practical Guide to Cloud Cost Control",
    category: "Cloud",
    author: "Rajesh Menon",
    date: "May 2026",
    readingTime: "6 min read",
    excerpt:
      "Simple architectural choices that keep your cloud bill predictable as usage scales.",
  },
  {
    id: "b6",
    title: "Turning Operational Data Into Growth Decisions",
    category: "Business Growth",
    author: "Ananya Suresh",
    date: "Apr 2026",
    readingTime: "5 min read",
    excerpt:
      "How a lightweight BI layer helped one client spot a revenue leak their spreadsheets had missed for months.",
  },
  {
    id: "b7",
    title: "Using AI to Shorten Time-to-Hire Without Losing Quality",
    category: "Recruitment",
    author: "Arun Kumar",
    date: "Mar 2026",
    readingTime: "5 min read",
    excerpt:
      "A look at how AI-assisted screening changes the recruiter's job rather than replacing it.",
  },
  {
    id: "b8",
    title: "A Founder's Guide to Vetting a Development Partner",
    category: "Software Development",
    author: "Maneswar Abishek",
    date: "Mar 2026",
    readingTime: "8 min read",
    excerpt:
      "Questions worth asking before you sign a statement of work with any development agency.",
  },
];

const CATEGORIES = [
  "All",
  "Artificial Intelligence",
  "Manufacturing",
  "ERP",
  "Automation",
  "Cloud",
  "Business Growth",
  "Recruitment",
  "Software Development",
];

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="blog" className="relative bg-ink py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Insights</p>
          <h2 className="section-heading mt-4 text-paper">
            Latest{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              News &amp; Blog
            </span>
          </h2>
          <div className="divider-gold mx-auto mt-6" />
          <p className="mt-4 text-xs uppercase tracking-widest text-paper-muted/60">
            Demo articles — illustrative content, not yet published
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                  category === cat
                    ? "border-gold bg-gold text-ink"
                    : "border-paper/15 text-paper-muted hover:border-gold/50 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-paper-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="w-full rounded-full border border-paper/15 bg-paper/[0.03] py-2.5 pl-10 pr-4 text-sm text-paper placeholder:text-paper-muted/60 focus:border-gold/50 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((post, i) => (
            <Reveal key={post.id} delay={(i % 4) * 0.08}>
              <article className="glass-card glass-card-hover group flex h-full flex-col overflow-hidden">
                <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-ink-raised to-ink-soft">
                  <span className="font-display text-lg text-gold/25">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-widest text-paper-muted">
                    <span className="text-gold">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base leading-snug text-paper">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-paper-muted">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 flex items-center gap-1.5 text-[11px] text-paper-muted/70">
                    <User className="h-3 w-3" />
                    {post.author}
                  </p>
                  <button className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}

          {filtered.length === 0 && (
            <p className="col-span-full py-12 text-center text-sm text-paper-muted">
              No articles match your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
