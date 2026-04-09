<template>
  <footer class="relative overflow-hidden border-t border-smoke">

    <!-- CTA block -->
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
      <div class="grid md:grid-cols-2 gap-12 items-end">

        <div>
          <span class="section-label block mb-6">Let's Work</span>
          <h2 class="font-heading text-4xl md:text-6xl text-paper leading-tight mb-8">
            I build things<br/>
            <em class="text-gold not-italic">that matter.</em>
          </h2>
          <p class="font-sans text-sm text-mist leading-relaxed max-w-sm mb-10">
            If you're looking for someone who ships production software, makes independent technical decisions, and operates with ownership — let's talk.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:goinesjalen@gmail.com"
              class="font-body text-xs tracking-widest text-ink bg-gold px-8 py-4 hover:bg-paper transition-colors duration-300 text-center"
            >
              GET IN TOUCH
            </a>
            <a
              href="https://github.com/goinesjalen"
              target="_blank"
              rel="noopener"
              class="font-body text-xs tracking-widest text-paper border border-smoke px-8 py-4 hover:border-gold transition-colors duration-300 text-center"
            >
              GITHUB ↗
            </a>
            <a
              href="https://www.linkedin.com/in/jalen-goines/"
              target="_blank"
              rel="noopener"
              class="font-body text-xs tracking-widest text-paper border border-smoke px-8 py-4 hover:border-gold transition-colors duration-300 text-center"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>

        <!-- Big name -->
        <div class="hidden md:block">
          <div class="font-display text-[12vw] leading-none tracking-wider text-right opacity-5">
            JALEN
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-smoke">
      <div class="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span class="font-body text-xs text-mist tracking-widest">
          © {{ new Date().getFullYear() }} — Jalen
        </span>
        <span class="font-body text-xs text-smoke tracking-widest">
          Built with Vue 3 + Vite + Tailwind
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
