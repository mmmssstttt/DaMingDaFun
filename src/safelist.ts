/**
 * Tailwind v4 Safelist
 *
 * These class strings are used dynamically via `content.json` and would
 * otherwise be purged because Tailwind's scanner only sees JS/Vue sources.
 * Importing this file into `main.ts` guarantees the scanner encounters them.
 *
 * Update this list whenever `position` values change in content.json.
 */

// People grid positions
// 江明倢 Sho
// 陳子璇 Eleanor
// 蔡孟軒 Alvin
const _peopleSafelist = [
  'md:col-span-4', 'md:col-start-1', 'md:mt-28',
  'md:col-span-4', 'md:col-start-5',
  'md:col-span-4', 'md:col-start-9', 'md:mt-44',
]

// Projects grid positions
// 01 《小封神藏寶圖》
// 02 《劍道賽計分板》
// 03 《PVD鍍膜機外觀設計》
// 04 《PVD鍍膜機VR操作模擬系統》
const _projectsSafelist = [
  'md:col-span-7',
  'md:col-span-5', 'md:mt-24',
  'md:col-span-5', 'md:mt-4',
  'md:col-span-7', 'md:mt-28',
]

export const _tailwindSafelist = [..._peopleSafelist, ..._projectsSafelist]
