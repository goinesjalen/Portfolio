<template>
  <section id="projects" class="py-32 md:py-48 bg-ash">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <!-- Section header -->
      <div class="flex items-center gap-6 mb-6 reveal">
        <span class="section-label">02 — Projects</span>
        <div class="flex-1 h-px bg-smoke" />
      </div>

      <div class="mb-16 reveal reveal-delay-1">
        <h2 class="font-heading text-3xl md:text-5xl text-paper mb-4">
          Work that ships.
        </h2>
        <p class="font-sans text-sm text-mist max-w-lg leading-relaxed">
          Every project below is production software — not academic exercises. Click any card to see the problem, the decisions, and the outcomes.
        </p>
      </div>

      <!-- Project grid -->
      <div class="grid gap-px bg-smoke reveal reveal-delay-2">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects, futureProjects } from '../data/portfolio.js'
import ProjectCard from './ProjectCard.vue'
import { useReveal } from '../composables/useReveal.js'

useReveal()
</script>
