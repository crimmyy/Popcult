"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

function getWrappedIndex(index: number) {
  return (index + spotlights.length) % spotlights.length;
}

export function HeroSpotlightCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const active = spotlights[activeIndex];
  const nextCard = spotlights[getWrappedIndex(activeIndex + 1)];
  const thirdCard = spotlights[getWrappedIndex(activeIndex + 2)];

  function showPrevious() {
    setDirection(-1);
    setActiveIndex((current) => getWrappedIndex(current - 1));
  }

  function showNext() {
    setDirection(1);
    setActiveIndex((current) => getWrappedIndex(current + 1));
  }

  function showSlide(index: number) {
    setDirection(index >= activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    const swipeDistance = info.offset.x;
    const swipeVelocity = info.velocity.x;

    if (swipeDistance < -60 || swipeVelocity < -500) {
      showNext();
    } else if (swipeDistance > 60 || swipeVelocity > 500) {
      showPrevious();
    }
  }

  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;

    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => getWrappedIndex(current + 1));
    }, 6500);

    return () => window.clearInterval(interval);
  }, [isPaused, shouldReduceMotion]);

  return (
    <section
      aria-label="Featured merchandise categories"
      aria-roledescription="carousel"
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (
          !event.relatedTarget ||
          !event.currentTarget.contains(event.relatedTarget as Node)
        ) {
          setIsPaused(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") showPrevious();
        if (event.key === "ArrowRight") showNext();
      }}
      className="w-full outline-offset-4"
    >
      <div className="relative px-3 pt-5 sm:px-4 sm:pt-6">
        <div
          aria-hidden="true"
          className="absolute inset-x-7 bottom-1 top-0 rotate-[3.5deg] overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm sm:inset-x-9"
        >
          <Image
            src={thirdCard.image}
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 34vw"
            className="object-cover opacity-55"
            style={{ objectPosition: thirdCard.imagePosition }}
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-5 bottom-0 top-2 rotate-[1.8deg] overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-md sm:inset-x-7"
        >
          <Image
            src={nextCard.image}
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 34vw"
            className="object-cover opacity-75"
            style={{ objectPosition: nextCard.imagePosition }}
          />
        </div>

        <div className="relative aspect-[4/5]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.article
              key={active.title}
              custom={direction}
              drag={shouldReduceMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragStart={() => setIsPaused(true)}
              onDragEnd={handleDragEnd}
              whileTap={shouldReduceMotion ? undefined : { cursor: "grabbing" }}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      y: 14,
                      scale: 0.965,
                      rotate: direction * 1.5,
                    }
              }
              animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      x: direction * -145,
                      y: 10,
                      scale: 0.96,
                      rotate: direction * -8,
                    }
              }
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.46,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 z-20 grid cursor-grab touch-pan-y grid-rows-[minmax(0,1fr)_6rem] overflow-hidden rounded-[1.75rem] border border-black/15 bg-white shadow-[7px_7px_0_#171717] active:cursor-grabbing"
            >
              <div className="relative min-h-0 overflow-hidden bg-[#171717]">
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
              </div>

              <div className="flex min-w-0 items-center justify-between gap-4 px-5 py-4">
                <div className="min-w-0" aria-live="polite">
                  <h2 className="truncate text-2xl font-black tracking-[-0.035em]">
                    {active.title}
                  </h2>
                  <p className="mt-1 truncate text-[0.68rem] font-black uppercase tracking-[0.1em] text-primary">
                    {active.meta}
                  </p>
                </div>

                <span className="shrink-0 text-xs font-bold text-muted-foreground">
                  {activeIndex + 1}/{spotlights.length}
                </span>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between px-2 sm:px-3">
        <div className="flex gap-1">
          {spotlights.map((spotlight, index) => (
            <button
              key={spotlight.title}
              type="button"
              onClick={() => showSlide(index)}
              aria-label={`Show ${spotlight.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className="group grid h-8 min-w-7 place-items-center rounded-full"
            >
              <span
                className={cn(
                  "h-1.5 rounded-full transition-[width,background-color]",
                  index === activeIndex
                    ? "w-7 bg-primary"
                    : "w-2.5 bg-black/15 group-hover:bg-black/35"
                )}
              />
            </button>
          ))}
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
    </section>
  );
}