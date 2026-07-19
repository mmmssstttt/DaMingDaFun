<script setup lang="ts">
import { ref } from 'vue'
import { TresCanvas } from '@tresjs/core'
import {
  ArrowDownRight,
  ArrowUpRight,
  CircleUserRound,
  Menu,
  Plus,
  X,
} from 'lucide-vue-next'
import Label from './components/Label.vue'
import ProjectVisual from './components/ProjectVisual.vue'

const people = [
  { name: '江明倢 Sho', role: '商業接洽　概念設計', image: 'https://images.unsplash.com/photo-1761554169693-08fd975a94f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1000', position: 'md:col-span-4 md:col-start-2 md:mt-28' },
  { name: '陳子璇 Eleanor', role: '專案管理　邏輯分析', image: 'https://images.unsplash.com/photo-1771072427776-9142b2d39a26?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1000', position: 'md:col-span-3 md:col-start-7' },
  { name: '蔡孟軒 Alvin', role: '工程實作　產品打樣', image: 'https://images.unsplash.com/photo-1761554169700-131bc3f188c3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1000', position: 'md:col-span-4 md:col-start-10 md:mt-44' },
]

const projects = [
  { id: '01', title: '《小封神藏寶圖》', type: '遊戲道具 / 視覺系統', date: '2026年 7月14日', visual: 'map', position: 'md:col-span-7' },
  { id: '02', title: '《劍道賽計分板》', type: '產品設計 / 賽事系統', date: '2026年 4月21日', visual: 'score', position: 'md:col-span-5 md:mt-24' },
  { id: '03', title: '《PVD鍍膜機外觀設計》', type: '工業設計 / 設備外觀', date: '2025年 12月08日', visual: 'machine', position: 'md:col-span-5 md:mt-4' },
  { id: '04', title: '《PVD鍍膜機VR操作模擬系統》', type: 'UI/UX / VR INTERFACE', date: '2025年 9月17日', visual: 'vr', position: 'md:col-span-7 md:mt-28' },
]

const navLinks = [
  ['#people', '成員 PEOPLE'],
  ['#projects', '作品 WORK'],
  ['#contact', '聯絡 CONTACT'],
] as const

