<template>
  <!-- <v-parallax src="/images/home/celebration.jpg" height="400" class="home-page-biggest-win mt-10">
  </v-parallax> -->
  <section class="home-page-biggest-win position-relative">
    <v-container class="">
      <!-- <v-img src="/images/round-frame.svg" class="card-round-frame animate-pulse"></v-img> -->
      <div class="d-flex justify-center fill-height">
        <div class="align-self-center">
          <v-row>
            <v-col class="d-flex align-center justify-center flex-column">
              <!-- <v-icon size="50" class="mr-5" color="white">
                mdi-medal
              </v-icon> -->
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" x="0" y="0" viewBox="0 0 510.441 510.441"  class="v-icon theme--dark white--text"><g><path d="M239.058 82.177 199.886 7.996A15 15 0 0 0 186.622 0H68.744A15.002 15.002 0 0 0 55.48 22.005l80.412 152.281c21.606-15.713 46.419-27.269 73.264-33.461zM441.696 0H323.819a14.998 14.998 0 0 0-13.363 8.187l-65.109 127.701c3.088-.141 6.191-.222 9.313-.222 45.599 0 87.72 15.164 121.598 40.706L455.06 21.813A15.001 15.001 0 0 0 441.696 0zM254.661 165.666c-95.055 0-172.388 77.333-172.388 172.388s77.333 172.388 172.388 172.388 172.388-77.333 172.388-172.388-77.333-172.388-172.388-172.388zm0 286.084c-61.833 0-112.138-50.305-112.138-112.138s50.305-112.138 112.138-112.138 112.138 50.305 112.138 112.138S316.494 451.75 254.661 451.75z" fill="currentColor" opacity="1" class=""></path><circle cx="254.661" cy="339.612" r="82.138" transform="rotate(-67.48 254.779 339.56)" fill="currentColor" opacity="0.6" class=""></circle></g></svg>
              <h3 class="text-h5 text-lg-h5">
                {{ $t('Biggest win') }}
              </h3>
            </v-col>
          </v-row>
          <v-row v-if="game" class="my-5">
            <v-col class="text-center">
              <v-chip label outlined large color="grey lighten-3" class="font-weight-thin pa-4">
                <span class="text-h6 text-lg-h5">{{ decimal(game.win) }} {{ $t('credits ') }}</span>
              </v-chip>
            </v-col>
          </v-row>
          <v-row v-if="game">
            <v-col class="d-flex align-center justify-center">
              <user-avatar :user="game.account.user" :size="50" class="mr-5" />
              <div class="d-flex flex-column">
                <span class="subtitle-1">{{ game.account.user.name }}</span>
                <span class="body-1 grey--text text--lighten-1">{{ $t('won in {0} {1}', [game.title, game.updated_ago]) }}</span>
              </div>
            </v-col>
          </v-row>
          <v-row v-if="!game">
            <v-col>
              <div class="subtitle-1 font-weight-thin text-center">
                {{ $t('No one won big yet') }}
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
import { mapState } from 'vuex'
import UserAvatar from '~/components/UserAvatar'
import { decimal } from '~/plugins/format'

export default {
  components: { UserAvatar },

  computed: {
    ...mapState('game', { game: 'biggestWin' })
  },

  methods: {
    decimal
  }
}
</script>
<!-- <style lang="scss" scoped>
.darken-50 {
  animation: glow 5s linear infinite;
}

@keyframes glow {
  0% {
    background: rgba(0, 0, 0, 0.4);
  }

  50% {
    background: rgba(0, 0, 0, 0.6);
  }

  100% {
    background: rgba(0, 0, 0, 0.4);
  }
}
</style> -->
