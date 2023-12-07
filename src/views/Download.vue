<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <v-card variant="tonal" color="secondary" class="mx-auto" max-width="400">
        <v-container class="mx-auto">
          <v-row class="py-1">
            <v-col cols="2">
              <v-icon size="x-large" start>mdi-android</v-icon>
            </v-col>
            <v-col>
              <a href="https://play.google.com/store/apps/details?id=xyz.zeroblue.anysend">
                <img alt="Google Play" src="@/assets/google-play-badge.png" height="40">
              </a>
            </v-col>
          </v-row>
          <v-row class="py-1">
            <v-col cols="2">
              <v-icon size="x-large" start>mdi-apple-ios</v-icon>
            </v-col>
            <v-col>
              <a href="https://apps.apple.com/app/zeroblue-anysend/id6470259250">
                <img alt="App Store" src="@/assets/app-store-badge.svg" height="40">
              </a>
            </v-col>
          </v-row>
          <v-row class="py-1">
            <v-col cols="2">
              <v-icon size="x-large" start>mdi-apple</v-icon>
            </v-col>
            <v-col>
              <a href="https://apps.apple.com/app/zeroblue-anysend/id6470259250">
                <img alt="Mac App Store" src="@/assets/mac-app-store-badge.svg" height="40">
              </a>
            </v-col>
          </v-row>
          <v-row class="py-1">
            <v-col cols="2">
              <v-icon size="x-large" start>mdi-microsoft-windows</v-icon>
            </v-col>
            <v-col>
              <a href="https://www.microsoft.com/store/apps/9NPKG5X6W2SZ">
                <img alt="Microsoft Store" src="@/assets/microsoft-store-badge.svg" height="40">
              </a>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup>
</script>
