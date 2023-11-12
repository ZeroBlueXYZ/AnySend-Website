<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <v-card variant="tonal" color="secondary" class="mx-auto" max-width="600">
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
          <!-- <v-row class="py-1">
            <v-col cols="2">
              <v-icon size="x-large" start>mdi-linux</v-icon>
            </v-col>
            <v-col>
              <v-row class="mx-0">
                <v-btn :href="linuxDownloadUrl" size="large">
                  {{ $t("message.download.title") }}
                </v-btn>
              </v-row>
              <v-row class="mx-0">
                <v-code>
                  {{ $t("message.download.dependencies") }}: apt-get install libgtk-3-0 libblkid1 liblzma5
                </v-code>
              </v-row>
            </v-col>
          </v-row> -->
        </v-container>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const apiUrl = 'https://api.github.com/repos/ZeroBlueXYZ/AnySend/releases'
const linuxDownloadUrl = ref(apiUrl)

onMounted(async () => {
  var assets = await getReleaseAssets()
  for (var asset of assets) {
    if (asset['name'].endsWith('.tar.gz')) {
      linuxDownloadUrl.value = asset['browser_download_url']
    }
  }
})

async function getReleaseAssets () {
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
