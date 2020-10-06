<template>
  <div class="max-w-3xl md:mx-12">
    <div class="text-5xl py-12 font-bold">Projects</div>
    <ProjectCard
      title="Joine"
      tld=".no"
      url="https://joine.no"
      body="Filling the empty seats at cinemas, bowling centers, escape rooms and more by using dynamic pricing"
    />
    <ProjectCard
      title="Edvard"
      tld=".link"
      url="https://edvard.link"
      body="My own custom URL shortener built with Vue, Firebase and Node"
    />
    <ProjectCard
      title="Gutta"
      tld=".xyz"
      url="https://gutta.xyz"
      body="Web-app for locating your buddies"
    />
    <ProjectCard
      title="Opprykksportalen"
      tld=".web.app"
      url="https://opprykksportalen.web.app"
      body="Get an quick overview of the works of a scientist"
    />
  </div>
</template>

<script>
import ProjectCard from './ProjectCard'

export default {
  components: {
    ProjectCard
  },
}
</script>
