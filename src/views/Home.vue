<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <v-img height="200" src="@/assets/logo.png" />
      <v-divider class="border-opacity-0" thickness="20"></v-divider>
      <h1 class="text-h2 text-center">
        FileDirect
      </h1>
      <v-divider class="border-opacity-0" thickness="20"></v-divider>
      <h2 class="text-center font-weight-regular ">
        {{ $t("message.home.shortDescription") }}
      </h2>
      <v-divider class="border-opacity-0" thickness="4"></v-divider>
      <h3 class="text-center font-weight-regular ">
        {{ $t("message.home.fullDescription") }}
      </h3>
    </v-responsive>
  </v-container>
</template>

<script setup>
</script>
