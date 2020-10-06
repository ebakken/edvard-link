<template>
  <div class="w-full md:px-12">
    <div class="text-5xl py-12 font-bold">Experience</div>
    <ResumeCard
      title="Tipio"
      description="Creating a marketplace for group purchases"
      time="2020 - Current"
      logo="/images/tipio.png"
      role="Software developer"
    />
    <ResumeCard
      title="Stily"
      description="Utilizing AI to give every man their own stylist"
      time="2019 - 2020"
      logo="/images/stily.png"
      role="CTO and Co-founder"
    />
    <ResumeCard
      title="Resolute Labs"
      description="Transforming aerial patrol with technology and machine learning"
      time="2019"
      logo="/images/resolute-labs.png"
      role="Summer-intern"
    />
    <ResumeCard
      title="Zendera"
      description="Creating a smarter, simpler transport management system"
      time="2018 - 2019"
      logo="/images/zendera.png"
      role="Full-stack developer"
    />
    <ResumeCard
      title="University of Oslo"
      description="TA and Jack of all trades at the Robotics and AI research group"
      time="2017"
      logo="/images/uio.png"
      role="Scientific assistant"
    />
    <div class="text-5xl py-12 font-bold">Education</div>
    <ResumeCard
      title="UC Berkeley"
      description="Graduate level summer program in entrepreneurship"
      time="2019"
      logo="/images/berkeley.png"
    />
    <ResumeCard
      title="University of Oslo"
      description="60 ETC of graduate level entrepreneurship studies"
      time="2018 - 2019"
      logo="/images/uio.png"
    />
    <ResumeCard
      title="University of Oslo"
      description="MSc in Informatics focusing on machine learning and image recognition"
      time="2012 - 2018"
      logo="/images/uio.png"
    />
    <ResumeCard
      title="Yonsei University"
      description="Exchange semester studying computer science and Korean language"
      time="2015"
      logo="/images/yonsei.png"
    />
  </div>
</template>

<script>
import ResumeCard from './ResumeCard'

export default {
  components: {
    ResumeCard
  },
}
</script>
