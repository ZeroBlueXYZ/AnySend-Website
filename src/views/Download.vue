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
              <v-btn :href="windowsDownloadUrl" size="large">
                {{ $t("message.download.title") }}
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="py-1">
            <v-col cols="2">
              <v-icon size="x-large" start>mdi-linux</v-icon>
            </v-col>
            <v-col>
              <v-btn :href="linuxDownloadUrl" size="large">
                {{ $t("message.download.title") }}
              </v-btn>
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
import { onMounted, ref } from 'vue'

const apiUrl = 'https://api.github.com/repos/ZeroBlueXYZ/AnySend/releases'
const windowsDownloadUrl = ref(apiUrl)
const linuxDownloadUrl = ref(apiUrl)

onMounted(async () => {
  var assets = await getReleaseAssets()
  for (var asset of assets) {
    if (asset['name'].endsWith('.exe')) {
      windowsDownloadUrl.value = asset['browser_download_url']
    } else if (asset['name'].endsWith('.zip')) {
      linuxDownloadUrl.value = asset['browser_download_url']
    }
  }
})

async function getReleaseAssets(){
  return await fetch(apiUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json'
    }
  }).then((resp) => {
    if (resp.ok) return resp.json().then(
      (data) => {
        return data[0]["assets"]
      })
  })
}
</script>
