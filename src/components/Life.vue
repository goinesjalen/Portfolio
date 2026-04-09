<template>
  <section id="life" class="py-32 md:py-48 bg-ink">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <!-- Section header -->
      <div class="flex items-center gap-6 mb-16 reveal">
        <span class="section-label">05 — Life</span>
        <div class="flex-1 h-px bg-smoke" />
      </div>

      <!-- Story block -->
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20 items-start">
        <div class="reveal reveal-delay-1">
          <h2 class="font-heading text-3xl md:text-5xl text-paper leading-tight mb-6">
            Beyond the<br/>
            <em class="text-gold not-italic">terminal.</em>
          </h2>
          <div class="space-y-5">
            <p class="font-sans text-sm md:text-base text-mist leading-relaxed">
              I'm 24, based in Bloomington, Indiana, and engaged to my fiancée — an operations powerhouse who somehow keeps up with everything I'm building. We balance each other well: she brings the structure, I bring the velocity.
            </p>
            <p class="font-sans text-sm md:text-base text-mist leading-relaxed">
              We share our home with two large dogs who have absolutely no idea how big they are. They're the loudest, most opinionated members of the household and I wouldn't have it any other way.
            </p>
            <p class="font-sans text-sm md:text-base text-mist leading-relaxed">
              Outside of building products and running teams, you'll find me deep in Minecraft — not casually, but as a server operator and content creator running a live SMP with a full player economy, custom mods, and two towns I co-govern. It's basically systems design with a pickaxe.
            </p>
            <p class="font-sans text-sm md:text-base text-mist leading-relaxed">
              I care about cars, crypto, and building things that matter. Not "matter" in a vague startup-pitch way — matter in the sense that an average person's Tuesday is genuinely better because of something I made. Joy, engagement, relaxation, a reason to laugh. That's the work worth doing.
            </p>
          </div>
        </div>

        <!-- Quick facts sidebar -->
        <div class="space-y-px reveal reveal-delay-2">
          <div
            v-for="fact in facts"
            :key="fact.label"
            class="group flex items-start gap-5 p-5 bg-ash hover:bg-smoke transition-colors duration-300 border-l border-transparent hover:border-gold"
          >
            <span class="text-xl flex-shrink-0 mt-0.5">{{ fact.emoji }}</span>
            <div>
              <p class="font-body text-xs tracking-widest text-mist uppercase mb-1">{{ fact.label }}</p>
              <p class="font-sans text-sm text-paper">{{ fact.value }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Photo grid -->
      <div class="reveal reveal-delay-2">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-smoke">

          <!-- Photo slot component -->
          <div
            v-for="slot in photoSlots"
            :key="slot.id"
            class="relative group overflow-hidden bg-ash"
            :class="slot.tall ? 'row-span-2' : ''"
            :style="slot.tall ? 'aspect-ratio: 3/4' : 'aspect-ratio: 1/1'"
          >
            <!-- Placeholder state -->
            <div
              v-if="!slot.src"
              class="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-smoke group-hover:border-gold/40 transition-colors duration-300"
            >
              <span class="text-3xl opacity-30">{{ slot.emoji }}</span>
              <span class="font-body text-xs text-smoke tracking-widest text-center px-4">{{ slot.label }}</span>
            </div>

            <!-- Populated image state (uncomment and set src when ready) -->
            <img
              v-else
              :src="slot.src"
              :alt="slot.label"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <!-- Caption overlay on hover -->
            <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p class="font-body text-xs text-paper tracking-wide">{{ slot.caption }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal.js'
import img1 from '../images/IMG_7622.jpg'
import img2 from '../images/IMG_7077.jpg'
import img3 from '../images/IMG_9671.jpeg'
import img4 from '../images/IMG_5494.jpeg'
import img5 from '../images/2026-03-20_02.23.34.png'
import img6 from '../images/IMG_0826.jpeg'
import img7 from '../images/IMG_6809.jpg'

useReveal()

const facts = [
  { emoji: '💍', label: 'Status', value: 'Engaged — she runs ops, I run systems' },
  { emoji: '🐕', label: 'Dogs', value: 'Two large ones. Neither knows their size.' },
  { emoji: '📍', label: 'Home Base', value: 'Bloomington, Indiana' },
  { emoji: '⛏️', label: 'Off the Clock', value: 'Minecraft SMP operator & content creator — two towns, custom economy, live server' },
  { emoji: '🚗', label: 'Interests', value: 'Cars, crypto, and building income streams' },
  { emoji: '🎯', label: 'The Goal', value: 'Build things that matter.' },
]

// To populate: replace src: null with a URL or imported image path
// Example: src: '/images/dogs.jpg' or src: 'https://your-cdn.com/photo.jpg'
const photoSlots = [
  {
    id: 1,
    src: img1,
    tall: true,
    emoji: '💍',
    label: 'drop a photo here',
    caption: 'The two of us',
  },
  {
    id: 2,
    src: img2,
    tall: false,
    emoji: '🐕',
    label: 'drop a photo here',
    caption: 'The Boys',
  },
  {
    id: 3,
    src: img3,
    tall: false,
    emoji: '🐕',
    label: 'drop a photo here',
    caption: 'The Boys 2',
  },
  {
    id: 4,
    src: img4,
    tall: false,
    emoji: '🏠',
    label: 'drop a photo here',
    caption: 'My Family',
  },
  {
    id: 5,
    src: img5,
    tall: true,
    emoji: '⛏️',
    label: 'drop a photo here',
    caption: 'The SMP',
  },
  {
    id: 6,
    src: img6,
    tall: false,
    emoji: '🚗',
    label: 'drop a photo here',
    caption: 'Daily driver',
  },
  {
    id: 7,
    src: img7,
    tall: false,
    emoji: '📸',
    label: 'drop a photo here',
    caption: 'My Parents - Graduation',
  },
]
</script>
