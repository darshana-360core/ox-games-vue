<template>
  <v-app :class="[navbarVisible ? 'permanent-navbar' : 'temporary-navbar', miniVariant ? 'mini-active' : '']" :style="style">
    <system-bar v-if="!(isMobile && (isGamePage || isPredictionPage || isProviderGamePage)) && systemBarEnabled && authenticated" />

    <v-navigation-drawer
      border="0"
      v-model="navigationDrawer"
      :mini-variant.sync="isMobile ? false : miniVariant"
      app
      :permanent="!isMobile"
      :temporary="isMobile"
      :color="navBarBackground"
      :width="miniVariant ? '56px' : '260px'"
      :class="[{'gameplaying': playing}, miniVariant ? 'px-3' : 'px-4',{'game-page':isGamePage}]"
      class="border-0"
      >
      <!-- :permanent="navbarVisible"
      :temporary="!navbarVisible" -->
      <!-- <v-list-item>
        <v-list-item-content class="py-5">
          <v-list-item-title class="title">
            {{ appName }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider /> -->
      <!-- <span>{{ this.isMobile }}</span> -->
      <button v-if="isMobile" @click.stop="navigationDrawer = !navigationDrawer" class="mobile-drawer-close">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><circle cx="12" cy="12" r="10" fill="#ffffff" opacity="0.3" class=""></circle><path d="M15.71 14.29a.996.996 0 0 1-.71 1.7c-.26 0-.51-.1-.71-.29L12 13.41 9.71 15.7c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41L10.58 12 8.29 9.71A.996.996 0 1 1 9.7 8.3l2.29 2.29 2.29-2.29a.996.996 0 1 1 1.41 1.41L13.4 12l2.29 2.29z" fill="#ffffff" opacity="1" class=""></path></g></svg>
        <span v-if="!isGamePage">Close</span>
      </button>
      <div class="flex gap-2">
        <div class="balance-box d-flex align-center justify-start">
          <div class="oc-icon">
            <img src="/images/ox-icon.png" width="24" />
          </div>
          <div class="oc-details">
            <span>OC</span>
            <div class="d-flex align-center">
              <div class="oc-price">$ {{ Number(ocPrice).toFixed(2) }}</div>
            </div>
          </div>
        </div>
        <div class="balance-box d-flex align-center justify-start">
          <div class="oc-icon">
            <img src="/images/oxinox-icon.png" width="24" />
          </div>
          <div class="oc-details">
            <span>OXINOX</span>
            <div class="d-flex align-center">
              <div class="oc-price">$ {{ Number(oxinoxPrice).toFixed(2) }}</div>
            </div>
          </div>
        </div>
      </div>
      <main-menu />
      <!-- <v-divider /> -->
      <template v-if="user && user.is_admin">
        <admin-main-menu />
      </template>
    </v-navigation-drawer>

    <chat v-if="authenticated && chatEnabled" v-model="chatDrawer" :permanent="!isMobile" :temporary="isMobile" @message="setUnreadChatMessagesCount" />

    <template v-if="isMobile && (isGamePage || isPredictionPage || isProviderGamePage)">
      <v-speed-dial fixed top left>
        <template #activator>
          <!-- <v-btn small outlined icon @click.stop="navigationDrawer = !navigationDrawer">
            <v-icon small>
              mdi-menu
            </v-icon>
            
          </v-btn> -->
          <!-- <v-btn class="mr-1 ml-0" @click.stop="navigationDrawer = !navigationDrawer" density="compact" text icon style="width: 40px; height: 40px; min-width: 40px; padding: 4px;background-color: var(--v-primary-darken3);">
            <div class="v-btn__content">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6" width="24" height="24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </div>
          </v-btn> -->
          <v-toolbar-title class="header-logo d-flex align-center pl-0">
            <router-link :to="{ name: 'home' }">
              <v-avatar :size="[isMobile ? 35 : 40]">
                <v-img :src="appLogoUrl" :alt="appName" />
              </v-avatar>
            </router-link>
            <div class="ml-3 d-none d-md-block text-h5">
              {{ appName }}
            </div>
          </v-toolbar-title>
        </template>
      </v-speed-dial>
      <v-speed-dial fixed top right style="top: 8px;">
        <template #activator>
          <v-btn
            v-show="!isProviderGamePage"
            small
            :to="{ name: 'user.account.transactions' }"
            exact
            color="rgba(255,255,255,0.2)"
            style="backdrop-filter:  blur(6px);"
            >
            <!-- outlined -->
            <v-img src="/images/ox-coin.jpg" class="coin-icon mr-1" style="width: 22px;"></v-img>
            <!-- <v-icon small class="mr-1">
              {{ creditsIcon }}
            </v-icon> -->
            <animated-number v-if="account" :number="account.balance" />
          </v-btn>
        </template>
      </v-speed-dial>
    </template>
    <v-app-bar v-else app :clipped-left="!navbarVisible" :color="appBarBackground">
      <!-- <v-app-bar-nav-icon v-if="!navbarVisible" @click.stop="navigationDrawer = !navigationDrawer" /> -->
      <!-- <v-app-bar-nav-icon @click.stop="navigationDrawer = !navigationDrawer" /> -->
      <button v-if="!isMobile" class="v-app-bar__nav-icon v-btn2 v-btn--icon  max-md:mr-1  ml-0 rounded-lg !justify-center" style="width: 35px; height: 35px; background-color: rgba(255, 255, 255, 0.15);" @click="toggleMiniVariant">
        <div class="v-btn__content"> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6" width="24" height="24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </div>
      </button>
      <v-toolbar-title class="header-logo d-flex align-center pl-2  ">
        <router-link :to="{ name: 'home' }">
          
          <div>
            <img src="/images/ox-icon2.png" width="40" />
          </div>
        </router-link>
        <div class="ml-3 d-none d-sm-block text-h5">
          {{ appName }}
        </div>
      </v-toolbar-title>

      <v-spacer />

      <template v-if="!token && !authenticated">
        <!-- <v-btn :to="{ name: 'login' }" class="secondary darken3">
          {{ $t('Log in') }}
        </v-btn> -->
        <!-- <v-btn :to="{ name: 'register' }" class="primary ml-2">
          {{ $t('Sign up') }}
        </v-btn> -->
        <div class="space-x-1">
          <v-btn @click="openModal('login')" border class="secondary-outline">{{ $t('Log in') }}</v-btn>
          <v-btn @click="openModal('signup')" class="primary">{{ $t('Sign up') }}</v-btn>
        </div>
      </template>
      <template v-else-if="authenticated">
        <div class="d-flex align-center header-action g-4">
          <game-search-modal v-if="!isMobile">
            <template #default="{ on }">
              <v-btn
                v-on="on"
                density="compact"
                text
                icon
                :style="{
                  width: isMobile ? '35px' : '40px',
                  height: isMobile ? '35px' : '40px',
                  minWidth: isMobile ? '35px' : '40px',
                  padding: '4px',
                  backgroundColor: 'rgba(255,255,255,0.15)'
                }"
                style="width: 40px; height: 40px; min-width: 40px; padding: 4px;background-color: rgba(255,255,255,0.15);"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".5"></path> </g></svg>
              </v-btn>
            </template>
          </game-search-modal>
          <account-menu />
          <v-btn density="comfortable" height="36" color="primary" class="primary" v-on="on" @click="triggerDeposit">
            Deposit
          </v-btn>
          <settings-menu />
          <DepositModal />
          <user-menu />
          <v-btn v-if="chatEnabled && !isMobile" icon @click="chatDrawer = !chatDrawer">
            <v-badge :content="unreadChatMessagesCount" :value="unreadChatMessagesCount" overlap>
              <v-icon>{{ chatDrawer ? 'mdi-message' : 'mdi-message-outline' }}</v-icon>
            </v-badge>
          </v-btn>
        </div>
      </template>
    </v-app-bar>

    <v-main :style="mainStyle">
      <message />
      <router-view id="content" :class="{'pt-4':!isGamePage}" />
    </v-main>

    <!-- <transition name="fade">
    </transition> -->
    <v-dialog v-model="showModal" @click.self="closeModal" max-width="30rem" content-class="auth-modal-dialog mx-4">
      <div class="game-frame-2 auth-modal  flex pa-0 max-w-lg ">
        <!-- Tabs -->
        <!-- <div class="tab-buttons">
          <button :class="{ active: activeTab === 'login' }" @click="activeTab = 'login'">Login</button>
          <button :class="{ active: activeTab === 'signup' }" @click="activeTab = 'signup'">Signup</button>
        </div> -->

        <div class="w-full  max-w-lg">
          <div class="w-full max-w-lg relative h-full ">
            <button class="button button-m w-8 h-8 center bg-black bg-opacity-30 rounded-lg d-flex items-center justify-center grow-0 md:hidden absolute top-4 right-4 z-30" type="button" @click="closeModal()">
              <svg class="w-5 h-5 fill-white/40" viewBox="0 0 32 32"><path d="M6.32321 9.23054L13.0927 16L6.32321 22.7694L9.23051 25.6767L15.9998 18.9074L22.7695 25.6771L25.6768 22.7698L18.9073 16.0004L25.6768 9.23095L22.7695 6.32365L16.0002 13.0929L9.23051 6.32324L6.32321 9.23054Z"></path></svg>
            </button>
            <!-- <img src="/images/ox-login-bg.jpg" class="w-full h-full object-cover  max-w-lg absolute top-0 left-0" alt=""> -->
            <img :src="`/images/ox-login-bg.jpg?v=${Date.now()}`" class="w-full h-full object-cover absolute top-0 left-0 max-w-sm  sm:max-w-lg" alt="">
            <!-- <div class="p-4 md:p-6">
              <v-avatar :size="[isMobile ? 40 : 50]">
                <v-img :src="appLogoUrl" :alt="appName" />
              </v-avatar>
            </div> -->
            
             <!-- <div class="w-full flex absolute right-0 z-30">
                <h3 class="text-lg font-semibold">Sign In</h3>
                <button class="relative z-[999] button button-m w-8 h-8 center bg-gray-400 bg-opacity-5 rounded-lg md:!flex !flex-0 items-center justify-center grow-0 max-md:!hidden" type="button" @click="closeModal()">
                  <svg class="w-4 h-4 fill-white/40" viewBox="0 0 32 32"><path d="M6.32321 9.23054L13.0927 16L6.32321 22.7694L9.23051 25.6767L15.9998 18.9074L22.7695 25.6771L25.6768 22.7698L18.9073 16.0004L25.6768 9.23095L22.7695 6.32365L16.0002 13.0929L9.23051 6.32324L6.32321 9.23054Z"></path></svg>
                </button>
              </div> -->
            <div class="absolute bottom-0 left-0 w-full">
              <h2 class="text-3xl md:text-4xl font-bold text-center w-full whitespace-nowrap overflow-hidden">Level Up the Chaos</h2>
              <p class="mt-1 w-full text-center whitespace-nowrap overflow-hidden font-semibold text-base">Sign Up &amp; Get Welcome Bonus</p>

               <div key="login" class="form-container grow items-center justify-center   ">
           
             
              <template>
                  <v-form @submit.prevent="login">
                    <template v-if="isInstalled">
                      <div v-if="isConnected" class="mb-5">
                        <v-text-field
                          :value="form.address"
                          :label="$t('Your address')"
                          :disabled="true"
                          hide-details
                          outlined
                        />

                        <v-row class="mt-3">
                          <v-col class="text-center text-md-left">
                            <v-btn type="submit" color="primary" :disabled="isLoading" :loading="isLoading">
                              {{ $t('Log in') }}
                            </v-btn>
                          </v-col>
                        </v-row>
                      </div>
                      <v-btn v-else color="primary" class="mb-4 loginBtnSec" @click="connectWallet()">
                        {{ $t('Connect wallet') }}
                      </v-btn>
                    </template>
                    <v-alert
                      v-else
                      dense
                      outlined
                      text
                      type="warning"
                      class="justify-center align-center align-content-center"
                    >
                      <p>
                        {{ $t('Web3 wallet is not detected.') }}
                        {{ $t('If you are using a desktop computer, install the Metamask wallet browser extension.') }}
                        {{ $t('If you are using a mobile phone, use the in-app browser.') }}
                      </p>
                    </v-alert>
                  </v-form>
                </template>
              
              
            </div>
            </div>

            
          </div>
          <!-- <div class="w-full md:w-1/2 h-full px-6 py-5">
           
           </div> -->
        </div>
      </div>
    </v-dialog>

    <div v-if="isMobile" :color="appBarBackground" class="mobile-bottom-bar w-full !fixed bottom-0 left-0 !flex items-center justify-around bg-[#232625] py-3.5 px-4 z-10">
      <div class="shrink-0">
        <button class="flex flex-col gap-1 items-center" @click.stop="navigationDrawer = !navigationDrawer">
          <div class="v-btn__content">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
              <path d="M5,10.75H7A3.383,3.383,0,0,0,10.75,7V5A3.383,3.383,0,0,0,7,1.25H5A3.383,3.383,0,0,0,1.25,5V7A3.383,3.383,0,0,0,5,10.75ZM2.75,5c0-1.577.673-2.25,2.25-2.25H7c1.577,0,2.25.673,2.25,2.25V7c0,1.577-.673,2.25-2.25,2.25H5C3.423,9.25,2.75,8.577,2.75,7Z" fill="currentColor" opacity="0.5"/>
              <path d="M19,1.25H17A3.383,3.383,0,0,0,13.25,5V7A3.383,3.383,0,0,0,17,10.75h2A3.383,3.383,0,0,0,22.75,7V5A3.383,3.383,0,0,0,19,1.25ZM21.25,7c0,1.577-.673,2.25-2.25,2.25H17c-1.577,0-2.25-.673-2.25-2.25V5c0-1.577.673-2.25,2.25-2.25h2c1.577,0,2.25.673,2.25,2.25Z" fill="currentColor"/>
              <path d="M19,13.25H17A3.383,3.383,0,0,0,13.25,17v2A3.383,3.383,0,0,0,17,22.75h2A3.383,3.383,0,0,0,22.75,19V17A3.383,3.383,0,0,0,19,13.25ZM21.25,19c0,1.577-.673,2.25-2.25,2.25H17c-1.577,0-2.25-.673-2.25-2.25V17c0-1.577.673-2.25,2.25-2.25h2c1.577,0,2.25.673,2.25,2.25Z" fill="currentColor"/>
              <path d="M5,22.75H7A3.383,3.383,0,0,0,10.75,19V17A3.383,3.383,0,0,0,7,13.25H5A3.383,3.383,0,0,0,1.25,17v2A3.383,3.383,0,0,0,5,22.75ZM2.75,17c0-1.577.673-2.25,2.25-2.25H7c1.577,0,2.25.673,2.25,2.25v2c0,1.577-.673,2.25-2.25,2.25H5c-1.577,0-2.25-.673-2.25-2.25Z" fill="currentColor"/>
            </svg>
          </div>
          <span class="text-xs font-bold text-neutral-500">Menu</span>
        </button>
      </div>
      <div class="!flex flex-col gap-1 items-center shrink-0">
        <game-search-modal>
          <template #default="{ on }">
            <btn
              v-on="on"
            >
              <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"  stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            </btn>
          </template>
        </game-search-modal>
        <span class="text-xs font-bold text-neutral-500">Explore</span>
      </div>
      <div class="shrink-0">
        <a class="flex flex-col gap-1 items-center text-white" href="/games/american-roulette">
          <svg viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="20" height="20">
            <g>
              <g>
                <path d="M171.58,397.714l-53.677,73.88C153.8,494.635,195.831,508.941,241,511.551v-91.24
                  C215.811,418.03,192.24,410.068,171.58,397.714z" fill="currentColor"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M407.629,321.039c-9.8,22.761-24.579,42.891-42.96,59.012l53.681,73.885c33.585-27.579,60.024-63.536,76.125-104.679
                  L407.629,321.039z" fill="currentColor"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M117.903,40.407l53.676,73.88C192.24,101.932,215.811,93.97,241,91.689V0.449C195.831,3.06,153.8,17.366,117.903,40.407z" fill="currentColor"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M256,121c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,121,256,121z M301,256
                  c0,6.939-1.581,13.515-4.398,19.39l44.25,44.25l-21.213,21.213l-44.251-44.25C269.514,299.419,262.939,301,256,301
                  c-6.939,0-13.514-1.581-19.389-4.398l-44.25,44.25l-21.213-21.213l44.25-44.25C212.581,269.514,211,262.939,211,256
                  c0-6.939,1.581-13.514,4.398-19.389l-44.25-44.25l21.213-21.213l44.25,44.25C242.486,212.581,249.061,211,256,211
                  c6.939,0,13.514,1.581,19.389,4.398l44.251-44.25l21.213,21.213l-44.25,44.25C299.419,242.485,301,249.061,301,256z" fill="currentColor" style="
                opacity: 0.5;
            "></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M256,241c-8.271,0-15,6.729-15,15s6.729,15,15,15s15-6.729,15-15S264.271,241,256,241z" fill="currentColor"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M340.42,397.714c-20.66,12.354-44.231,20.316-69.42,22.597v91.24c45.169-2.611,87.2-16.917,123.097-39.958L340.42,397.714
                  z" fill="currentColor"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M418.351,58.064l-53.681,73.885c18.38,16.121,33.159,36.251,42.96,59.012l86.846-28.218
                  C478.374,121.6,451.935,85.643,418.351,58.064z" fill="currentColor"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M271,0.449v91.24c25.189,2.281,48.76,10.243,69.421,22.597l53.676-73.879C358.2,17.366,316.169,3.059,271,0.449z" fill="currentColor"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M503.739,191.276l-86.818,28.209C419.586,231.235,421,243.455,421,256s-1.414,24.765-4.079,36.515l86.818,28.209
                  C509.125,300.049,512,278.361,512,256C512,233.639,509.125,211.951,503.739,191.276z" fill="currentColor"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M93.65,58.064C60.065,85.643,33.626,121.6,17.525,162.743l86.846,28.218c9.8-22.761,24.579-42.89,42.959-59.012
                  L93.65,58.064z" fill="currentColor"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M104.37,321.039l-86.846,28.218c16.102,41.143,42.541,77.1,76.125,104.679l53.681-73.885
                  C128.95,363.929,114.171,343.8,104.37,321.039z" fill="currentColor"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M95.079,219.485L8.261,191.276C2.875,211.951,0,233.639,0,256c0,22.361,2.875,44.049,8.261,64.724l86.818-28.209
                  C92.414,280.764,91,268.545,91,256S92.414,231.236,95.079,219.485z" fill="currentColor"></path>
              </g>
            </g>
          </svg>
          <span class="text-xs font-bold text-neutral-500">Raulette</span>
        </a>
      </div>
      <div class="shrink-0" v-if="authenticated && chatEnabled">
        <button class="flex flex-col gap-1 items-center" v-if="chatEnabled" @click="chatDrawer = !chatDrawer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-hipchat"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17.802 17.292s.077 -.055 .2 -.149c1.843 -1.425 3 -3.49 3 -5.789c0 -4.286 -4.03 -7.764 -9 -7.764c-4.97 0 -9 3.478 -9 7.764c0 4.288 4.03 7.646 9 7.646c.424 0 1.12 -.028 2.088 -.084c1.262 .82 3.104 1.493 4.716 1.493c.499 0 .734 -.41 .414 -.828c-.486 -.596 -1.156 -1.551 -1.416 -2.29z" /><path d="M7.5 13.5c2.5 2.5 6.5 2.5 9 0" stroke-opacity="0.5" /></svg>
          <span class="text-xs font-bold text-neutral-500">Chat</span>
        </button>
      </div>
      <div class="shrink-0">
        <v-menu v-model="menu" :close-on-content-click="false" offset-y right>
          <template #activator="{ on }">
            <button class="setting-btn flex flex-col gap-1 items-center" v-on="on">
              <svg id="Layer_1" enable-background="new 0 0 96 96" height="20" viewBox="0 0 96 96" width="20" xmlns="http://www.w3.org/2000/svg"><g><path d="m92 35.167h-7.165c-1.618-4.65-4.096-8.948-7.3-12.66l3.577-6.196c1.105-1.913.449-4.359-1.464-5.464l-15.296-8.833c-.919-.531-2.01-.676-3.035-.4-1.025.274-1.898.945-2.429 1.864l-3.579 6.197c-4.805-.917-9.793-.912-14.613.009l-3.583-6.206c-.53-.919-1.404-1.589-2.429-1.864-1.026-.276-2.116-.131-3.035.4l-15.297 8.833c-1.913 1.104-2.569 3.551-1.464 5.464l3.579 6.199c-1.595 1.851-3.017 3.855-4.247 5.985-1.229 2.129-2.254 4.363-3.061 6.672h-7.159c-2.209 0-4 1.791-4 4v17.664c0 2.209 1.791 4 4 4h7.166c1.617 4.649 4.095 8.947 7.299 12.66l-3.578 6.197c-1.104 1.913-.449 4.359 1.464 5.464l15.297 8.832c.919.531 2.01.674 3.035.4s1.898-.945 2.429-1.864l3.578-6.197c4.808.917 9.796.913 14.614-.009l3.583 6.206c.741 1.283 2.085 2 3.468 2 .678 0 1.366-.173 1.996-.537l15.297-8.832c1.913-1.104 2.568-3.55 1.464-5.463l-3.58-6.201c1.597-1.853 3.02-3.856 4.249-5.985 1.23-2.131 2.254-4.365 3.06-6.671h7.159c2.209 0 4-1.791 4-4v-17.664c0-2.209-1.791-4-4-4zm-4 17.665h-6.118c-1.82 0-3.411 1.229-3.87 2.989-.699 2.678-1.762 5.263-3.159 7.683-1.395 2.416-3.102 4.628-5.074 6.576-1.295 1.278-1.563 3.27-.654 4.846l3.059 5.3-8.369 4.832-3.064-5.307c-.728-1.26-2.061-2-3.464-2-.352 0-.709.047-1.062.144-5.373 1.479-11.108 1.484-16.455.01-1.754-.484-3.617.279-4.527 1.856l-3.059 5.297-8.369-4.832 3.059-5.298c.911-1.578.641-3.571-.657-4.85-3.964-3.905-6.806-8.834-8.219-14.254-.459-1.762-2.05-2.991-3.871-2.991h-6.127v-9.664h6.118c1.819 0 3.41-1.228 3.87-2.988.701-2.682 1.764-5.267 3.16-7.684 1.396-2.419 3.103-4.631 5.073-6.577 1.295-1.279 1.563-3.27.653-4.846l-3.059-5.298 8.369-4.833 3.064 5.307c.91 1.577 2.769 2.341 4.525 1.856 5.375-1.478 11.111-1.484 16.454-.009 1.755.487 3.618-.278 4.528-1.856l3.06-5.298 8.369 4.833-3.059 5.298c-.911 1.578-.641 3.571.657 4.85 3.963 3.904 6.806 8.833 8.22 14.255.459 1.761 2.05 2.99 3.871 2.99h6.127z" fill="currentColor"></path><path d="m64.929 42.815c-2.204.155-3.865 2.066-3.71 4.271.185 2.633-.418 5.24-1.744 7.538-3.654 6.327-11.771 8.503-18.099 4.851-6.327-3.653-8.502-11.772-4.849-18.099 1.769-3.065 4.626-5.257 8.044-6.173 3.418-.917 6.989-.447 10.048 1.32.165.096.327.194.486.295 1.869 1.179 4.339.62 5.518-1.248s.62-4.338-1.248-5.518c-.244-.153-.492-.305-.75-.455-10.149-5.858-23.168-2.369-29.026 7.779-2.838 4.915-3.592 10.642-2.123 16.124s4.985 10.064 9.9 12.903c3.337 1.926 6.985 2.842 10.587 2.842 7.35 0 14.507-3.812 18.439-10.621 2.126-3.685 3.093-7.868 2.796-12.098-.154-2.204-2.061-3.867-4.269-3.711z" fill="currentColor" opacity="0.5"></path></g></svg>
              <span class="text-xs font-bold text-neutral-500">Settings</span>
            </button>
          </template>
          <v-list class="theme-dropdown">
            <v-subheader class="" style="height: auto; font-size: 16px; margin-bottom: 5px; font-weight: 500;">
              {{ $t('Settings') }}
            </v-subheader>
            <v-list-item>
              <v-list-item-action class="!ml-0 !mr-2.5">
                <v-switch
                  :input-value="settings.sounds"
                  :value="settings.sounds"
                  color="primary"
                  @change="saveSettings('sounds', $event)"
                  class="scale-95"
                  dense
                />
              </v-list-item-action>
              <span class="text-sm">{{ $t('Sounds') }}</span>
            </v-list-item>
            <v-list-item v-if="gameFeedEnabled">
              <v-list-item-action class="!ml-0 !mr-2.5">
                <v-switch
                  :input-value="isMobile ? false : settings.gameFeed"
                  :value="settings.gameFeed"
                  :disabled="isMobile"
                  color="primary"
                  class="scale-95"
                  @change="saveSettings('gameFeed', $event)"
                />
              </v-list-item-action>
              <span class="text-sm">{{ $t('Game feed') }}</span>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- <div v-if="authenticated" class="pr-4 pl-2 py-2 bg-black bg-opacity-5 backdrop-blur-sm rounded-3xl absolute -top-14 right-4 text-sm font-bold inline-flex items-center gap-1" style="box-shadow: inset 0 0 8px 2px rgba(255, 255, 255, 0.1);">
        <v-img src="/images/9-icon.png" class="coin-icon"></v-img>
        <span><animated-number v-if="account" :number="account.balance" class="max-md:w-12 ellipsis" /></span>
      </div> -->
    </div>

    <component :is="footerComponent" v-if="!(isMobile && (isGamePage || isPredictionPage || isProviderGamePage))" :inset="navbarVisible" :mini-variant="isMobile ? false : miniVariant" />
  </v-app>
