<template>
  <div id="app">
    <div class="flex h-screen">
      <div class="m-auto py-16 px-8 md:px-16 bg-white w-11/12 max-w-md">
        <div class="text-4xl font-bold text-center">URL Shortener</div>
        <div v-if="loading" class="mt-8 text-center">Redirecting ...</div>
        <div v-else class="mt-8 text-center">Redirect not found</div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from './firebase'

export default {
  name: 'App',
  data() {
    return {
      loading: true,
    }
  },
  created() {
    db.collection('links')
      .doc(this.$route.params.key)
      .get()
      .then((snap) => {
        if (snap.exists) {
          const url = snap.data().url;
          window.location.href = url.match(/^[a-zA-Z]+:\/\//) ? url : 'https://' + url;
        } else {
          this.loading = false;
        }
      })
  },
}
</script>
