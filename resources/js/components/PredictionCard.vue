<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :elevation="hover ? 12 : 2">
      <router-link :to="{ name: 'prediction', params: { packageId: id } }" class="text-decoration-none">
      <!-- <router-link :to="{}" class="text-decoration-none comingsoon"> -->
        <div class="game-banner">
          <v-img :src="banner" height="200px" class="align-center">
            <!-- <template v-slot>
            <v-card-title class="d-block text-center text-decoration-none">
              {{ name }}
            </v-card-title>
          </template> -->
            <template v-slot:placeholder>
              <v-skeleton-loader type="image" />
            </template>
          </v-img>
        </div>
      </router-link>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  mounted() {
    console.log('ID:', this.id);
  },
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    banner: {
      type: String,
      required: true
    }
  }
}
</script>
