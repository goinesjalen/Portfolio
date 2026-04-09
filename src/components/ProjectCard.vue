<template>
  <article
    class="group relative border border-smoke hover:border-gold/40 transition-all duration-500 overflow-hidden cursor-pointer"
    :class="expanded ? 'border-gold/40' : ''"
    @click="expanded = !expanded"
    data-hover
  >
    <!-- Top bar accent -->
    <div
      class="h-px w-0 group-hover:w-full transition-all duration-700"
      :class="accentColor"
    />

    <!-- Card header -->
    <div class="p-6 md:p-8">
      <div class="flex items-start justify-between gap-4 mb-4">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <span class="section-label">{{ project.category }}</span>
            <span class="w-1 h-1 rounded-full bg-smoke" />
            <span class="font-body text-xs text-mist">{{ project.year }}</span>
          </div>
          <h3 class="font-heading text-xl md:text-2xl text-paper group-hover:text-gold transition-colors duration-300">
            {{ project.title }}
          </h3>
          <p class="font-body text-xs text-mist mt-1 tracking-wide">{{ project.subtitle }}</p>
        </div>

        <div class="flex flex-col items-end gap-3 flex-shrink-0">
          <span
            class="font-body text-xs tracking-widest px-2 py-1 border"
            :class="project.status === 'Live' ? 'border-gold/40 text-gold' : 'border-smoke text-mist'"
          >
            {{ project.status }}
          </span>

          <!-- Expand toggle -->
          <div
            class="w-8 h-8 border border-smoke flex items-center justify-center text-mist group-hover:border-gold group-hover:text-gold transition-all duration-300"
            :class="expanded ? 'bg-gold border-gold text-ink rotate-45' : ''"
          >
            <span class="text-sm font-light transition-transform duration-300">+</span>
          </div>
        </div>
      </div>

      <!-- Tech stack tags -->
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</span>
      </div>
    </div>

    <!-- Expandable detail -->
    <div
      class="overflow-hidden transition-all duration-500"
      :class="expanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="border-t border-smoke px-6 md:px-8 py-8 space-y-8">

        <!-- Problem -->
        <div>
          <p class="section-label mb-3">The Problem</p>
          <p class="font-sans text-sm text-paper/80 leading-relaxed">{{ project.problem }}</p>
        </div>

        <!-- Contribution -->
        <div>
          <p class="section-label mb-3">My Role</p>
          <p class="font-sans text-sm text-paper/80 leading-relaxed">{{ project.contribution }}</p>
        </div>

        <!-- Two columns: Decisions + Outcomes -->
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <p class="section-label mb-4">Key Decisions</p>
            <ul class="space-y-3">
              <li
                v-for="(decision, i) in project.decisions"
                :key="i"
                class="font-sans text-xs text-mist leading-relaxed flex gap-3"
              >
                <span class="text-gold flex-shrink-0 mt-0.5">{{ String(i + 1).padStart(2, '0') }}</span>
                <span>{{ decision }}</span>
              </li>
            </ul>
          </div>
          <div>
            <p class="section-label mb-4">Outcomes</p>
            <ul class="space-y-3">
              <li
                v-for="(outcome, i) in project.outcomes"
                :key="i"
                class="font-sans text-xs text-paper leading-relaxed flex gap-3"
              >
                <span class="text-gold flex-shrink-0">→</span>
                <span>{{ outcome }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
})

const expanded = ref(false)

const accentColor = computed(() => {
  const map = {
    ember: 'bg-ember',
    ice: 'bg-ice',
    gold: 'bg-gold',
    mist: 'bg-mist',
  }
  return map[props.project.accent] || 'bg-gold'
})
</script>
