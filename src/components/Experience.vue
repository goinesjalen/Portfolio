<template>
  <section id="experience" class="py-32 md:py-48">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <!-- Section header -->
      <div class="flex items-center gap-6 mb-16 reveal">
        <span class="section-label">03 — Experience</span>
        <div class="flex-1 h-px bg-smoke" />
      </div>

      <!-- Timeline -->
      <div class="relative">

        <!-- Vertical line (desktop) -->
        <div class="absolute left-0 top-0 bottom-0 w-px bg-smoke hidden md:block" />

        <div class="space-y-0">
          <div
            v-for="(exp, i) in experience"
            :key="exp.id"
            class="group relative md:pl-16 reveal"
            :class="`reveal-delay-${(i % 4) + 1}`"
          >
            <!-- Timeline dot (desktop) -->
            <div
              class="absolute left-0 top-8 hidden md:flex w-3 h-3 -translate-x-1/2 items-center justify-center"
            >
              <div class="w-3 h-3 rounded-full bg-smoke group-hover:bg-gold transition-colors duration-300 border border-mist group-hover:border-gold" />
            </div>

            <!-- Card -->
            <div class="border-b border-smoke py-10 group-hover:border-gold/30 transition-colors duration-300">
              <div class="grid md:grid-cols-4 gap-6 md:gap-10 items-start">

                <!-- Left: Meta -->
                <div class="md:col-span-1">
                  <p class="font-body text-xs text-mist tracking-widest uppercase mb-1">{{ exp.period }}</p>
                  <span class="tag">{{ exp.type }}</span>
                </div>

                <!-- Right: Content -->
                <div class="md:col-span-3">
                  <div class="mb-4">
                    <h3 class="font-heading text-xl md:text-2xl text-paper group-hover:text-gold transition-colors duration-300 mb-1">
                      {{ exp.role }}
                    </h3>
                    <p class="font-body text-xs text-mist tracking-wide">{{ exp.company }}</p>
                  </div>

                  <p class="font-sans text-sm text-paper/70 leading-relaxed mb-6">{{ exp.summary }}</p>

                  <ul class="space-y-2">
                    <li
                      v-for="(highlight, j) in exp.highlights"
                      :key="j"
                      class="font-sans text-xs text-mist leading-relaxed flex gap-3"
                    >
                      <span class="text-gold flex-shrink-0 mt-0.5">—</span>
                      <span>{{ highlight }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="mt-20 reveal reveal-delay-2">
        <div class="flex items-center gap-6 mb-8">
          <span class="section-label">Education</span>
          <div class="flex-1 h-px bg-smoke" />
        </div>

        <div class="border border-smoke p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-gold/30 transition-colors duration-300">
          <div>
            <h3 class="font-heading text-xl text-paper mb-1">Bachelor of Science in Computer Science</h3>
            <p class="font-sans text-sm text-mist">Indiana University — Luddy School of Informatics, Computing, and Engineering</p>
            <p class="font-body text-xs text-mist/60 mt-1 tracking-wide">Minor: Informatics</p>
          </div>
          <div class="flex gap-6 md:text-right flex-shrink-0">
            <div>
              <p class="font-display text-2xl text-gold">3.23</p>
              <p class="font-body text-xs text-mist tracking-widest">GPA</p>
            </div>
            <div>
              <p class="font-display text-2xl text-paper">Dec '24</p>
              <p class="font-body text-xs text-mist tracking-widest">Graduated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experience } from '../data/portfolio.js'
import { useReveal } from '../composables/useReveal.js'

useReveal()
</script>
