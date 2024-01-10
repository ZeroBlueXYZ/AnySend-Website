<template>
  <v-footer color="secondary" :app=true>
    <v-col>
      <v-row justify="center">
        <v-btn variant="text" class="text-none" href="https://github.com/ZeroBlueXYZ/FileDirect">
          {{ $t("message.footer.github") }}
        </v-btn>
        <v-btn variant="text" class="text-none" href="https://github.com/ZeroBlueXYZ/FileDirect/issues">
          {{ $t("message.footer.support") }}
        </v-btn>
        <v-btn variant="text" class="text-none" to="/privacy">
          {{ $t("message.footer.privacy") }}
        </v-btn>
      </v-row>
      <v-row justify="center" class="text-caption">
        <span >
          Copyright © 2023-2024 Zhaoming Zhang
        </span>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script setup>
//
</script>
