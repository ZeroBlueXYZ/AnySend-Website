<template>
  <v-footer color="secondary" height="68" :app=true>
    <v-container class="fill-height">
      <v-row justify="space-between">
        <v-col cols="auto">
          <span>© 2023 zeroblue.xyz</span>
        </v-col>
        <v-col cols="auto" class="py-1">
          <v-btn variant="text" href="https://github.com/ZeroBlueXYZ/AnySend/issues">
            {{ $t("message.footer.support") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
//
</script>
