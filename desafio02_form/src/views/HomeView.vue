<template>
  <div>
    <NavBarHome />
    <Banner />
    <Destaques />
    <InvistaAgora />
    <FooterHome />
  </div>
</template>

<script>
import NavBarHome from "../components/NavBarHome.vue";
import Banner from "../components/Banner.vue";
import Destaques from "../components/Destaques.vue";
import InvistaAgora from "../components/InvistaAgora.vue";
import FooterHome from "../components/FooterHome.vue";

export default {
  name: "HomeView",
  components: {
    NavBarHome,
    Banner,
    Destaques,
    InvistaAgora,
    FooterHome,
  },
};
</script>
