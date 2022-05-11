<template>
  <div>
    <div class="center-destaque01">
      <img :src="SteveJobs" class="--img--steve" />

      <div class="descricao-steve">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur <br />
          reprehenderit consectetur voluptate tenetur eum<br />
          voluptatibus quibusdam nisi. Temporibus esse<br />
          ipsa tempore aut at cum nisi quasi.
        </p>

        <div class="linha"></div>

        <p>
          Lorem ipsum dolor sit amet consectetur <br />
          reprehenderit consectetur voluptate tenetur eum<br />
          voluptatibus quibusdam nisi. Temporibus esse<br />
          ipsa tempore aut at cum nisi quasi.
        </p>
        <BtnGloobal background="#ed2f5d" label="VER MAIS" />
      </div>
    </div>

    <div class="center-destaque02">
      <div class="descricao-ChrisGardner">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur <br />
          reprehenderit consectetur voluptate tenetur eum<br />
          voluptatibus quibusdam nisi. Temporibus esse<br />
          ipsa tempore aut at cum nisi quasi.
        </p>

        <div class="linha"></div>

        <p>
          Lorem ipsum dolor sit amet consectetur <br />
          reprehenderit consectetur voluptate tenetur eum<br />
          voluptatibus quibusdam nisi. Temporibus esse<br />
          ipsa tempore aut at cum nisi quasi.
        </p>
        <BtnGloobal background="#ed2f5d" label="VER MAIS" />
      </div>

      <img :src="ChrisGardner" class="--img--ChrisGardner" />
    </div>
  </div>
</template>


<script>
import BtnGloobal from "./BtnGloobal.vue";

export default {
  name: "DestaquesDeHomeView",
  components: {
    BtnGloobal,
  },
  data() {
    return {
      SteveJobs: "/img/SteveJobs_2.jpg",
      ChrisGardner: "/img/ChrisGardner.jpeg",
    };
  },
};
</script>


<style scoped>
.center-destaque01 {
  min-width: 800px;
  max-width: 1000px;

  height: 500px;

  margin: 0px auto;
  margin-bottom: 100px;

  display: flex;
}
.center-destaque02 {
  min-width: 800px;
  max-width: 1000px;

  height: 500px;

  margin: 0px auto;
  margin-bottom: 130px;

  display: flex;
}

.--img--steve {
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: right;

  border: 3px solid #d1d1d1;
}
.--img--ChrisGardner {
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: right;

  border: 3px solid #d1d1d1;
}

.descricao-steve {
  width: 50%;
  padding: 0px 0px 0px 13%;

  text-align: left;
}
.descricao-ChrisGardner {
  width: 50%;
  padding: 0px 13% 0px 0%;

  text-align: right;
}

h1 {
  font-size: 42px;
  padding: 0px 0px 40px;
}

p {
  margin: 30px 0px;
}

.linha {
  width: calc(120% - 12vh);
  border-bottom: 2px solid #ed2f5d;
}
</style>