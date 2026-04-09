<template>
  <section id="about" class="py-32 md:py-48">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <!-- Section header -->
      <div class="flex items-center gap-6 mb-16 reveal">
        <span class="section-label">01 — About</span>
        <div class="flex-1 h-px bg-smoke" />
      </div>

      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        <!-- Left: headline + body -->
        <div>
          <h2 class="font-heading text-3xl md:text-4xl lg:text-5xl text-paper leading-tight mb-8 reveal reveal-delay-1">
            {{ about.headline }}
          </h2>

          <div class="space-y-5 reveal reveal-delay-2">
            <p v-for="(paragraph, i) in about.body" :key="i" class="font-sans text-sm md:text-base text-mist leading-relaxed">
              {{ paragraph }}
            </p>
          </div>

          <!-- Quote -->
          <div class="mt-10 pl-6 border-l-2 border-gold reveal reveal-delay-3">
            <blockquote class="font-heading italic text-lg text-paper/80 leading-snug">
              "{{ about.quote }}"
            </blockquote>
          </div>
        </div>

        <!-- Right: Credentials / info grid -->
        <div class="space-y-px reveal reveal-delay-2">

          <div
            v-for="(item, i) in credentials"
            :key="i"
            class="group flex items-center justify-between p-5 bg-ash hover:bg-smoke transition-colors duration-300 border-l border-transparent hover:border-gold"
          >
            <span class="font-body text-xs tracking-widest text-mist uppercase">{{ item.label }}</span>
            <span class="font-sans text-sm text-paper font-medium">{{ item.value }}</span>
          </div>

          <!-- Currently section -->
          <div class="mt-6 p-5 border border-smoke">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
              <span class="section-label">Currently</span>
            </div>
            <ul class="space-y-2">
              <li
                v-for="(item, i) in currently"
                :key="i"
                class="font-sans text-sm text-mist flex items-start gap-3"
              >
                <span class="text-gold mt-1 flex-shrink-0">→</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { about } from '../data/portfolio.js'
import { useReveal } from '../composables/useReveal.js'

useReveal()

const credentials = [
  { label: 'Degree', value: 'B.S. Computer Science, Indiana University' },
  { label: 'GPA', value: '3.23 / 4.00' },
  { label: 'Graduated', value: 'December 2024' },
  { label: 'Internships', value: 'Google · Enova International' },
  { label: 'Location', value: 'Bloomington, Indiana' },
  { label: 'Availability', value: 'Open to roles' },
]

const currently = [
  'Building and operating NicoClips — a YouTube channel scaled to 165K subscribers',
  'Directing a cross-functional content production team',
  'Pursuing senior engineering and technical leadership roles',
  'Developing additional product and business ventures',
]
</script>
