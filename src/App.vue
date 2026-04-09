<template>
  <div>
    <!-- Grain overlay -->
    <div class="grain" aria-hidden="true" />

    <!-- Custom cursor -->
    <div ref="cursorDot" class="cursor-dot" aria-hidden="true" />
    <div ref="cursorRing" class="cursor-ring" aria-hidden="true" />

    <!-- App layout -->
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Life />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'
import Life from './components/Life.vue'

const cursorDot = ref(null)
const cursorRing = ref(null)

onMounted(() => {
  let mouseX = 0, mouseY = 0
  let ringX = 0, ringY = 0

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    if (cursorDot.value) {
      cursorDot.value.style.left = mouseX - 4 + 'px'
      cursorDot.value.style.top = mouseY - 4 + 'px'
    }
  })

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.12
    ringY += (mouseY - ringY) * 0.12

    if (cursorRing.value) {
      cursorRing.value.style.left = ringX - 16 + 'px'
      cursorRing.value.style.top = ringY - 16 + 'px'
    }

    requestAnimationFrame(animateRing)
  }
  animateRing()

  // Scale cursor on hover
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, [data-hover]')) {
      if (cursorRing.value) {
        cursorRing.value.style.transform = 'scale(2)'
        cursorRing.value.style.borderColor = 'rgba(201,168,76,0.8)'
      }
      if (cursorDot.value) {
        cursorDot.value.style.transform = 'scale(0)'
      }
    }
  })

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, [data-hover]')) {
      if (cursorRing.value) {
        cursorRing.value.style.transform = 'scale(1)'
        cursorRing.value.style.borderColor = 'rgba(201,168,76,0.4)'
      }
      if (cursorDot.value) {
        cursorDot.value.style.transform = 'scale(1)'
      }
    }
  })
})
</script>
