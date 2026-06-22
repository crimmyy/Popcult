"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const spotlights = [
  {
    title: "Gundam",
    meta: "HG • RG • MG • Tools",
    image: "/images/gundam.jpg",
    imageAlt: "Gundam model kit promotional graphic",
    imagePosition: "center center",
  },
  {
    title: "Sanrio",
    meta: "Plush • Gifts • Blind Boxes",
    image: "/images/sanrio.jpg",
    imageAlt: "Sanrio character goods promotional graphic",
    imagePosition: "center center",
  },
  {
    title: "Anime Figures",
    meta: "Figures • Statues • Display",
    image: "/images/figure.jpg",
    imageAlt: "Anime figure promotional graphic",
    imagePosition: "center center",
  },
  {
    title: "Plush",
    meta: "Character Plush • Gifts",
    image: "/images/plush.jpg",
    imageAlt: "Character plush promotional graphic",
    imagePosition: "center center",
  },
  {
    title: "Collectibles",
    meta: "Blind Boxes • Merch • Display",
    image: "/images/collectible.jpg",
    imageAlt: "Pop culture collectible promotional graphic",
    imagePosition: "center center",
  },
] as const;

export function HeroSpotlightCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const active = spotlights[activeIndex];

  function showPrevious() {
    setActiveIndex((current) =>
      current === 0 ? spotlights.length - 1 : current - 1
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % spotlights.length);
  }

  function handleDragEnd(_: PointerEvent, info: PanInfo) {
    if (info.offset.x < -50) showNext();
    if (info.offset.x > 50) showPrevious();
  }

  return (
    <section
      aria-label="Featured merchandise categories"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") showPrevious();
        if (event.key === "ArrowRight") showNext();
      }}
      className="w-full rounded-[1.75rem] border border-black/15 bg-white p-3 shadow-[7px_7px_0_#171717] outline-offset-4 sm:p-4"
    >
      <div className="relative aspect-[5/6] overflow-hidden rounded-[1.2rem] bg-[#171717]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.title}
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 18 }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -18 }
            }
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.22 }}
            drag={shouldReduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={handleDragEnd}
            className="absolute inset-0"
          >
            <Image
              src={active.image}
              alt={active.imageAlt}
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 1023px) 100vw, 34vw"
              draggable={false}
              className="select-none object-cover"
              style={{ objectPosition: active.imagePosition }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-[1fr_auto] items-end gap-4 px-1 pb-1 pt-5">
        <div aria-live="polite">
          <h2 className="text-2xl font-black tracking-[-0.035em]">
            {active.title}
          </h2>
          <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-primary">
            {active.meta}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous category"
            className="grid size-11 place-items-center rounded-full border border-black/15 bg-white text-black hover:bg-muted"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Show next category"
            className="grid size-11 place-items-center rounded-full bg-black text-white hover:bg-primary"
          >
            <ArrowRight aria-hidden="true" className="size-4" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex gap-2 px-1">
        {spotlights.map((spotlight, index) => (
          <button
            key={spotlight.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${spotlight.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            className="group grid h-6 min-w-6 place-items-center rounded-full"
          >
            <span
              className={cn(
                "h-1.5 rounded-full transition-[width,background-color]",
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-3 bg-black/15 group-hover:bg-black/35"
              )}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
