<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-smoke' : 'bg-transparent'"
  >
    <nav class="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
      <!-- Logo / Name -->
      <a href="#hero" class="font-display text-xl tracking-widest text-paper hover:text-gold transition-colors duration-300">
        JALEN GOINES
      </a>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-10">
        <li v-for="item in navItems" :key="item.href">
          <a
            :href="item.href"
            class="font-body text-xs tracking-widest text-mist hover:text-gold transition-colors duration-300 uppercase"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- CTA -->
      <a
        href="mailto:goinesjalen@gmail.com"
        class="hidden md:flex items-center gap-2 font-body text-xs tracking-widest text-ink bg-gold px-4 py-2 hover:bg-paper transition-colors duration-300"
      >
        Let's Talk
        <span class="text-ink">↗</span>
      </a>

      <!-- Mobile toggle -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span class="w-6 h-px bg-paper transition-all duration-300" :class="mobileOpen ? 'rotate-45 translate-y-2' : ''" />
        <span class="w-4 h-px bg-paper transition-all duration-300" :class="mobileOpen ? 'opacity-0' : ''" />
        <span class="w-6 h-px bg-paper transition-all duration-300" :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''" />
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div
      class="md:hidden overflow-hidden transition-all duration-500"
      :class="mobileOpen ? 'max-h-80 border-t border-smoke' : 'max-h-0'"
    >
      <div class="bg-ash px-6 py-6 flex flex-col gap-6">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click="mobileOpen = false"
          class="font-body text-sm tracking-widest text-mist hover:text-gold transition-colors duration-300 uppercase"
        >
          {{ item.label }}
        </a>
        <a href="mailto:goinesjalen@gmail.com" class="font-body text-xs tracking-widest text-ink bg-gold px-4 py-3 text-center hover:bg-paper transition-colors">
          Let's Talk ↗
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Life', href: '#life' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
