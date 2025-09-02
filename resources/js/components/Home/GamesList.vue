<template>
  <v-container class="home-page-original-games mt-4 pb-8">
    <dynamic-games-list
      :title="$t('Original Games')"
      :games="games"
      :display-style="config('settings.content.home.games.display_style')"
      :display-count="config('settings.content.home.games.display_count')"
      :load-count="config('settings.content.home.games.load_count')"
    />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { config } from '~/plugins/config'
import DynamicGamesList from '~/components/Home/DynamicGamesList'

export default {
  components: { DynamicGamesList },

  computed: {
    ...mapGetters({ games: 'package-manager/getOriginalGames' })
  },

  methods: {
    config
  }
}
</script>
<style lang="scss" scoped>
//@media screen and (max-width: 576px) {
  .home-page-original-games::v-deep {
    overflow: hidden;
    .slick-list{
      overflow: visible;
      .slick-slide:not(.slick-active){
        opacity: 50%;
      }
    }
    .display-style-card .v-image {
      height: 195px;
    }
  }
//}
</style>
