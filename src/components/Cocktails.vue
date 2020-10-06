<template>
  <div class="">
    <div class="">
      Cocktails
    </div>

    <div class="flex">
      <div class="m-auto py-16 px-8 md:px-16 bg-white w-11/12 max-w-md">
        <div class="text-4xl font-bold text-center">Twitter test</div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
const cocktailRequestBody = {
  "method":"GET",
  "url":"https://the-cocktail-db.p.rapidapi.com/list.php",
  "headers":{
  "content-type":"application/octet-stream",
  "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
  "x-rapidapi-key":"1094fd2577mshca90460e1f76a7cp1039f9jsnf67c581ad562",
  "useQueryString":true
  }
}

axios({
  ...cocktailRequestBody,
  "params":{
    "c":"list",
  }
})
.then((response)=>{
  console.log(response)
})
.catch((error)=>{
  console.log(error)
})

export default {
  data() {
    return {
      glasses: [],
      alcoholic: [],
      ingredients: [],
      categories: [],
    }
  }
}
</script>
