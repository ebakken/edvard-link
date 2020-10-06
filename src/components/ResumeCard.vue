<template>
  <div class="w-full flex items-start py-6">
    <img class="object-contain h20 w-20 sm:h-24 sm:w-24" :src="logo" :alt="title">
    <div class="pl-8 flex flex-col">
      <div class="text-3xl font-semibold"> {{ title }} </div>
      <div v-if="role" class="pb-1">{{ role }}</div>
      <div class="italic font-light">{{ time }}</div>
      <div class="text-lg font-light py-1">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'title',
    'description',
    'time',
    'logo',
    'role'
  ],
}
</script>
