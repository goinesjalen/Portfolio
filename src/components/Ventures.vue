<template>
  <section id="ventures" class="py-32 md:py-48 bg-ash">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <!-- Section header -->
      <div class="flex items-center gap-6 mb-16 reveal">
        <span class="section-label">03 — Ventures</span>
        <div class="flex-1 h-px bg-smoke" />
      </div>

      <!-- Headline + body -->
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-16">
        <div class="reveal reveal-delay-1">
          <h2 class="font-heading text-3xl md:text-5xl text-paper leading-tight mb-8">
            I don't just build software.<br/>
            <em class="text-gold not-italic">I build businesses.</em>
          </h2>
          <div class="space-y-5">
            <p class="font-sans text-sm md:text-base text-mist leading-relaxed">
              This month I put my first car on Turo. One vehicle. The plan is to scale it — buying more, running the operation myself, learning every part of the business by living inside it.
            </p>
            <p class="font-sans text-sm md:text-base text-mist leading-relaxed">
              The long game is an EV dealership. Own it, operate it, build it from scratch. The kind of place that actually deserves to exist — run with the same attention to systems and experience that I bring to software.
            </p>
          </div>

          <div class="mt-10 pl-6 border-l-2 border-gold">
            <blockquote class="font-heading italic text-lg text-paper/80 leading-snug">
              "Start with one car. End with a lot."
            </blockquote>
          </div>
        </div>

        <!-- Status sidebar -->
        <div class="reveal reveal-delay-2 space-y-px">
          <div
            v-for="item in active"
            :key="item.label"
            class="group flex items-start gap-5 p-5 bg-ink hover:bg-smoke transition-colors duration-300 border-l border-transparent hover:border-gold"
          >
            <span class="text-gold font-body text-xs mt-0.5 flex-shrink-0 tracking-widest">→</span>
            <div>
              <p class="font-body text-xs tracking-widest text-mist uppercase mb-1">{{ item.label }}</p>
              <p class="font-sans text-sm text-paper">{{ item.value }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Vision bar -->
      <div class="reveal reveal-delay-3 border border-smoke hover:border-gold/40 transition-colors duration-500 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <span class="section-label block mb-3">The destination</span>
          <h3 class="font-heading text-2xl md:text-3xl text-paper">
            An EV dealership — owned, operated, built right.
          </h3>
        </div>
        <a
          href="mailto:goinesjalen@gmail.com"
          class="font-body text-xs tracking-widest text-ink bg-gold px-8 py-4 hover:bg-paper transition-colors duration-300 whitespace-nowrap flex-shrink-0 text-center"
        >
          LET'S TALK ↗
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useReveal } from '../composables/useReveal.js'

useReveal()

const active = [
  { label: 'Fleet — Vehicle 01', value: '2015 Toyota Corolla S · Acquired April 2026' },
  { label: 'Platform', value: 'Turo' },
  { label: 'Focus', value: 'Acquisition, Pricing, Operations.' },
  { label: 'End goal', value: 'Own and operate an EV dealership.' },
]
</script>