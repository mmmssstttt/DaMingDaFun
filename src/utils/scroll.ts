/**
 * Smoothly scrolls the window to a target Y position over a given duration.
 * This bypasses native scroll-behavior which can be buggy on some OS/browsers.
 * 
 * @param targetPosition The Y coordinate to scroll to.
 * @param duration The duration in milliseconds. Default is 400ms.
 */
export function smoothScrollTo(targetPosition: number, duration: number = 400) {
  const startPosition = window.scrollY
  const distance = targetPosition - startPosition
  let startTime: number | null = null

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)

    // Ease-in-out cubic easing function for a smooth start and end
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2

    window.scrollTo(0, startPosition + distance * ease)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}
