<template>
  <div id="app">
    <div class="flex h-screen">
      <div class="m-auto py-16 px-8 md:px-16 bg-white w-11/12 max-w-md">
        <div class="text-4xl font-bold text-center">URL Shortener</div>
        <input v-model="key" v-on:keydown="status='writing'" class="mt-8 bg-white border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" placeholder="/KEY">
        <input v-model="url" v-on:keydown="status='writing'" class="mt-8 bg-white border border-gray-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="url" placeholder="URL">
        <div v-if="status=='existing'" class="mt-8 bg-red-200 py-2 px-4">Key <span class="font-bold italic">{{key}}</span> already in use</div>
        <div v-if="status=='missing'" class="mt-8 bg-yellow-200 py-2 px-4">Missing values</div>
        <div v-if="status=='created'" class="mt-8 bg-green-200 py-2 px-4">
          Created <a class="font-bold" :href="`https://edvard.link/${key}`">edvard.link/{{key}}</a>
        </div>
        <div @click="createShortURL()" class="cursor-pointer mt-8 bg-green-600 text-white text-center py-2 rounded-lg font-bold">Create</div>
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
      key: '',
      url: '',
      status: '',
    }
  },
  methods: {
    createShortURL() {
      if (this.key && this.url) {
        const link = db.collection('links').doc(this.key)
        link.get()
          .then((docSnapshot) => {
            if (docSnapshot.exists) {
              this.status = 'existing';
            } else {
              link.set({
                url: this.url,
              }).then(() => {
                this.status = 'created';
              })
            }
        });
      } else {
        this.status = 'missing';
      }
    },
  }
}
</script>
