<template>
  <v-menu v-model="menu" :close-on-content-click="false" offset-y>
    <template #activator="{ on }">
      <v-btn 
        icon 
        v-on="on"
        :style="{
          width: isMobile ? '40px' : '35px',
          height: isMobile ? '40px' : '35px',
          backgroundColor: 'rgba(255,255,255,0.15)',
          borderRadius: '100%'
        }"
      >
      <!-- style="height: 40px;width: 40px;background-color: rgba(255,255,255,0.15);" -->
        <v-avatar size="32">
          <img :src="user.avatar_url" :alt="user.name">
        </v-avatar>
      </v-btn>
    </template>

    <v-list class="theme-dropdown">
      <v-list-item>
        <v-list-item-avatar>
          <img :src="user.avatar_url" :alt="user.name">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
      <v-list-item style="min-height: 40px;" :to="{ name: 'users.show', params: { id: user.id } }" @click="userMenu = false" v-on="on">
        <v-list-item-icon style="margin: 10px 0;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="v-icon mr-3">
            <circle cx="12" cy="8" r="4" fill="currentColor"></circle>
            <path d="M5.33788 17.3206C5.99897 14.5269 8.77173 13 11.6426 13H12.3574C15.2283 13 18.001 14.5269 18.6621 17.3206C18.79 17.8611 18.8917 18.4268 18.9489 19.0016C19.0036 19.5512 18.5523 20 18 20H6C5.44772 20 4.99642 19.5512 5.0511 19.0016C5.1083 18.4268 5.20997 17.8611 5.33788 17.3206Z" fill="currentColor" fill-opacity="0.24"></path>
          </svg>
        </v-list-item-icon>
        <v-list-item-content style="padding: 0;">
          <v-list-item-title>{{ $t('Profile') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item style="min-height: 40px;" :to="{ name: 'user.security' }" @click="userMenu = false" v-on="on">
        <v-list-item-icon style="margin: 10px 0;">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class="v-icon mr-3"><g><path d="M13.59 27.02c-.06.03-.12.06-.19.09-.13.06-.26.08-.4.08s-.27-.03-.4-.08a13.51 13.51 0 0 1-8.1-12.38V9.25c0-.39.23-.75.59-.91l7.5-3.41c.26-.12.56-.12.83 0l7.5 3.41c.36.16.59.52.59.91v1.8c.33-.03.66-.05 1-.05.86 0 1.7.12 2.5.31V7c0-.39-.23-.75-.59-.91l-11.01-5c-.26-.12-.56-.12-.83 0l-10.99 5C1.23 6.25 1 6.61 1 7v7.73c0 6.83 4.06 12.98 10.35 15.65l1.26.54c.13.05.26.08.39.08s.27-.03.39-.08l1.26-.54c.46-.2.91-.42 1.35-.65-.95-.76-1.77-1.67-2.41-2.71z" fill="currentColor" opacity="0.8" class=""></path><path d="M19.5 11.44V9.9L13 6.95 6.5 9.9v4.83c0 4.26 2.35 8.14 6.06 10.13-.36-1.06-.56-2.19-.56-3.36 0-4.75 3.17-8.76 7.5-10.06z" fill="currentColor" opacity="0.5" class=""></path><path d="M22.5 13c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5 8.5-3.81 8.5-8.5-3.81-8.5-8.5-8.5zm4.03 7.13-4.11 4.15a1 1 0 0 1-.71.3c-.26 0-.52-.11-.71-.29l-2.53-2.53c-.39-.39-.39-1.02 0-1.42.39-.39 1.02-.39 1.42 0l1.82 1.82 3.4-3.43a.987.987 0 0 1 1.41 0c.39.39.4 1.02 0 1.41z" fill="currentColor" opacity="1" class=""></path></g></svg>
        </v-list-item-icon>
        <v-list-item-content style="padding: 0;">
          <v-list-item-title>{{ $t('Security') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item style="min-height: 40px;" :to="{ name: 'user.affiliate' }" @click="userMenu = false" v-on="on">
        <v-list-item-icon style="margin: 10px 0;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="v-icon mr-3">
            <path opacity="0.5" d="M14.1625 18.4876L13.4417 19.2084C11.053 21.5971 7.18019 21.5971 4.79151 19.2084C2.40283 16.8198 2.40283 12.9469 4.79151 10.5583L5.51236 9.8374" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M9.8374 14.1625L14.1625 9.8374" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            <path opacity="0.5" d="M9.8374 5.51236L10.5583 4.79151C12.9469 2.40283 16.8198 2.40283 19.2084 4.79151C21.5971 7.18019 21.5971 11.053 19.2084 13.4417L18.4876 14.1625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
          </svg>
        </v-list-item-icon>
        <v-list-item-content style="padding: 0;">
          <v-list-item-title>{{ $t('Affiliate program') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- <v-list-item>
        <v-list-item-action class="">
          <v-tooltip bottom>
            <template #activator="{ on }">
              <v-btn icon :to="{ name: 'users.show', params: { id: user.id } }" @click="userMenu = false" v-on="on">
                <v-icon>mdi-account</v-icon>
              </v-btn>
            </template>
            <span>{{ $t('Profile') }}</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template #activator="{ on }">
              <v-btn icon :to="{ name: 'user.security' }" @click="userMenu = false" v-on="on">
                <v-icon>mdi-shield-lock</v-icon>
              </v-btn>
            </template>
            <span>{{ $t('Security') }}</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template #activator="{ on }">
              <v-btn icon :to="{ name: 'user.affiliate' }" @click="userMenu = false" v-on="on">
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </template>
            <span>{{ $t('Affiliate program') }}</span>
          </v-tooltip>
        </v-list-item-action>
      </v-list-item> -->
      <!-- <v-list-item style="min-height: 40px;" :to="{ name: 'users.show', params: { id: user.id } }" @click="userMenu = false" v-on="on">
        <v-list-item-icon style="margin: 10px 0;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="v-icon mr-3">
            <circle cx="12" cy="8" r="4" fill="currentColor"></circle>
            <path d="M5.33788 17.3206C5.99897 14.5269 8.77173 13 11.6426 13H12.3574C15.2283 13 18.001 14.5269 18.6621 17.3206C18.79 17.8611 18.8917 18.4268 18.9489 19.0016C19.0036 19.5512 18.5523 20 18 20H6C5.44772 20 4.99642 19.5512 5.0511 19.0016C5.1083 18.4268 5.20997 17.8611 5.33788 17.3206Z" fill="currentColor" fill-opacity="0.24"></path>
          </svg>
        </v-list-item-icon>
        <v-list-item-content style="padding: 0;">
          <v-list-item-title>{{ $t('Profile') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->
      <v-list-item style="min-height: 40px;" @click="logout">
        <v-list-item-icon style="margin: 10px 0;">
          <svg enable-background="new 0 0 512 512" height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg" class="v-icon mr-3"><g><path d="m475.2 333.2c-12.4-6-27.4-.7-33.4 11.7-16.6 34.5-42.4 63.7-74.7 84.5-33.1 21.3-71.5 32.6-111.1 32.6-113.6 0-206-92.4-206-206s92.4-206 206-206c39.6 0 78 11.3 111.2 32.5 32.3 20.7 58.1 50 74.7 84.5 6 12.4 20.9 17.7 33.4 11.7s17.7-20.9 11.7-33.4c-20.6-42.9-52.6-79.2-92.8-104.9-41.2-26.4-89-40.4-138.2-40.4-68.4 0-132.7 26.6-181 75-48.4 48.3-75 112.6-75 181s26.6 132.7 75 181c48.4 48.4 112.6 75 181 75 49.2 0 97-14 138.2-40.5 40.1-25.8 72.2-62.1 92.8-104.9 5.9-12.5.7-27.4-11.8-33.4z" fill="currentColor" opacity=".5"></path><path d="m269.3 353.3c4.9 4.9 11.3 7.3 17.7 7.3s12.8-2.4 17.7-7.3l62.9-62.9c9.2-9.2 14.2-21.4 14.2-34.3 0-13-5.1-25.2-14.2-34.3l-62.9-62.9c-9.8-9.8-25.6-9.8-35.4 0s-9.8 25.6 0 35.4l36.9 36.9h-142.1c-13.8 0-25 11.2-25 25s11.2 25 25 25h142.2l-36.9 36.9c-9.8 9.6-9.8 25.4-.1 35.2z" fill="currentColor"></path></g></svg>
        </v-list-item-icon>
        <v-list-item-content style="padding: 0;">{{ $t('Log out') }}</v-list-item-content>
      </v-list-item>
      <!-- <v-card-actions>
        <v-spacer />
        <v-btn text @click="logout">
          <v-icon>mdi-logout</v-icon>
          {{ $t('Log out') }}
        </v-btn>
      </v-card-actions> -->
    </v-list>
    <!-- <v-card>
      <v-divider />
    </v-card> -->
  </v-menu>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      menu: false
    }
  },

  computed: {
    ...mapState('auth', ['user', 'account', 'token'])
  },

  methods: {
    async logout () {
      // Log out
      await this.$store.dispatch('auth/logout')

      // Redirect to home page
      if (this.$route.name !== 'home') {
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>
