<template>
  <v-app-bar color="secondary">
    <v-app-bar-title>
      <v-avatar image="@/assets/logo.png" size=32></v-avatar>
      <v-divider class="ms-3" vertical></v-divider>
      <router-link to="/" active-class="no-decoration">AnySend</router-link>
    </v-app-bar-title>
    <v-btn to="/download">
      {{ $t("message.download.title") }}
    </v-btn>
  </v-app-bar>
</template>

<script setup>
//
</script>

<style>
.no-decoration {
  color: white;
  text-decoration: none;
}
</style>
