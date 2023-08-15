import { onMounted, onUnmounted, reactive } from 'vue'
export function usePoint() {
  let position = reactive({
    x: 0,
    y: 0,
  })

  onMounted(() => {
    window.addEventListener('click', (event) => {
      position.x = event.screenX
      position.y = event.screenY
    })
  })

  onUnmounted(() => {
    window.removeEventListener('click', (event) => {})
  })

  return position
}
