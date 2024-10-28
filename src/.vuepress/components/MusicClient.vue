<script setup lang="ts">

import MusicGlobal from "./MusicGlobal.vue";
import {data} from "./ts/musicGlobalData.js"

const a = data;
</script>

<template>
  <MusicGlobal :audio-data=a />
</template>

<style scoped>

</style>