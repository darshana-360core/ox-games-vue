<template>
  <v-container class="home-page-bonus-cards pb-6">
    <!-- <v-row>
      <v-col class="text-left">
      </v-col>
    </v-row> -->
    <h3 class="text-h5 text-sm-h5 font-weight-medium mb-3">
      {{ $t('Earn free credits and bonuses') }}
    </h3>
    <v-row class="">
      <v-col v-if="signupBonus > 0" cols="12" md="6" lg="3" class="text-center">
        <v-hover v-slot="{ hover }">
          <v-card elevation="1" outlined shaped class="bonus-card" :class="{ hover }">
            <v-img src="/images/card-asset-1.svg" class="card-casino-asset"></v-img>
            <div class="card-icon mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 100 100"><g><path d="M76.33 39.246c-10.322 0-18.722 8.4-18.722 18.722s8.4 18.722 18.721 18.722 18.722-8.4 18.722-18.722-8.4-18.722-18.722-18.722zm6.951 23.235h-2.439v2.439c0 2.485-2.012 4.513-4.513 4.513s-4.512-2.013-4.512-4.513v-2.44h-2.44c-2.485 0-4.512-2.012-4.512-4.512s2.012-4.513 4.512-4.513h2.44v-2.44c0-2.484 2.012-4.512 4.512-4.512s4.513 2.013 4.513 4.513v2.44h2.44c2.484 0 4.512 2.012 4.512 4.512s-2.012 4.513-4.513 4.513zM38.902 52.392c-4.111 0-8.223-1.572-11.499-4.7-6.093-5.832-11.744-16.2-10.614-26.208.295-2.62.967-6.077 3.587-9.582 4.44-5.946 11.155-9.386 18.411-9.402 7.404 0 14.103 3.39 18.64 9.386 2.637 3.538 3.309 6.994 3.604 9.598v.082c.966 10.139-4.636 20.442-10.614 26.142-3.276 3.128-7.388 4.684-11.499 4.684z" fill="#ffffff" opacity="1"></path><path d="M52.272 57.968v-.019c.001-1.054-.769-1.958-1.82-2.03a24.006 24.006 0 0 0-1.626-.055H28.961a24.434 24.434 0 0 0-13.447 4.01C8.898 64.219 4.95 71.903 4.95 80.424v2.974c0 7.775 6.327 14.102 14.118 14.102H58.75c7.765 0 14.118-6.353 14.118-14.118 0-.923-.64-1.73-1.543-1.922-10.859-2.315-19.04-11.958-19.04-23.507z" fill="#ffffff" opacity="1"></path></g></svg>
              <!-- <v-avatar color="primary" size="60">
                <v-icon color="white" large>
                  mdi-account-plus
                </v-icon>
              </v-avatar> -->
            </div>
            <v-card-title class="d-block">
              {{ $t('Sign up bonus') }}
            </v-card-title>

            <v-card-text>
              <p>
                {{ $t('Sign up and get {0} free credits to play.', [signupBonus] ) }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col v-if="paymentsPackageIsEnabled && depositBonus > 0" cols="12" md="6" lg="3" class="text-center">
        <v-hover v-slot="{ hover }">
          <v-card elevation="5" outlined shaped class="bonus-card" :class="{ hover: hover }">
            <v-img src="/images/card-asset-2.svg" class="card-casino-asset"></v-img>
            <div class="card-icon mt-5">
              <!-- <v-avatar color="primary" size="60">
                <v-icon color="white" large>
                  mdi-cash-plus
                </v-icon>
              </v-avatar> -->
              <svg id="Layer_1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="80" height="80" data-name="Layer 1" fill="#ffffff"><path d="m28.63 21.55a4.679 4.679 0 0 0 -.73-.93 5.5 5.5 0 0 0 -9.22 2.51 5.3 5.3 0 0 0 -.14 2 5.5 5.5 0 0 0 10.96-.63 5.185 5.185 0 0 0 -.33-1.85 4.5 4.5 0 0 0 -.54-1.1zm-2.92 3.16a1.024 1.024 0 0 1 -.71.29v1a1 1 0 0 1 -2 0v-1a1.007 1.007 0 0 1 -.71-.29 1.017 1.017 0 0 1 -.23-1.06 1.055 1.055 0 0 1 .23-.36l1-1a1.008 1.008 0 0 1 1.42 0l.72.72.28.28a1.008 1.008 0 0 1 0 1.42z"/><path d="m24.68 2.13h-17.36a5.33 5.33 0 0 0 -5.32 5.32v12.35a5.333 5.333 0 0 0 5.32 5.33h9.71a6.817 6.817 0 0 1 .2-2.37 6.98 6.98 0 0 1 5.3-5.1 4.5 4.5 0 0 1 1.97-8.54h3.5v2h-3.5a2.5 2.5 0 1 0 0 5h3.5v2h-1.13a7.029 7.029 0 0 1 2.09 1.44 5.619 5.619 0 0 1 .93 1.19c.01.01.01.02.02.03a5.333 5.333 0 0 0 .09-.98v-12.35a5.33 5.33 0 0 0 -5.32-5.32zm-16.68 16.87a1 1 0 0 1 -2 0v-11a1 1 0 0 1 2 0zm17.75-4.38h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"/></svg>
            </div>
            <v-card-title class="d-block">
              {{ $t('Deposit bonus') }}
            </v-card-title>

            <v-card-text>
              <p>
                {{ $t('Get {0}% on your first deposit from {1} credits.', [depositBonus, config('settings.bonuses.deposit.first.threshold')]) }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="6" lg="3" class="text-center">
        <v-hover v-slot="{ hover }">
          <v-card elevation="2" outlined shaped class="bonus-card" :class="{ hover: hover }">
            <v-img src="/images/card-asset-2.svg" class="card-casino-asset"></v-img>
            <div class="card-icon mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m48.6 14.34 1.56-1.56c-.57-.78-.91-1.74-.91-2.78 0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75c-1.04 0-1.99-.35-2.78-.91l-1.56 1.56c-.34-.36-.7-.72-1.06-1.06zM14.34 48.6l-1.56 1.56c-.78-.57-1.74-.91-2.78-.91-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75 4.75-2.13 4.75-4.75c0-1.04-.35-1.99-.91-2.78l1.56-1.56c-.36-.34-.72-.7-1.06-1.06zm39.66.65c-1.04 0-1.99.35-2.78.91l-1.56-1.56c-.34.36-.7.72-1.06 1.06l1.56 1.56c-.57.78-.91 1.74-.91 2.78 0 2.62 2.13 4.75 4.75 4.75s4.75-2.13 4.75-4.75-2.13-4.75-4.75-4.75zm-44-34.5c1.04 0 1.99-.35 2.78-.91l1.56 1.56c.34-.36.7-.72 1.06-1.06l-1.56-1.56c.57-.78.91-1.74.91-2.78 0-2.62-2.13-4.75-4.75-4.75S5.25 7.38 5.25 10s2.13 4.75 4.75 4.75zM49.25 32c0 9.51-7.74 17.25-17.25 17.25S14.75 41.51 14.75 32 22.49 14.75 32 14.75 49.25 22.49 49.25 32zm-12.5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75c0 1.79-1.46 3.25-3.25 3.25h-8c-.86 0-1.68-.34-2.3-.95a3.23 3.23 0 0 1-.95-2.3c0-1.79 1.46-3.25 3.25-3.25h1.08c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H24c-2.62 0-4.75 2.13-4.75 4.75 0 1.26.49 2.45 1.39 3.36.91.89 2.1 1.39 3.36 1.39h8c2.62 0 4.75-2.13 4.75-4.75zm8 0c0-1.26-.49-2.45-1.39-3.36-.91-.89-2.1-1.39-3.36-1.39h-8c-2.62 0-4.75 2.13-4.75 4.75 0 .41.34.75.75.75s.75-.34.75-.75c0-1.79 1.46-3.25 3.25-3.25h8c.86 0 1.68.34 2.3.95.62.62.95 1.44.95 2.3 0 1.79-1.46 3.25-3.25 3.25h-1.08c-.41 0-.75.34-.75.75s.34.75.75.75H40c2.62 0 4.75-2.13 4.75-4.75zm10 0c0 12.54-10.21 22.75-22.75 22.75S9.25 44.54 9.25 32 19.46 9.25 32 9.25 54.75 19.46 54.75 32zm-4 0c0-10.34-8.41-18.75-18.75-18.75S13.25 21.66 13.25 32 21.66 50.75 32 50.75 50.75 42.34 50.75 32z" fill="#ffffff" opacity="1"></path></g></svg>
              <!-- <v-avatar color="primary" size="60">
                <v-icon color="white" large>
                  mdi-link
                </v-icon>
              </v-avatar> -->
            </div>
            <v-card-title class="d-block">
              {{ $t('Affiliate program') }}
            </v-card-title>

            <v-card-text>
              <p>
                {{ $t('Refer your friends to the casino and get bonuses when they play games.') }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col v-if="faucetEnabled" cols="12" md="6" lg="3" class="text-center">
        <v-hover v-slot="{ hover }">
          <v-card elevation="3" outlined shaped class="bonus-card" :class="{ hover: hover }">
            <v-img src="/images/card-asset-3.svg" class="card-casino-asset"></v-img>
            <div class="card-icon mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 510 510"><g><path d="M510 180v-60h-30v30h-45V75h-75V30h15V0h-45v75h-30V15h-30v60h-30V15h-30v180h48c6.191-17.459 22.865-30 42.42-30 24.814 0 45 20.187 45 45 0 24.812-20.186 45-45 45-19.555 0-36.228-12.541-42.42-30h-78V0h-60v30h30v45H75v75H30v-30H0v60h75v31H15v30h60v29H15v30h60v30H0v60h30v-30h45v75h75v45h-30v30h60v-75h30v60h30v-60h30v60h30V345h-77.58c-6.192 17.459-22.865 30-42.42 30-24.812 0-45-20.186-45-45 0-24.813 20.188-45 45-45 19.555 0 36.227 12.541 42.42 30H330v195h60v-30h-30v-45h75v-75h45v30h30v-60h-75v-30h60v-30h-60v-29h60v-30h-60v-31z" fill="#ffffff" opacity="1" class=""></path><circle cx="300.398" cy="209.97" r="15" fill="#ffffff" opacity="1" class=""></circle><circle cx="180.398" cy="329.97" r="15" fill="#ffffff" opacity="1" class=""></circle></g></svg>
              <!-- <v-avatar color="primary" size="60">
                <v-icon color="white" large>
                  mdi-chip
                </v-icon>
              </v-avatar> -->
            </div>
            <v-card-title class="d-block">
              {{ $t('Faucet') }}
            </v-card-title>

            <v-card-text>
              <p>
                {{ $t('Top up your balance with extra free credits on a regular basis.') }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col v-if="chatRainEnabled" cols="12" md="6" lg="3" class="text-center">
        <v-hover v-slot="{ hover }">
          <v-card elevation="4" outlined shaped class="bonus-card" :class="{ hover: hover }">
            <v-img src="/images/card-asset-4.svg" class="card-casino-asset"></v-img>
            <div class="card-icon mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 512 512"><g><path d="M410.49 110.29c-34.16 0-65.84 17-84.74 45.49-2.44 3.68-7.41 4.69-11.09 2.24-3.68-2.44-4.69-7.41-2.24-11.09 19.79-29.83 51.7-48.78 86.89-52.11-1.23-11.51-6.21-22.2-14.42-30.66-9.92-10.23-23.25-15.86-37.53-15.86-8.71 0-17.37 2.21-25.06 6.38a8.014 8.014 0 0 1-9.68-1.58c-23.02-24.77-55.59-38.98-89.38-38.98-66.56 0-121.23 54.08-121.88 120.56-.02 2.22-.97 4.33-2.61 5.83s-3.83 2.25-6.04 2.07c-2.49-.2-4.91-.31-7.2-.31-47.15 0-85.51 38.31-85.51 85.4s38.36 85.4 85.52 85.4h324.97c55.97 0 101.51-45.48 101.51-101.37 0-55.92-45.54-101.41-101.51-101.41zM118.53 378.4c.01-2.87-1.52-5.52-4-6.96s-5.55-1.43-8.03.02c-4.71 2.75-10.74 5.82-17.12 9.07-22.42 11.43-50.33 25.66-61.78 45.48-6.4 11.08-8.1 23.99-4.79 36.36 3.32 12.37 11.25 22.71 22.35 29.1a47.758 47.758 0 0 0 23.88 6.39c16.6 0 32.77-8.59 41.66-23.93 11.47-19.86 9.83-51.17 8.52-76.33-.35-7.09-.71-13.79-.69-19.2zM262.4 378.41a7.986 7.986 0 0 0-4-6.96 8.003 8.003 0 0 0-8.03.01c-4.71 2.74-10.71 5.8-17.07 9.04-22.44 11.44-50.37 25.67-61.83 45.5-6.42 11.08-8.13 23.99-4.82 36.36 3.32 12.38 11.26 22.72 22.38 29.11a47.74 47.74 0 0 0 23.9 6.4c16.59 0 32.75-8.59 41.62-23.95 11.45-19.83 9.84-51.1 8.54-76.22-.37-7.12-.72-13.85-.69-19.29zM406.24 378.4c.01-2.87-1.52-5.52-4-6.96s-5.55-1.43-8.03.02c-4.71 2.75-10.74 5.82-17.12 9.07-22.42 11.43-50.33 25.66-61.78 45.47-6.41 11.07-8.12 23.97-4.81 36.33 3.31 12.39 11.26 22.73 22.37 29.14 7.53 4.34 15.76 6.4 23.89 6.4 16.59 0 32.75-8.59 41.62-23.93 11.5-19.87 9.86-51.19 8.55-76.36-.36-7.08-.71-13.77-.69-19.18z" fill="#ffffff" opacity="1"></path></g></svg>
              <!-- <v-avatar color="primary" size="60">
                <v-icon color="white" large>
                  mdi-weather-pouring
                </v-icon>
              </v-avatar> -->
            </div>
            <v-card-title class="d-block">
              {{ $t('Chat rain') }}
            </v-card-title>

            <v-card-text>
              <p>
                {{ $t('Be active in chat and take a chance to get up to {0} credits in reward.', [config('settings.bonuses.rain.amounts')[0]]) }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { config } from '~/plugins/config'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ paymentsPackageIsEnabled: 'package-manager/paymentsIsEnabled' }),
    signupBonus () {
      return config('settings.bonuses.sign_up')
    },
    depositBonus () {
      return config('settings.bonuses.deposit.first.pct')
    },
    faucetEnabled () {
      return config('settings.bonuses.faucet.amount') > 0
    },
    chatRainEnabled () {
      return !!config('settings.bonuses.rain.frequency')
    }
  },

  methods: {
    config
  }
}
</script>
<style lang="scss" scoped>
.bonus-card {
  transition: all 0.5s;
  min-height: 220px;

  &.hover {
    // border-color: var(--v-primary-base) !important;
  }
}
</style>
