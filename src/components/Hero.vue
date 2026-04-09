<template>
  <section id="hero" class="relative min-h-screen flex flex-col overflow-hidden">

    <!-- Background grid -->
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(var(--paper) 1px, transparent 1px), linear-gradient(90deg, var(--paper) 1px, transparent 1px); background-size: 80px 80px;" aria-hidden="true" />

    <!-- Accent blob -->
    <div class="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-[0.06] blur-3xl" style="background: radial-gradient(circle, var(--gold), transparent)" aria-hidden="true" />
    <div class="absolute bottom-1/3 left-0 w-64 h-64 rounded-full opacity-[0.04] blur-2xl" style="background: radial-gradient(circle, var(--ember), transparent)" aria-hidden="true" />

    <!-- Main content -->
    <div class="flex-1 flex flex-col max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-16">

      <!-- Top label -->
      <div class="flex items-center gap-4 mb-12 animate-fade-in" style="animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards;">
        <div class="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
        <span class="section-label">Available for opportunities</span>
      </div>

      <!-- Hero headline -->
      <div class="flex-1 flex flex-col justify-center">
        <div class="animate-fade-up" style="animation-delay: 0.3s; opacity: 0; animation-fill-mode: forwards;">
          <h1 class="font-display text-[13vw] md:text-[10vw] lg:text-[8.5vw] leading-none tracking-wider text-paper mb-0">
            ENGINEER
          </h1>
          <h1 class="font-display text-[13vw] md:text-[10vw] lg:text-[8.5vw] leading-none tracking-wider" style="color: transparent; -webkit-text-stroke: 1px rgba(244,240,232,0.2);">
            OPERATOR
          </h1>
          <h1 class="font-display text-[13vw] md:text-[10vw] lg:text-[8.5vw] leading-none tracking-wider text-gold">
            BUILDER
          </h1>
        </div>

        <!-- Sub-content row -->
        <div class="mt-12 md:mt-16 grid md:grid-cols-2 gap-8 items-end animate-fade-up" style="animation-delay: 0.5s; opacity: 0; animation-fill-mode: forwards;">
          <div>
            <p class="font-sans text-base md:text-lg text-mist leading-relaxed max-w-md mb-8">
              {{ meta.tagline }}
            </p>
            <div class="flex gap-4">
              <a href="#projects" class="font-body text-xs tracking-widest text-ink bg-gold px-6 py-3 hover:bg-paper transition-colors duration-300">
                VIEW WORK
              </a>
              <a href="#about" class="font-body text-xs tracking-widest text-paper border border-smoke px-6 py-3 hover:border-gold transition-colors duration-300">
                ABOUT
              </a>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-px bg-smoke border border-smoke">
            <div
              v-for="stat in heroStats"
              :key="stat.label"
              class="bg-ink p-6 flex flex-col gap-1 hover:bg-ash transition-colors duration-300"
            >
              <span class="font-display text-3xl md:text-4xl text-paper tracking-wide">{{ stat.value }}</span>
              <span class="font-body text-xs text-mist tracking-widest uppercase">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ticker tape -->
    <div class="border-t border-b border-smoke py-3 overflow-hidden" aria-hidden="true">
      <div class="flex animate-ticker whitespace-nowrap" style="width: max-content">
        <span
          v-for="(item, i) in [...ticker, ...ticker]"
          :key="i"
          class="font-body text-xs tracking-widest text-mist uppercase mx-8 flex items-center gap-8"
        >
          {{ item }}
          <span class="w-1 h-1 rounded-full bg-gold inline-block" />
        </span>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-24 right-12 hidden md:flex flex-col items-center gap-3 animate-fade-in" style="animation-delay: 1.2s; opacity: 0; animation-fill-mode: forwards;">
      <span class="font-body text-xs tracking-widest text-mist uppercase" style="writing-mode: vertical-rl">Scroll</span>
      <div class="w-px h-12 bg-smoke relative overflow-hidden">
        <div class="absolute inset-0 bg-gold animate-pulse-soft" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { meta, heroStats, ticker } from '../data/portfolio.js'
</script>
