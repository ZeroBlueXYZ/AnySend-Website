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
      <v-divider class="border-opacity-0" thickness="40"></v-divider>
      <v-card variant="text" max-width="600" class="mx-auto">
        <v-row justify="space-between">
          <v-col v-for="store in stores">
            <a :href="store.appUrl">
              <img :alt="store.name" :src="store.badgeUrl" height="40">
            </a>
          </v-col>
        </v-row>
      </v-card>
      <v-divider class="border-opacity-0" thickness="20"></v-divider>
      <v-row justify="center">
        <v-btn variant="text" prepend-icon="mdi-download" class="text-none" href="https://github.com/ZeroBlueXYZ/FileDirect/releases/latest">
          {{ $t("message.home.moreDownloadOptions") }}
        </v-btn>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import microsoftStoreBadge from '@/assets/microsoft-store-badge.svg';
import macAppStoreBadge from '@/assets/mac-app-store-badge.svg';
import appStoreBadge from '@/assets/app-store-badge.svg';
import googlePlayBadge from '@/assets/google-play-badge.png';

class Store {
  constructor (name, appUrl, badgeUrl) {
    this.name = name;
    this.appUrl = appUrl;
    this.badgeUrl = badgeUrl;
  }
}

const stores = ref([
  new Store('Microsoft Store', 'https://www.microsoft.com/store/apps/9NPKG5X6W2SZ', microsoftStoreBadge),
  new Store('Mac App Store', 'https://apps.apple.com/app/zeroblue-anysend/id6470259250', macAppStoreBadge),
  new Store('App Store', 'https://apps.apple.com/app/zeroblue-anysend/id6470259250', appStoreBadge),
  new Store('Google Play', 'https://play.google.com/store/apps/details?id=xyz.zeroblue.anysend', googlePlayBadge),
])

</script>
