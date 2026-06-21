import { useRef, useState } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import About from "../components/About";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import Cursor from "../components/Cursor";
import ProjectGallery from "../components/ProjectGallery";
import ProjectFilter from "../components/ProjectFilter";
import BehanceBanner from "../components/BehanceBanner";
import data from "../data/portfolio-updated.json";

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "React and Next.js sites that load fast and hold up on mobile; translating designs into fast, responsive web experiences.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "Transforming wireframes in Figma to interfaces that turn visitors into customers.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    number: "03",
    title: "Digital Marketing",
    description: "Social calendars, email sequences, and campaign strategy for businesses in need of strategy and results.",
    tags: ["Social Media", "Branding", "Strategy"],
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const workRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const contactRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  const scrollTo = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop - 20, behavior: "smooth" });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative bg-graphite-black min-h-screen ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="max-w-5xl mx-auto px-5 lg:px-0">
        <Header
          handleWorkScroll={() => scrollTo(workRef)}
          handleAboutScroll={() => scrollTo(aboutRef)}
          handleServicesScroll={() => scrollTo(servicesRef)}
          handleContactScroll={() => scrollTo(contactRef)}
        />

        {/* ── Hero ──────────────────────────────────────────────── */}
<section className="pt-10 pb-16 lg:pt-12 lg:pb-16 border-b border-white/10">
  <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-16">

    {/* Left — headline + CTAs */}
    <div className="lg:w-1/2">
      <span className="block text-xs font-semibold tracking-widest uppercase text-olive-tint mb-4">
        Open to freelance work & full-time roles
      </span>
      <h1
        ref={textOne}
        className="text-5xl lg:text-6xl font-serif text-cream leading-tight mb-1"
      >
        {data.headerTaglineOne}
      </h1>
      <h1
        ref={textTwo}
        className="text-4xl lg:text-5xl font-serif text-cream/80 leading-tight"
      >
        {data.headerTaglineTwo}
      </h1>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          onClick={() => scrollTo(workRef)}
          className="bg-cream text-graphite-black px-6 py-3 rounded-xl text-sm font-semibold hover:bg-cream-accent transition-colors duration-200"
        >
          View Work
        </button>
        <button
          onClick={() => scrollTo(contactRef)}
          className="border border-white/20 text-cream/70 px-6 py-3 rounded-xl text-sm font-semibold hover:border-white/40 hover:text-cream transition-all duration-200"
        >
          Get in Touch
        </button>
      </div>
    </div>

    {/* Right — description card + socials */}
    <div className="lg:w-1/2 lg:pb-2">
      <div className="p-6 rounded-2xl bg-graphite-mid border border-white/10 flex flex-col gap-5">
        {data.headerTaglineThree && (
          <p
            ref={textThree}
            className="text-lg font-sans font-light text-cream/70 leading-relaxed"
          >
            {data.headerTaglineThree}
          </p>
        )}
        {data.headerTaglineFour && (
          <p
            ref={textFour}
            className="text-sm text-cream/40 leading-relaxed pb-"
          >
            {data.headerTaglineFour}
          </p>
        )}
        <div className="pt-2 border-t border-white/10">
          <Socials />
        </div>
      </div>
    </div>

  </div>
</section>
        

        {/* ── About ─────────────────────────────────────────────── */}
        <div ref={aboutRef}>
          <About aboutContent={data.aboutContent} />
        </div>

        {/* ── Services ──────────────────────────────────────────── */}
        <section ref={servicesRef} className="py-14 lg:pb-16 pt-12 border-t border-white/10">
          <span className="block text-xs font-semibold tracking-widest uppercase text-olive-tint mb-3">
            Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-cream mb-8">
            What I do.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <div
                key={s.number}
                className="group p-5 lg:p-6 rounded-2xl bg-graphite-mid border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span className="block text-xs font-semibold tracking-widest text-olive-tint mb-4">
                  {s.number}
                </span>
                <h3 className="text-lg font-serif text-cream mb-2">{s.title}</h3>
                <p className="text-sm text-cream/55 leading-relaxed mb-4">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-2xs font-medium bg-white/8 text-cream/50 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Work ──────────────────────────────────────────────── */}
        <section ref={workRef} className="py-14 lg:pb-16 pt-12 border-t border-white/10">
          <span className="block text-xs font-semibold tracking-widest uppercase text-olive-tint mb-3">
            Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-cream mb-8">
            Web Development
          </h2>

          {/* Sidebar layout: filters left, grid right */}
          <div className="flex gap-0">
            {/* Filter sidebar */}
            <div className="hidden md:flex flex-col w-40 shrink-0 pr-6 border-r border-white/10">
              <ProjectFilter
                categories={data.projectCategories}
                activeCategory={activeCategory}
                onFilterChange={setActiveCategory}
              />
            </div>

            {/* Mobile: horizontal pills */}
            <div className="flex md:hidden flex-wrap gap-2 mb-6 w-full">
              {data.projectCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-auto px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-cream text-graphite-black"
                      : "bg-white/8 text-cream/60 border border-white/10 hover:text-cream"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Project grid */}
            <div className="flex-1 min-w-0 md:pl-8">
              <ProjectGallery
                projects={data.projects}
                activeCategory={activeCategory}
              />
            </div>
          </div>
        </section>

        {/* ── Behance ───────────────────────────────────────────── */}
        <BehanceBanner behanceUrl={data.behanceUrl} />

        {/* Dev-only edit button */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5 z-50">
            <Link href="/edit">
              <a className="bg-cream text-graphite-black px-4 py-2 rounded-xl text-sm font-semibold">
                Edit Data
              </a>
            </Link>
          </div>
        )}

        <Footer contactRef={contactRef} />
      </div>
    </div>
  );
}