const menuOpen = ref(false)
const activeDot = ref(0)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="relative min-h-screen">
    <div class="pointer-events-none fixed inset-0 z-0">
      <TresCanvas clear-color="#e9e5d9">
        <TresPerspectiveCamera :position="[0, 0, 5]" />
        <TresAmbientLight :intensity="0.6" />
        <TresDirectionalLight :position="[3, 4, 5]" :intensity="0.8" />
      </TresCanvas>
    </div>

    <main class="relative z-10 min-h-screen bg-background font-[Noto_Sans_TC] text-foreground">
      <div class="mx-auto max-w-[1600px] overflow-hidden border-x border-border bg-background">
        <div class="flex h-9 items-center border-b border-border px-3 font-mono text-[9px] tracking-[.08em] text-muted-foreground sm:px-4">
          <div class="flex gap-1.5">
            <i class="size-2 rounded-full bg-[#c75d4a]" />
            <i class="size-2 rounded-full bg-[#cba85d]" />
            <i class="size-2 rounded-full bg-[#82937f]" />
          </div>
          <span class="mx-auto border border-border bg-card px-12 py-0.5">dm-df.studio / 2026</span>
          <span class="hidden sm:block">TW / 22.63°N</span>
        </div>

        <header class="relative flex h-16 items-center justify-between border-b border-border px-4 sm:px-6 md:px-8">
          <a href="#top" class="font-mono text-[11px] tracking-[.12em]">DMDF®</a>
          <nav class="hidden gap-7 font-mono text-[10px] tracking-[.12em] md:flex">
            <a href="#people">成員 PEOPLE</a>
            <a href="#projects">作品 WORK</a>
            <a href="#contact">聯絡 CONTACT</a>
          </nav>
          <button
            class="grid size-8 place-items-center border border-border md:hidden"
            aria-label="開啟選單"
            @click="toggleMenu"
          >
            <X v-if="menuOpen" :size="17" />
            <Menu v-else :size="17" />
          </button>
          <nav
            v-if="menuOpen"
            class="absolute left-0 top-full z-20 flex w-full flex-col border-b border-border bg-background px-4 py-3 font-mono text-xs tracking-[.1em] shadow-[0_12px_0_rgba(32,32,29,.12)] md:hidden"
          >
            <a
              v-for="[href, text] in navLinks"
              :key="href"
              :href="href"
              class="border-t border-border py-3"
              @click="closeMenu"
            >
              {{ text }}
            </a>
          </nav>
        </header>

        <section id="top" class="border-b border-border px-4 pb-10 pt-6 sm:px-6 md:px-8 md:pb-16">
          <div class="mb-12 flex justify-between">
            <Label>01 — DMD F, DESIGN COLLECTIVE</Label>
            <Label>KAOHSIUNG / TAIWAN</Label>
          </div>
          <h1 class="font-[Space_Grotesk] text-[clamp(4.1rem,15vw,14rem)] font-bold leading-[.76] tracking-[-.105em]">
            大<span class="font-[Noto_Serif_TC] text-[#cf664b]">明</span>大放<span class="ml-[.12em] text-[.29em] tracking-[-.065em]">設計工作室</span>
          </h1>
          <div class="mt-5 flex items-end justify-between border-t border-border pt-3">
            <p class="font-[Space_Grotesk] text-xl font-medium tracking-[-.055em] sm:text-3xl">Da ming Da Fun</p>
            <ArrowDownRight :size="28" :stroke-width="1.25" />
          </div>
          <div class="mt-12 grid gap-6 sm:grid-cols-12">
            <p class="font-mono text-[11px] leading-relaxed text-muted-foreground sm:col-span-4">為想法建立可被看見、使用與記住的形式。</p>
            <p class="font-mono text-[11px] leading-relaxed text-muted-foreground sm:col-span-5 sm:col-start-8">產品設計、平面設計、品牌建立、互動設計</p>
          </div>
        </section>

        <section id="people" class="border-b border-border py-12 md:py-20">
          <div class="mb-9 flex items-end justify-between px-4 sm:px-6 md:px-8">
            <div>
              <Label>02 — THE STUDIO</Label>
              <h2 class="mt-1 text-xl font-bold tracking-[-.04em]">各自專精，一起完成</h2>
            </div>
            <span class="font-mono text-[10px]">01—03</span>
          </div>
          <div class="grid grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-13 md:gap-x-4 md:gap-y-0 md:px-8">
            <article
              v-for="(person, i) in people"
              :key="person.name"
              :class="person.position"
            >
              <div class="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  :src="person.image"
                  :alt="`${person.name} ${person.role}`"
                  class="size-full object-cover grayscale-[22%] sepia-[11%] contrast-[.92] transition duration-700 hover:scale-[1.03]"
                />
                <span class="absolute bottom-2 left-2 bg-background px-1.5 py-1 font-mono text-[10px]">0{{ i + 1 }}</span>
              </div>
              <div class="mt-2 flex justify-between border-t border-foreground pt-2">
                <div>
                  <p class="font-bold tracking-[-.035em]">{{ person.name }}</p>
                  <p class="mt-1 font-mono text-[10px] tracking-[.06em] text-muted-foreground">{{ person.role }}</p>
                </div>
                <ArrowUpRight :size="16" :stroke-width="1.3" />
              </div>
            </article>
          </div>
          <div class="mt-14 flex justify-center gap-2 md:mt-20">
            <button
              v-for="dot in [0, 1, 2]"
              :key="dot"
              :aria-label="`第${dot + 1}位成員`"
              :class="[
                'size-2 rounded-full border border-foreground',
                activeDot === dot ? 'bg-foreground' : 'bg-transparent',
              ]"
              @click="activeDot = dot"
            />
          </div>
        </section>

        <section id="projects" class="py-12 md:py-20">
          <div class="flex items-end justify-between px-4 sm:px-6 md:px-8">
            <div>
              <Label>03 — SELECTED PROJECTS</Label>
              <h2 class="mt-1 text-xl font-bold tracking-[-.04em]">商業作品</h2>
            </div>
            <span class="font-mono text-[10px]">2025—26</span>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-x-4 gap-y-10 px-4 sm:px-6 md:grid-cols-12 md:px-8">
            <article
              v-for="project in projects"
              :key="project.id"
              :class="['group', project.position]"
            >
              <div class="aspect-[4/3] overflow-hidden">
                <ProjectVisual :type="project.visual" />
              </div>
              <div class="mt-2 border-t border-foreground pt-2">
                <div class="flex justify-between">
                  <Label>{{ project.type }}</Label>
                  <span class="font-mono text-[10px]">{{ project.id }}</span>
                </div>
                <h3 class="mt-7 font-[Space_Grotesk] text-2xl font-bold leading-[.98] tracking-[-.055em] sm:text-3xl">{{ project.title }}</h3>
                <div class="mt-7 flex items-end justify-between border-t border-border pt-2">
                  <span class="font-mono text-[10px] text-muted-foreground">{{ project.date }}</span>
                  <ArrowUpRight :size="18" />
                </div>
              </div>
            </article>
          </div>
        </section>

        <footer id="contact" class="border-t border-border">
          <div class="grid border-b border-border md:grid-cols-[auto_1fr]">
            <div class="flex min-h-40 w-full items-end justify-center border-b border-border pb-5 md:w-20 md:border-b-0 md:border-r">
              <CircleUserRound :size="25" :stroke-width="1.3" />
            </div>
            <div class="p-5 sm:p-7 md:p-9">
              <Label>CONTACT / 委託合作</Label>
              <a
                class="mt-5 block w-fit font-[Space_Grotesk] text-[clamp(1.8rem,5vw,4.6rem)] font-bold leading-none tracking-[-.075em] underline decoration-[#cf664b] decoration-[.12em] underline-offset-[.18em] transition-colors hover:text-[#cf664b]"
                href="mailto:0800guava@gmail.com"
              >
                0800guava@gmail.com
              </a>
            </div>
          </div>
          <div class="border-b border-border px-5 py-7 sm:px-7 md:px-9 md:py-10">
            <Label>LONG-TERM COLLABORATORS / 長期合作對象</Label>
            <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <span class="font-[Noto_Serif_TC] text-3xl font-bold tracking-[-.04em] sm:text-5xl">Sultani Coffee</span>
              <span class="font-[Space_Grotesk] text-3xl font-bold tracking-[-.075em] sm:text-5xl">Meow Party Café</span>
              <span class="grid size-8 place-items-center rounded-full bg-foreground text-background">
                <Plus :size="17" />
              </span>
            </div>
          </div>
          <div class="flex items-center justify-between px-5 py-4 sm:px-7 md:px-9">
            <span class="font-[Space_Grotesk] text-xl font-bold tracking-[-.075em]">大明大放設計工作室</span>
            <span class="font-mono text-[10px] text-muted-foreground">© 2026 / TAIWAN</span>
          </div>
        </footer>
      </div>
    </main>
  </div>
</template>
