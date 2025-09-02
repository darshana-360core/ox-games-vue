<template>
  <v-hover v-slot="{ hover }">
    <v-card :elevation="hover ? 12 : 2">
      <!-- When authenticated -->
      <router-link
        v-if="authenticated"
        :to="game.route"
        class="game-thumb-block"
      >
        <img
          :src="game.banner"
          class="game-banner align-center text-center"
          :class="{ hover }"
        />
      </router-link>

      <!-- When NOT authenticated -->
      <div
        v-else
        class="game-thumb-block"
        @click="triggerLogin"
      >
        <img
          :src="game.banner"
          class="game-banner align-center text-center"
          :class="{ hover }"
        />
      </div>

      <v-card-title class="text-no-wrap">
        {{ game.name }}
      </v-card-title>

      <v-btn
        v-if="authenticated"
        fab
        color="primary"
        class="play-button"
        :class="{ hover }"
        :to="game.route"
      >
        <v-icon color="grey lighten-5">
          mdi-play
        </v-icon>
      </v-btn>

      <v-btn
        v-else
        fab
        color="primary"
        class="play-button"
        :class="{ hover }"
        @click="triggerLogin"
      >
        <v-icon color="grey lighten-5">
          mdi-play
        </v-icon>
      </v-btn>
      <!-- <div class="d-flex game-card-details">
        <div class="flex-grow-1">
          <v-card-title class="text-no-wrap">
            {{ game.name }}
          </v-card-title>
          <v-card-subtitle v-if="game.provider">
            {{ game.provider.name }}
          </v-card-subtitle>
        </div>
        <v-card-text class="pa-0">
          <v-btn color="primary" :to="game.route">
            {{ $t('Play') }}
            <v-icon color="grey lighten-5">
              mdi-play
            </v-icon>
          </v-btn>
        </v-card-text>
      </div> -->
    </v-card>
  </v-hover>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({ authenticated: 'auth/check' })
  },
  methods: {
    showAlert() {
      // alert('Login required');
      // openModal('login');
      triggerLogin();
    },
    openModal(tab) {
      this.activeTab = tab
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    triggerLogin() {
      this.$root.$emit('trigger-auth-modal', 'login')
    }
  }
}
</script>
<style lang="scss" scoped>
.game-banner {
  &.v-image {
    &::v-deep {
      .v-responsive__sizer {
        height: 100% !important;
        transition: all 0.5s;
        background: rgba(0, 0, 0, 0);
      }

      .v-skeleton-loader {
        .v-skeleton-loader__image {
          height: 100%;
        }
      }
    }

    &.hover {
      &::v-deep {
        .v-responsive__sizer {
          background: rgba(0, 0, 0, 0.55) !important;
        }
      }
    }

    .v-chip {
      cursor: pointer;
    }

    .play-button {
      transition: all 0.5s;
      opacity: 0;

      &.hover {
        opacity: 1;
      }
    }
  }
}
</style>
