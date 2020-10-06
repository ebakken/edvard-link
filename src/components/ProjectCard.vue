
<template>
  <div class="py-6">
    <div class="text-2xl sm:text-4xl font-bold text-white bg-gray-900 pt-3 pb-1 px-6 sm:px-8">
      <a :href="url">{{title}}</a>
      <a class="font-thin" :href="url">{{tld}}</a>
    </div>
    <div class="text-lg sm:text-xl font-light p-6 sm:p-8 bg-gray-200">
      {{body}}
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'title',
    'tld',
    'url',
    'body'
  ],
}
</script>
