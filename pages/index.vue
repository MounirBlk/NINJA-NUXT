<template>
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis
      omnis consequatur quod necessitatibus autem repellat aperiam quia atque
      fugit praesentium earum rerum minus, porro asperiores explicabo inventore
      animi ducimus. Itaque voluptatum facilis nobis, praesentium, quasi
      pariatur veniam veritatis quo eligendi, ratione libero impedit.
      Distinctio, delectus sapiente adipisci assumenda obcaecati aliquid
      exercitationem sit ad autem! Veritatis nihil accusamus recusandae esse?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis
      omnis consequatur quod necessitatibus autem repellat aperiam quia atque
      fugit praesentium earum rerum minus, porro asperiores explicabo inventore
      animi ducimus. Itaque voluptatum facilis nobis, praesentium, quasi
      pariatur veniam veritatis quo eligendi, ratione libero impedit.
      Distinctio, delectus sapiente adipisci assumenda obcaecati aliquid
      exercitationem sit ad autem! Veritatis nihil accusamus recusandae esse?
    </p>
  </div>
  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"></div>
  <div :class="classObject"></div>
</template>

<script>
const isActive = ref(true)
const hasError = ref(false)

const classObject = reactive({
  active: true,
  'text-danger': false,
})
/* const error = ref(null)
const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
})) */
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
