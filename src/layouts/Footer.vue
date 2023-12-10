<template>
  <v-footer color="secondary" height="40" :app=true>
    <v-btn variant="text" href="https://github.com/ZeroBlueXYZ/FileDirect">
      GitHub
    </v-btn>
    <v-btn variant="text" href="https://github.com/ZeroBlueXYZ/FileDirect/issues">
      {{ $t("message.footer.support") }}
    </v-btn>
    <v-btn variant="text" to="/privacy">
      {{ $t("message.footer.privacy") }}
    </v-btn>
    <v-spacer></v-spacer>
    <span>Copyright © 2023 xyz.zeroblue</span>
  </v-footer>
</template>

<script setup>
//
</script>
