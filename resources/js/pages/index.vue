<template>
  <div>
    <dynamic-template
      :template="html"
      :components="{ Slider, GamesList, RecentWin, ProviderGamesList, ProvidersList, Predictions, PrimaryFooter, BonusCards, Features, Raffles, BiggestWin, RecentGames, Search, Social, poweredBy }"
    />
  </div>
</template>
<script>
import axios from 'axios'
import DynamicTemplate from '~/components/DynamicTemplate'
import Slider from '~/components/Home/Slider'
import RecentWin from '~/components/Home/RecentWin'
import poweredBy from '~/components/Home/poweredBy'
import GamesList from '~/components/Home/GamesList'
import ProviderGamesList from '~/components/Home/ProviderGamesList'
import ProvidersList from '~/components/Home/ProvidersList'
import Predictions from '~/components/Home/Predictions'
import PrimaryFooter from '~/components/Home/PrimaryFooter'
import ProvablyFair from '~/components/Home/ProvablyFair'
import BonusCards from '~/components/Home/BonusCards'
import Features from '~/components/Home/Features'
import Raffles from '~/components/Home/Raffles'
import BiggestWin from '~/components/Home/BiggestWin'
import RecentGames from '~/components/Home/RecentGames'
import Search from '~/components/Home/Search'
import Social from '~/components/Home/Social'
import { mapGetters } from 'vuex'

export default {
  components: { DynamicTemplate },

  metaInfo () {
    return {
      title: this.$t('Unlock the Fun with Games 9')
    }
  },

  data () {
    return {
      RecentWin,
      Slider,
      GamesList,
      ProviderGamesList,
      ProvidersList,
      Predictions,
      PrimaryFooter,
      // ProvablyFair,
      poweredBy,
      // BonusCards,
      Features,
      // Raffles,
      // BiggestWin,
      RecentGames,
      Search,
      Social,
      html: ''
    }
  },

  computed: {
    ...mapGetters({ authenticated: 'auth/check' })
  },

  async created () {
    const { data: { html } } = await axios.get('/api/pages/home')
    this.html = `<div>${html}</div>`
    if (this.authenticated) {
      // update user balance
      this.$store.dispatch('auth/fetchUser')
    }
  }
}
</script>
