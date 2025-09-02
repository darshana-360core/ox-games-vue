<template>
  <v-menu v-model="menu" offset-y left>
    <!-- v-if="!isMobile" -->
    <template #activator="{ on }">
      <v-btn
        v-show="!isProviderGamePage"
        icon
        rounded
        class="px-2 width-auto"
        v-on="on"
        density="compact"
        size="small"
        :style="{
          height: isMobile ? '36px' : '36px',
          backgroundColor: 'rgba(255,255,255,0.15)'
        }"
      >
        <!-- <v-icon class="mr-1">
          {{ creditsIcon }}
        </v-icon> -->
        <v-img src="/images/ox-coin.jpg" class="coin-icon"></v-img>
        <animated-number v-if="account" :number="account.balance" class="max-md:w-12 ellipsis ml-1" />
      </v-btn>
    </template>
    <v-list style="padding: 16px 0;" class="theme-dropdown">
      <v-subheader class="" style="height: auto; font-size: 16px; margin-bottom: 5px; font-weight: 500;">
        {{ $t('Account') }}
      </v-subheader>
      <v-list-item style="min-height: 40px;" :to="{ name: 'user.account.transactions' }" link exact>
        <v-list-item-icon style="margin: 10px 0;">
          <!-- <v-icon>mdi-format-list-bulleted</v-icon> -->
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class="v-icon mr-3"><g><path d="M25 29a.997.997 0 0 1-.707-.293l-2-2A1 1 0 0 1 23 25h7a1 1 0 1 1 0 2h-4.586l.293.293A.999.999 0 0 1 25 29zM30 23h-7a1 1 0 1 1 0-2h4.586l-.293-.293a.999.999 0 1 1 1.414-1.414l2 2A1 1 0 0 1 30 23z" fill="currentColor" opacity="1" class=""></path><path d="M20.228 24.853a3 3 0 0 1 .548-.858A2.976 2.976 0 0 1 20 22c0-1.654 1.346-3 3-3h2.17c.147-.417.387-.799.709-1.121a2.982 2.982 0 0 1 4.121-.1V10a5 5 0 0 0-5-5H6a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h14.18c.017-.049.029-.099.049-.147zM24 8h1.5c.827 0 1.5.673 1.5 1.5V11a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2zM7 22H5.5c-.827 0-1.5-.673-1.5-1.5V19a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2zm0-12H6v1a1 1 0 0 1-2 0V9.5C4 8.673 4.673 8 5.5 8H7a1 1 0 0 1 0 2zm8.5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="currentColor" opacity="0.8" class=""></path></g></svg>
        </v-list-item-icon>
        <v-list-item-content style="padding: 0;">
          <v-list-item-title>{{ $t('Transactions') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item style="min-height: 40px;" v-if="paymentsPackageIsEnabled" :to="{ name: 'user.account.deposits.index' }" link exact>
        <v-list-item-icon class="mr-3" style="margin: 10px 0;">
          <v-icon>mdi-cash-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-content style="padding: 0;">
          <v-list-item-title>{{ $t('Deposits') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item style="min-height: 40px;" v-if="paymentsPackageIsEnabled" :to="{ name: 'user.account.withdrawals.index' }" link exact>
        <v-list-item-icon class="mr-3" style="margin: 10px 0;">
          <v-icon>mdi-cash-minus</v-icon>
        </v-list-item-icon>
        <v-list-item-content style="padding: 0;">
          <v-list-item-title>{{ $t('Withdrawals') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- <v-list-item style="min-height: 40px;" v-if="faucetEnabled" :to="{ name: 'user.account.faucet' }" link exact>
        <v-list-item-icon style="margin: 10px 0;">
          
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 160 160" style="enable-background:new 0 0 512 512" xml:space="preserve" class="v-icon mr-3"><g><path d="M80.01 45c-19.28 0-34.97 15.7-34.97 35s15.69 35 34.97 35 34.96-15.7 34.96-35-15.68-35-34.96-35z" fill="currentColor" opacity="0.4" class=""></path><path d="M80 0C35.89 0 0 35.89 0 80s35.89 80 80 80c44.12 0 80-35.89 80-80S124.12 0 80 0zm60.44 115.26-21.45-12.87A45.384 45.384 0 0 1 102.41 119l12.85 21.43A69.511 69.511 0 0 1 80.01 150v-25c-8.11 0-15.72-2.17-22.3-5.95L45.39 140.8a70.45 70.45 0 0 1-26.19-26.18l21.77-12.33A44.78 44.78 0 0 1 35.04 80H10.01v.31c-.01-.1-.01-.2-.01-.31 0-12.77 3.46-24.74 9.45-35.05l21.77 12.34a45.25 45.25 0 0 1 16.13-16.13L45.33 19.23A69.535 69.535 0 0 1 80 10h.01v25c8.31 0 16.09 2.28 22.77 6.22l12.55-21.61a70.41 70.41 0 0 1 25.47 25.77l-21.75 12.33A44.773 44.773 0 0 1 124.97 80H150c0 6.43-.87 12.65-2.5 18.56a69.75 69.75 0 0 1-7.06 16.7z" fill="currentColor" opacity="1" class=""></path></g></svg>
        </v-list-item-icon>
        <v-list-item-content style="padding: 0;">
          <v-list-item-title>{{ $t('Faucet') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->
    </v-list>
  </v-menu>
</template>

<script>
import AnimatedNumber from '~/components/AnimatedNumber'
import { mapGetters, mapState } from 'vuex'
import { config } from '~/plugins/config'

export default {
  components: {
    AnimatedNumber
  },

  data () {
    return {
      menu: false,
      isMobile: false
    }
  },

  mounted () {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.checkMobile)
  },

  methods: {
    checkMobile () {
      this.isMobile = window.innerWidth < 768
    }
  },

  computed: {
    ...mapState('auth', ['account']),
    ...mapGetters({
      paymentsPackageIsEnabled: 'package-manager/paymentsIsEnabled'
    }),
    creditsIcon () {
      return config('settings.interface.credits_icon')
    },
    faucetEnabled () {
      return config('settings.bonuses.faucet.amount') > 0
    },
    isProviderGamePage () {
      return this.$route.name === 'provider.game'
    }
  }
}
</script>
