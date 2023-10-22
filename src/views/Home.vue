<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <v-img height="200" src="@/assets/logo.png" />
      <v-divider class="border-opacity-0" thickness="20"></v-divider>
      <h1 class="text-h2 text-center">
        AnySend
      </h1>
      <v-divider class="border-opacity-0" thickness="20"></v-divider>
      <h2 class="text-center font-weight-regular ">
        {{ $t("message.home.description") }}
      </h2>
      <v-divider class="border-opacity-0" thickness="20"></v-divider>
      <v-card variant="tonal" color="secondary" class="mx-auto" max-width="600">
        <v-card-item>
          <v-card-title>
            {{ $t("message.home.attributeFree") }}
          </v-card-title>
          <v-card-subtitle class="text-subtitle-1">
            {{ $t("message.home.attributeFreeDescription") }}
          </v-card-subtitle>
        </v-card-item>
      </v-card>
      <v-card variant="tonal" color="secondary" class="mx-auto" max-width="600">
        <v-card-item>
          <v-card-title>
            {{ $t("message.home.attributePrivate") }}
          </v-card-title>
          <v-card-subtitle class="text-subtitle-1">
            {{ $t("message.home.attributePrivateDescription") }}
          </v-card-subtitle>
        </v-card-item>
      </v-card>
      <v-card variant="tonal" color="secondary" class="mx-auto" max-width="600">
        <v-card-item>
          <v-card-title>
            {{ $t("message.home.attributeSecure") }}
          </v-card-title>
          <v-card-subtitle class="text-subtitle-1">
            {{ $t("message.home.attributeSecureDescription") }}
          </v-card-subtitle>
        </v-card-item>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup>
</script>