</template>

<script>
import { config } from '~/plugins/config'
import { mapState, mapGetters } from 'vuex'
import DeviceMixin from '~/mixins/Device'
import Message from '~/components/Message'
import Chat from '~/components/Chat'
import Preloader from '~/components/Preloader'
import SecondaryFooter from '~/components/SecondaryFooter'
import AdminFooter from '~/components/Admin/Footer'
import AnimatedNumber from '~/components/AnimatedNumber'
import SystemBar from '~/components/SystemBar'
import AdminMainMenu from '~/components/Admin/MainMenu'
import MainMenu from '~/components/MainMenu'
import AccountMenu from '~/components/AccountMenu'
import SettingsMenu from '~/components/SettingsMenu'
import UserMenu from '~/components/UserMenu'
import GameSearchModal from '~/components/GameSearchModal'
import axios from 'axios'
import Form from 'vform'
import FormMixin from '~/mixins/Form'
import Oauth from '~/components/Oauth'
import Web3Auth from '~/components/Web3Auth'
import VueRecaptcha from 'vue-recaptcha'
import FormParameter from '~/components/FormParameter'
import DepositModal from '~/components/DepositModal.vue'
import Web3AuthMixin from '~/mixins/Web3Auth'
import Web3 from 'web3'

export default {
  name: 'DefaultLayout',

  components: { UserMenu, SettingsMenu, AccountMenu, MainMenu, AdminMainMenu, SystemBar, Message, Chat, Preloader, SecondaryFooter, AdminFooter, AnimatedNumber, GameSearchModal, FormParameter, Web3Auth, Oauth, VueRecaptcha, DepositModal },

  mixins: [Web3AuthMixin,DeviceMixin, FormMixin],

  middleware: 'guest',

  watch: {
    $route: {
      immediate: true,
      handler() {
        if (this.isGamePage || this.isPredictionPage || this.isProviderGamePage) {
          this.navigationDrawer = false;
          this.miniVariant = true;
        } else {
          this.navigationDrawer = this.navbarVisible;
          this.miniVariant = false;
        }
      }
    }
  },

  data () {
    const base = {
      
      activeTab: 'login',
      navigationDrawer: false,
      playing: false,
      showPassword: false,
      showPassword2: false,
      agreementAccepted: false,
      ocPrice : 0,
      oxinoxPrice : 0,
      form: new Form({
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
        remember: '', // it's important to pass empty string as false value so $request->filled('remember') returns false,
        recaptcha: null,
        fields: {}
      })
    }

    if (!this.isMobile) {
      base.miniVariant = false
      base.chatDrawer = false
      base.unreadChatMessagesCount = 0
      base.menu = false
    }

    return base
  },
  async mounted () {
    console.log("meee")
    
      const res = await fetch("https://oc-price-api.vercel.app/oc-price");
      const jsonRes = await res.json()
     
      const oxinoxres = await fetch("https://oc-price-api.vercel.app/oxinox-price");
      const oxinoxjsonRes = await oxinoxres.json()
      this.ocPrice = jsonRes['price'];
      this.oxinoxPrice = oxinoxjsonRes['price'];

  },
  computed: {
    ...mapState('auth', ['user', 'account', 'token']),
    ...mapState('progress', ['loading']),
    ...mapGetters({
      authenticated: 'auth/check'
    }),
    appName () {
      return config('app.name')
    },
    appLogoUrl () {
      return config('app.logo')
    },
    appBarBackground () {
      return config('settings.theme.backgrounds.app_bar')
    },
    navBarBackground () {
      return config('settings.theme.backgrounds.nav_bar')
    },
    creditsIcon () {
      return config('settings.interface.credits_icon')
    },
    navbarVisible () {
      return config('settings.interface.navbar.visible') && !this.isMobile
    },
    isGamePage () {
      return this.$route.name === 'game'
    },
    isProviderGamePage () {
      return this.$route.name === 'provider.game'
    },
    isPredictionPage () {
      return this.$route.name === 'prediction'
    },
    systemBarEnabled () {
      return config('settings.interface.system_bar.enabled')
    },
    chatEnabled () {
      return config('settings.interface.chat.enabled')
    },
    style () {
      return {
        background: config('settings.theme.backgrounds.page'),
        '--body-font': config('settings.theme.fonts.body.family'),
        '--heading-font': config('settings.theme.fonts.heading.family')
      }
    },
    footerComponent () {
      if (!this.$route.name || this.$route.name === 'home') {
        return false
      }

      return this.$route.name.indexOf('admin.') > -1
        ? 'AdminFooter'
        : 'SecondaryFooter'
    },
    mainStyle() {
      if(!this.isMobile){
        return {
          paddingLeft: this.miniVariant ? '56px' : '260px',
          transition: 'margin-left 0.3s ease-in-out',
        };
      }
    },
    ...mapState('settings', ['settings']),
    gameFeedEnabled () {
      return config('settings.interface.game_feed.enabled')
    },
    recaptchaPublicKey () {
      return config('services.recaptcha.public_key')
    },
    emailVerification () {
      return config('settings.users.email_verification')
    },
    fields () {
      return config('settings.users.fields')
    }
  },

  created () {
    this.$store.dispatch('package-manager/fetchOriginalGames')
    this.$store.dispatch('package-manager/fetchProviderGames')
    this.form.fields = this.fields.reduce((a, field) => ({ ...a, [field.id]: field.default }), {})
    this.$root.$on('trigger-auth-modal', this.openModal)
    if (Web3.givenProvider) {
      this.isInstalled = true

      if (Web3.givenProvider.selectedAddress) {
        this.connectWallet()
      }
    }
  },

  beforeDestroy() {
    this.$root.$off('trigger-auth-modal', this.openModal)
  },

  methods: {
    config,
    setUnreadChatMessagesCount (count) {
      this.unreadChatMessagesCount = count
    },
    toggleMiniVariant() {
      this.miniVariant = !this.miniVariant;
      // console.log("Mini-variant toggled:", this.miniVariant); // Debugging output
    },
    saveSettings (key, value) {
      // value is null when switch is turned off
      this.$store.dispatch('settings/set', { key, value: !!value })
    },
    openModal(tab) {
      this.activeTab = tab
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    async connectWallet () {
      const web3 = new Web3(Web3.givenProvider)
      let addresses

      try {
        addresses = await web3.eth.requestAccounts()
        this.isConnected = !!addresses[0]
        this.form.address = addresses[0]
      } catch (err) {
        //
      }
    },
    async sign (nonce) {
      const web3 = new Web3(Web3.givenProvider)
      try {
        this.form.signature = await web3.eth.personal.sign(nonce, this.form.address)
        return true
      } catch (error) {
        return false
      }
    },
    triggerDeposit() {
      this.$root.$emit('open-deposit-modal')
    }
  },
  
}
</script>

<style lang="scss">
body {
  .v-application {

    &, & .title, & .subtitle-1, & .subtitle-2, & .body-1, & .body-2 {
      font-family: var(--body-font), sans-serif !important;
    }

    .text-h1,
    .text-h2,
    .text-h3,
    .text-h4,
    .text-h5,
    .text-h6,
    .text-headline,
    .text-title,
    .text-subtitle-1,
    .text-subtitle-2,
    .text-button,
    .text-caption,
    .text-overline,
    .v-card .headline,
    .v-card .v-toolbar__title {
      font-family: var(--heading-font), sans-serif !important;
    }
  }
}

.tab-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
}

.tab-buttons button {
  flex: 1;
  padding: 10px;
  border: none;
  background: #eee;
  cursor: pointer;
}

.tab-buttons .active {
  background: #007bff;
  color: #fff;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.custom-text-field{
  &.v-text-field--outlined{
    fieldset {
      border-width: 1px !important;
      border-radius: 8px !important;
      background: #212121 !important;
    }
  }
  &.v-text-field{
    input, .v-label{
      font-size: 14px;
    }
    .v-input__icon{
      .v-icon{
        font-size: 18px;
        color: #878787;
      }
    }
  }
}

</style>
