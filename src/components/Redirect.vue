<template>
  <div id="app">
    <div class="flex">
      <div class="m-auto p-8 bg-white w-11/12 max-w-md">
        <div class="text-4xl font-bold text-center">URL Shortener</div>
        <div v-if="loading" class="mt-8 text-center">Redirecting ...</div>
        <div v-else class="mt-8 text-center">Redirect not found</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
