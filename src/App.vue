<template>
  <div id="app" class="h-full">
    <div class="fixed border-b border-gray-200 w-full bg-white">
      <div class="flex pb-2 pt-3 px-8 md:px-20 h-full justify-between items-center max-w-4xl mx-auto">
        <router-link to='/' class="text-2xl font-bold hidden sm:block">edvardbakken</router-link>
        <router-link to='/' class="text-2xl font-bold sm:hidden">ed.</router-link>
        <div class="font-medium"></div>
        <div class="font-medium"></div>
        <div class="font-medium"></div>
        <router-link to='/projects' class="font-medium">Projects</router-link>
        <router-link to='/resume' class="font-medium">Resume</router-link>
        <router-link to='/blog' class="font-medium">Blog</router-link>
        <router-link to='/contact' class="font-medium">Contact</router-link>
      </div>
    </div>
    <div class="min-h-full flex flex-col">
      <div class="w-full max-w-4xl p-8 pt-24 min-h-full flex-auto flex mx-auto">
        <router-view></router-view>
      </div>
      <div class="bg-white w-full border-t">
        <div class="max-w-4xl text-center mx-auto p-12">
          <div class="text-2xl font-sembold p-2">edvardbakken</div>
          <div class="text-gray-300 p-2">Copyright © 2020</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>
