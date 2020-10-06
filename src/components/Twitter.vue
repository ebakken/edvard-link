<template>
  <div class="">
    <div class="">
      Twitter
    </div>

    <div class="flex">
      <div class="m-auto py-16 px-8 md:px-16 bg-white w-11/12 max-w-md">
        <div class="text-4xl font-bold text-center">Twitter test</div>
      </div>
    </div>
  </div>
</template>

<script>
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'NUln0W5ddLGK6whecZ3VYJW5K',
  consumer_secret: 'nFbXQbAuhZrf9YOdLfKbrWT42JWBhAhbjXs6zG1R1YsiGcxEDq',
  bearer_token: 'AAAAAAAAAAAAAAAAAAAAAHtYHAEAAAAAFYrBwRipufUSIeKqvG0%2F%2BI6LnWo%3D2F7YtTU9PMsfrLYmlNS12080BbSNYCCXuBlHZfiVjt25jzGwyb'
});

client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  stream.on('data', function(event) {
    console.log(event && event.text);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});

export default {

}
</script>
