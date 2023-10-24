<template>
  <v-footer color="secondary" height="68" :app=true>
    <v-container class="fill-height">
      <v-row justify="start">
        <v-col cols="auto">
          <span>Copyright © 2023 xyz.zeroblue</span>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto" class="py-1">
          <v-btn variant="text" href="https://github.com/ZeroBlueXYZ/AnySend/issues">
            {{ $t("message.footer.support") }}
          </v-btn>
        </v-col>
        <v-col cols="auto" class="py-1">
          <v-btn variant="text" to="/privacy">
            {{ $t("message.footer.privacy") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
//
</script>
