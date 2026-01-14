"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const heroImage =
  "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1600";

const serviceTabs = [
  {
    label: "Mold Design",
    title: "Precision mold design and validation",
    description:
      "From DFM reviews to flow simulation, our engineering team ensures every mold is optimized for repeatable cycles and clean parting lines.",
    bullets: [
      "DFM + mold flow analysis",
      "Tool steel selection support",
      "High-cavitation expertise",
      "Lifecycle maintenance planning"
    ],
    image:
      "https://images.pexels.com/photos/4483774/pexels-photo-4483774.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    label: "Production",
    title: "High-output injection moulding",
    description:
      "Our press lines deliver fast cycle times with in-line inspection, robotics, and automated de-gating for dependable volume output.",
    bullets: [
      "30-800 ton press range",
      "Robotic part handling",
      "Real-time SPC monitoring",
      "24/7 production staffing"
    ],
    image:
      "https://images.pexels.com/photos/4483772/pexels-photo-4483772.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    label: "Finishing",
    title: "Assembly, finishing, and kitting",
    description:
      "Secondary operations, ultrasonic welding, and custom kitting help you ship finished goods faster with a single production partner.",
    bullets: [
      "Pad printing + laser marking",
      "Ultrasonic & heat staking",
      "In-line assembly cells",
      "Custom packaging + labeling"
    ],
    image:
      "https://images.pexels.com/photos/4483863/pexels-photo-4483863.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    label: "Quality",
    title: "Quality systems built into every shift",
    description:
      "Certified operators, calibrated inspection tooling, and traceability keep your programs in compliance and audit-ready.",
    bullets: [
      "ISO-aligned documentation",
      "Incoming resin validation",
      "First-article inspections",
      "Full lot traceability"
    ],
    image:
      "https://images.pexels.com/photos/924676/pexels-photo-924676.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

const highlightCards = [
  {
    title: "MecaMold — Exceptional Injection Moulding",
    description:
      "We deliver precision parts for automotive interiors, medical housings, and industrial enclosures with engineered repeatability.",
    image:
      "https://images.pexels.com/photos/4481425/pexels-photo-4481425.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "MecaMold — End-to-end Manufacturing",
    description:
      "From tooling to assembly, we manage the complete lifecycle with transparent reporting and fast response times.",
    image:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

const teamMembers = [
  {
    name: "Arjun Patel",
    role: "Plant Director",
    image:
      "https://images.pexels.com/photos/3775164/pexels-photo-3775164.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Neha Rao",
    role: "Quality Lead",
    image:
      "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Marcus Lee",
    role: "Tooling Manager",
    image:
      "https://images.pexels.com/photos/3772616/pexels-photo-3772616.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Elena Kim",
    role: "Program Manager",
    image:
      "https://images.pexels.com/photos/3765165/pexels-photo-3765165.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const testimonials = [
  {
    quote:
      "MecaMold shortened our launch timeline by six weeks and maintained exceptional dimensional stability across every batch.",
    name: "Operations Manager",
    company: "Tier 1 Automotive"
  },
  {
    quote:
      "Their team takes ownership of tooling and validation so we can focus on scaling our device assembly.",
    name: "VP Manufacturing",
    company: "Medical Devices"
  },
  {
    quote:
      "We rely on MecaMold for strict traceability and transparent quality reporting on every program.",
    name: "Supply Chain Lead",
    company: "Industrial Systems"
  }
];

const newsItems = [
  {
    title: "New electric presses boost energy efficiency",
    date: "Aug 14, 2024",
    image:
      "https://images.pexels.com/photos/4481167/pexels-photo-4481167.jpeg?auto=compress&cs=tinysrgb&w=1000"
  },
  {
    title: "How we validate molds for medical-grade parts",
    date: "Jul 29, 2024",
    image:
      "https://images.pexels.com/photos/4481274/pexels-photo-4481274.jpeg?auto=compress&cs=tinysrgb&w=1000"
  },
  {
    title: "Inside our 24/7 quality control lab",
    date: "Jul 10, 2024",
    image:
      "https://images.pexels.com/photos/4476376/pexels-photo-4476376.jpeg?auto=compress&cs=tinysrgb&w=1000"
  }
];

export default function HomePage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="bg-ui-bg text-ui-text">
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0">
          <Image src={heroImage} alt="Injection moulding operator" fill className="object-cover" />
          <div className="absolute inset-0 bg-brand-navy/70" />
          <div
            className="absolute left-0 top-0 hidden h-full w-[55%] bg-brand-navy/90 lg:block"
            style={{ clipPath: "polygon(0 0, 86% 0, 70% 100%, 0% 100%)" }}
          />
        </div>
        <div className="relative z-10 section-padding">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div {...fadeUp}>
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                Injection Moulding Experts
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Injection Moulding Is Our Heritage, Quality Is Our Tradition
              </h1>
              <p className="mt-4 max-w-xl text-sm text-white/80">
                We build precision tools and scale high-volume production for global OEMs and
                emerging innovators in automotive, medical, and industrial markets.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-red2">
                  Our Services
                </button>
                <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white">
                  View Capabilities
                </button>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <div id="quote" className="card bg-white/95 p-6 text-ui-text shadow-glow">
                <h3 className="text-lg font-semibold text-brand-navy">Book Mold Inspection</h3>
                <p className="mt-2 text-sm text-ui-muted">
                  Share your part details and receive a feasibility review in 24 hours.
                </p>
                <div className="mt-5 grid gap-4">
                  <input
                    className="rounded-lg border border-ui-border bg-white px-4 py-3 text-sm"
                    placeholder="Full Name"
                  />
                  <input
                    className="rounded-lg border border-ui-border bg-white px-4 py-3 text-sm"
                    placeholder="Email Address"
                  />
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      className="rounded-lg border border-ui-border bg-white px-4 py-3 text-sm"
                      placeholder="Industry"
                    />
                    <input
                      className="rounded-lg border border-ui-border bg-white px-4 py-3 text-sm"
                      placeholder="Part Volume"
                    />
                  </div>
                  <button className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-red2">
                    Submit Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div {...fadeUp}>
            <div className="relative overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="https://images.pexels.com/photos/4483778/pexels-photo-4483778.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Injection molding technician"
                width={640}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-red">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy">
              We&apos;re committed to providing quality injection moulding services
            </h2>
            <p className="mt-4 text-sm text-ui-muted">
              Our teams combine decades of tooling expertise with modern automation to deliver
              reliable parts on aggressive production schedules. We keep your programs running
              with transparent reporting and dedicated technical support.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-ui-muted md:grid-cols-2">
              {[
                "Best-in-class equipment",
                "Certified ISO systems",
                "Responsible pricing",
                "Experienced process engineers"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-red2">
              More About Us
            </button>
          </motion.div>
        </div>
      </section>

      <section id="services" className="section-padding bg-brand-navy text-white">
        <motion.div {...fadeUp} className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Our Services</p>
          <h2 className="mt-3 text-3xl font-semibold">We&apos;re providing quality moulding services</h2>
        </motion.div>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {serviceTabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveService(index)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeService === index
                  ? "bg-brand-red text-white"
                  : "border border-white/30 text-white/80 hover:border-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <h3 className="text-2xl font-semibold">{serviceTabs[activeService].title}</h3>
            <p className="mt-3 text-sm text-white/70">{serviceTabs[activeService].description}</p>
            <div className="mt-6 grid gap-3 text-sm text-white/80 md:grid-cols-2">
              {serviceTabs[activeService].bullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative overflow-hidden rounded-2xl shadow-glow">
              <Image
                src={serviceTabs[activeService].image}
                alt={serviceTabs[activeService].label}
                width={520}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="section-padding">
        <div className="grid gap-8 md:grid-cols-2">
          {highlightCards.map((card) => (
            <motion.div key={card.title} {...fadeUp} className="card overflow-hidden">
              <div className="relative h-56">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-navy">{card.title}</h3>
                <p className="mt-3 text-sm text-ui-muted">{card.description}</p>
                <button className="mt-5 rounded-full border border-brand-red px-4 py-2 text-xs font-semibold text-brand-red">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-ui-s2">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <motion.div {...fadeUp}>
            <div className="relative h-full overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Injection moulding team"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-red">
              Most Asked Questions
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-brand-navy">By our customers</h3>
            <div className="mt-6 space-y-4 text-sm text-ui-muted">
              {[
                "Available press capacities",
                "Lead time for new tooling",
                "Material sourcing options",
                "On-site packaging and labeling"
              ].map((question) => (
                <div key={question} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ui-border text-brand-red">
                    ?
                  </span>
                  <span>{question}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="team" className="section-padding">
        <motion.div {...fadeUp} className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-red">Team Members</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-navy">
            We have a professional team
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <motion.div key={member.name} {...fadeUp} className="card overflow-hidden text-center">
              <div className="relative h-56">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-semibold text-brand-navy">{member.name}</h4>
                <p className="text-xs text-ui-muted">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="section-padding bg-brand-navy text-white">
        <motion.div {...fadeUp} className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold">What they say about our service</h2>
        </motion.div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <motion.div key={item.name} {...fadeUp} className="rounded-2xl bg-white/10 p-6">
              <p className="text-sm text-white/80">“{item.quote}”</p>
              <div className="mt-4 text-xs text-white/70">
                <p className="font-semibold text-white">{item.name}</p>
                <p>{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="news" className="section-padding">
        <motion.div {...fadeUp} className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-red">Latest News</p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-navy">
            Latest news feeds, articles & tips
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <motion.div key={item.title} {...fadeUp} className="card overflow-hidden">
              <div className="relative h-44">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs text-ui-muted">{item.date}</p>
                <h3 className="mt-2 text-sm font-semibold text-brand-navy">{item.title}</h3>
                <button className="mt-4 rounded-full border border-brand-red px-4 py-2 text-xs font-semibold text-brand-red">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
