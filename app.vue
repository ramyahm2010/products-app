<template>
  <v-layout>
     <v-app-bar :elevation="2" color="primary"> <!-- add color prop -->
      <v-app-bar-title>تطبيق المنتجات</v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
  </v-layout>
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'ar',
    dir: 'rtl',
  },
});
</script>

<style>
body {
  font-family: 'Cairo', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
