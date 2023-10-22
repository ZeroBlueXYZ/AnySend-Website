<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <v-card variant="tonal" color="secondary" class="mx-auto" max-width="600">
        <v-container class="mx-auto">
          <v-row class="py-1">
            <v-col cols="2">
              <v-icon size="x-large" start>mdi-microsoft-windows</v-icon>
            </v-col>
            <v-col>
              <v-row>
                <v-chip size="large" class="ma-1">.msix x64</v-chip>
                <v-chip size="large" class="ma-1">.msix x86</v-chip>
                <v-chip size="large" class="ma-1">.msix arm64</v-chip>
              </v-row>
              <v-row>
                <v-chip size="large" class="ma-1">.zip x64</v-chip>
                <v-chip size="large" class="ma-1">.zip x86</v-chip>
                <v-chip size="large" class="ma-1">.zip arm64</v-chip>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="py-1">
            <v-col cols="2">
              <v-icon size="x-large" start>mdi-linux</v-icon>
            </v-col>
            <v-col>
              <v-row>
                <v-chip size="large" class="ma-1">.tar x64</v-chip>
                <v-chip size="large" class="ma-1">.tar x86</v-chip>
                <v-chip size="large" class="ma-1">.tar arm64</v-chip>
              </v-row>
              <v-row>
                <v-chip size="large" class="ma-1">.AppImage x64</v-chip>
                <v-chip size="large" class="ma-1">.AppImage x86</v-chip>
                <v-chip size="large" class="ma-1">.AppImage arm64</v-chip>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="py-1">
            <v-col cols="2">
              <v-icon size="x-large" start>mdi-apple</v-icon>
            </v-col>
            <v-col>
              <a href="https://apps.apple.com">
                <img alt="Mac App Store" src="@/assets/mac-app-store-badge.svg" height="40">
              </a>
            </v-col>
          </v-row>
          <v-row class="py-1">
            <v-col cols="2">
              <v-icon size="x-large" start>mdi-apple-ios</v-icon>
            </v-col>
            <v-col>
              <a href="https://apps.apple.com">
                <img alt="App Store" src="@/assets/app-store-badge.svg" height="40">
              </a>
            </v-col>
          </v-row>
          <v-row class="py-1">
            <v-col cols="2">
              <v-icon size="x-large" start>mdi-android</v-icon>
            </v-col>
            <v-col>
              <a href="https://play.google.com">
                <img alt="Google Play" src="@/assets/google-play-badge.png" height="40">
              </a>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('windows')
</script>
