<template>
  <section id="skills" class="py-32 md:py-48 bg-ash">
    <div class="max-w-7xl mx-auto px-6 md:px-12">

      <!-- Section header -->
      <div class="flex items-center gap-6 mb-16 reveal">
        <span class="section-label">04 — Skills</span>
        <div class="flex-1 h-px bg-smoke" />
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-smoke reveal reveal-delay-1">
        <div
          v-for="category in skillCategories"
          :key="category.label"
          class="bg-ash p-8 hover:bg-smoke transition-colors duration-300"
        >
          <div class="flex items-center gap-3 mb-6">
            <span class="text-gold text-lg">{{ category.icon }}</span>
            <h3 class="font-body text-xs tracking-widest text-mist uppercase">{{ category.label }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.items"
              :key="skill"
              class="font-body text-xs text-paper px-2 py-1 border border-smoke hover:border-gold/40 hover:text-gold transition-all duration-200 cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Affiliations -->
      <div class="mt-16 reveal reveal-delay-3">
        <div class="flex items-center gap-6 mb-8">
          <span class="section-label">Student Involvement</span>
          <div class="flex-1 h-px bg-smoke" />
        </div>
        <div class="flex flex-wrap gap-4">
          <div v-for="org in orgs" :key="org.name" class="flex items-center gap-3 border border-smoke px-5 py-3 hover:border-gold/30 transition-colors duration-300">
            <span class="w-1.5 h-1.5 rounded-full bg-gold" />
            <span class="font-sans text-sm text-paper">{{ org.name }}</span>
            <span class="font-body text-xs text-mist">{{ org.period }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from '../data/portfolio.js'
import { useReveal } from '../composables/useReveal.js'

useReveal()

const skillCategories = [
  { label: 'Backend', icon: '⚙', items: skills.backend },
  { label: 'Frontend', icon: '◻', items: skills.frontend },
  { label: 'Systems & DevOps', icon: '◈', items: skills.systems },
  { label: 'Tools & Design', icon: '✦', items: skills.tools },
]

const leadershipSignals = [
  {
    num: '01',
    title: 'Built a team, not just code',
    description: 'Directed thumbnail artists, creative strategists, and video directors for NicoClips — owning the production system and the people running it.',
  },
  {
    num: '02',
    title: 'Shipped to production at Google',
    description: 'Not a side project. A modular validation engine that went into real Google infrastructure, built to be extended by engineers after I left.',
  },
  {
    num: '03',
    title: 'Solved the client loop solo',
    description: 'As a freelancer, I owned the entire arc: find the problem, scope the work, build the thing, ship it, and watch people use it.',
  },
]

const orgs = [
  { name: 'National Society of Black Engineers', period: '2021 — 2024' },
  { name: 'Computer Science Club', period: '2021 — 2024' },
]
</script>
