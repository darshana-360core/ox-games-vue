<template>
  <v-list density="compact" nav class="pt-0 px-0">
    <template v-for="item in menu">
      <v-list-item v-if="item.enabled && canAccess(item.route)" :key="item.route" :to="{ name: item.route }" link exact>
        <v-list-item-action v-html="item.icon">
          <!-- <v-icon>{{ item.icon }}</v-icon> -->
          <!-- {{ item.icon }} -->
          <!-- <span v-html="item.icon"></span> -->

        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['user']),
    ...mapGetters({
      rafflePackageIsEnabled: 'package-manager/raffleIsEnabled',
      paymentsPackageIsEnabled: 'package-manager/paymentsIsEnabled'
    }),
    menu () {
      return [
        { route: 'admin.dashboard.index', icon: `
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" x="0" y="0" viewBox="0 0 22 22" class="menu-icon" style="padding:3px;">
            <path d="M.538 2.615a2 2 0 0 1 2-2h4.924a2 2 0 0 1 2 2v4.923a2 2 0 0 1-2 2H2.538a2 2 0 0 1-2-2zM12.462 14.538a2 2 0 0 1 2-2h4.923a2 2 0 0 1 2 2v4.924a2 2 0 0 1-2 2h-4.923a2 2 0 0 1-2-2z" opacity="1" fill="currentColor" fill-opacity="0.8"></path>
            <circle cx="16.923" cy="5.077" r="4.462" fill="currentColor" opacity="1" class="fill-primary"></circle>
            <circle cx="5" cy="17" r="4.462" fill="currentColor" opacity="1" class="fill-primary"></circle>
          </svg>`, title: this.$t('Dashboard'), enabled: true },
        { route: 'admin.users.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="menu-icon">
            <circle cx="15" cy="6" r="3" fill="currentColor" class="fill-primary"></circle>
            <ellipse cx="16" cy="17" rx="5" ry="3" fill="currentColor" class="fill-primary"></ellipse>
            <circle opacity="0.8" cx="9.00098" cy="6" r="4" fill="currentColor"></circle>
            <ellipse opacity="0.8" cx="9.00098" cy="17.001" rx="7" ry="4" fill="currentColor"></ellipse>
        </svg>`, title: this.$t('Users'), enabled: true },
        { route: 'admin.accounts.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="menu-icon">
                  <circle cx="12" cy="8" r="4" fill="currentColor" class="fill-primary"></circle>
                  <path d="M5.33788 17.3206C5.99897 14.5269 8.77173 13 11.6426 13H12.3574C15.2283 13 18.001 14.5269 18.6621 17.3206C18.79 17.8611 18.8917 18.4268 18.9489 19.0016C19.0036 19.5512 18.5523 20 18 20H6C5.44772 20 4.99642 19.5512 5.0511 19.0016C5.1083 18.4268 5.20997 17.8611 5.33788 17.3206Z" fill="currentColor" fill-opacity="0.8"></path>
              </svg>`, title: this.$t('Accounts'), enabled: true },
        { route: 'admin.games.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
          <g>
            <path d="M9.56953 12.46L6.51953 15.51" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" ></path>
            <path d="M6.5498 12.4902L9.5998 15.5402" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" ></path>
          </g>
          <path class="stroke-primary" d="M13.5303 14H13.5403" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
          <path class="stroke-primary" d="M17.4697 14H17.4797" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
          <path class="stroke-primary" d="M15.5 15.98V15.96" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
          <path class="stroke-primary" d="M15.5 12.04V12.02" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M9 22H15C20 22 22 20 22 15V13C22 8 20 6 15 6H9C4 6 2 8 2 13V15C2 20 4 22 9 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M13.0105 2L13.0005 3.01C12.9905 3.56 12.5505 4 12.0005 4H11.9705C11.4205 4 10.9805 4.45 10.9805 5C10.9805 5.55 11.4305 6 11.9805 6H12.9805" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-primary"></path>
          </svg>`, title: this.$t('Games'), enabled: true },
        { route: 'admin.bonuses.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="menu-icon">
            <path opacity="0.8" d="M19.9707 10V18C19.9707 21 18.9707 22 15.9707 22H7.9707C4.9707 22 3.9707 21 3.9707 18V10H19.9707Z" fill="currentColor"></path>
            <path d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z" fill="currentColor" class="fill-primary"></path>
            <path opacity="0.8" d="M11.6408 4.99994H6.12076C5.78076 4.62994 5.79076 4.05994 6.15076 3.69994L7.57076 2.27994C7.94076 1.90994 8.55076 1.90994 8.92076 2.27994L11.6408 4.99994Z" fill="currentColor"></path>
            <path opacity="0.8" d="M17.8696 4.99994H12.3496L15.0696 2.27994C15.4396 1.90994 16.0496 1.90994 16.4196 2.27994L17.8396 3.69994C18.1996 4.05994 18.2096 4.62994 17.8696 4.99994Z" fill="currentColor"></path>
            <path opacity="0.8" d="M8.93945 10V15.14C8.93945 15.94 9.81945 16.41 10.4895 15.98L11.4295 15.36C11.7695 15.14 12.1995 15.14 12.5295 15.36L13.4195 15.96C14.0795 16.4 14.9695 15.93 14.9695 15.13V10H8.93945Z" fill="currentColor" class="fill-primary"></path>
        </svg>`, title: this.$t('Bonuses'), enabled: true },
        // { route: 'admin.deposits.index', icon: 'mdi-cash-plus', title: this.$t('Deposits'), enabled: this.paymentsPackageIsEnabled },
        // { route: 'admin.withdrawals.index', icon: 'mdi-cash-minus', title: this.$t('Withdrawals'), enabled: this.paymentsPackageIsEnabled },
        // { route: 'admin.deposit-methods.index', icon: 'mdi-cash-marker', title: this.$t('Deposit methods'), enabled: this.paymentsPackageIsEnabled },
        // { route: 'admin.withdrawal-methods.index', icon: 'mdi-cash-marker', title: this.$t('Withdrawal methods'), enabled: this.paymentsPackageIsEnabled },
        { route: 'admin.deposits.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class="menu-icon">
          <g>
            <g fill="currentColor">
              <path fill-rule="evenodd" d="M6 3h12a4 4 0 0 1 0 8V7H6v4a4 4 0 1 1 0-8z" clip-rule="evenodd" fill="currentColor" opacity="1" data-original="currentColor" class=""></path>
              <path d="M18 19V7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" opacity="1" fill="currentColor" fill-opacity="0.4" data-original="currentColor40" class=""></path>
              <path fill-rule="evenodd" d="m11.25 12.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.292a.75.75 0 1 1-1.06 1.061l-.72-.72v4.19a.75.75 0 0 1-1.5 0z" clip-rule="evenodd" fill="currentColor" data-original="currentColor" class=""></path>
            </g>
          </g>
          </svg>`, title: this.$t('Deposits'), enabled: this.paymentsPackageIsEnabled },
        { route: 'admin.withdrawals.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><path d="M18 3H6a4 4 0 1 0 0 8h12a4 4 0 0 0 0-8z" fill="currentColor" opacity="1" data-original="currentColor"></path><path d="M18 19V7H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" opacity="1" fill="currentColor" fill-opacity="0.4" data-original="currentColor40"></path><path fill-rule="evenodd" d="m11.25 15.19-.72-.72a.75.75 0 1 0-1.06 1.06l1.293 1.293a1.75 1.75 0 0 0 2.474 0l1.293-1.292a.75.75 0 0 0-1.06-1.061l-.72.72V11a.75.75 0 1 0-1.5 0z" clip-rule="evenodd" fill="currentColor" opacity="1" data-original="currentColor"></path></svg>`, title: this.$t('Withdrawals'), enabled: this.paymentsPackageIsEnabled },
        { route: 'admin.deposit-methods.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" x="0" y="0" viewBox="0 0 24 24" class=""><path d="M6 22a4.002 4.002 0 0 0 3.877-3.01c.136-.535.57-.99 1.123-.99h7V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v13a4 4 0 0 0 4 4z" opacity="1" fill="currentColor" fill-opacity="0.8"></path><path d="M18 22a4.002 4.002 0 0 0 3.877-3.01c.136-.535-.325-.99-.877-.99H11c-.552 0-.987.455-1.123.99A4.002 4.002 0 0 1 6 22z" fill="currentColor" opacity="1"></path><path fill-rule="evenodd" d="M9.25 8.828a1.26 1.26 0 0 0-.134.116L7.53 10.53a.75.75 0 1 1-1.06-1.06l1.585-1.586a2.75 2.75 0 0 1 3.89 0L13.53 9.47a.75.75 0 0 1-1.06 1.06l-1.586-1.586a1.26 1.26 0 0 0-.134-.116V13a.75.75 0 1 1-1.5 0z" clip-rule="evenodd" fill="currentColor" opacity="1"></path></svg>`, title: this.$t('Deposit methods'), enabled: this.paymentsPackageIsEnabled },
        { route: 'admin.withdrawal-methods.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 24 24" class=""><path d="M22 19v-3a3 3 0 0 0-3-3h-1a2 2 0 0 0-1.6.8l-1.2 1.6a4 4 0 0 1-6.4 0l-1.2-1.6A2 2 0 0 0 6 13H5a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3z" opacity="1" fill="currentColor" fill-opacity="0.8" data-original="#28303f40"></path><path fill-rule="evenodd" d="M5 13h1a2 2 0 0 1 1.6.8l1.2 1.6a4 4 0 0 0 6.4 0l1.2-1.6A2 2 0 0 1 18 13h1c.35 0 .687.06 1 .17V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v7.17c.313-.11.65-.17 1-.17zm6.116-2.945c.043.043.087.082.134.117V6a.75.75 0 0 1 1.5 0v4.172c.047-.035.091-.074.134-.116L14.47 8.47a.75.75 0 1 1 1.06 1.06l-1.585 1.586a2.75 2.75 0 0 1-3.89 0L8.47 9.53a.75.75 0 0 1 1.06-1.06z" clip-rule="evenodd" fill="currentColor" opacity="1" data-original="currentColor" class=""></path></svg>`, title: this.$t('Withdrawal methods'), enabled: this.paymentsPackageIsEnabled },
        { route: 'admin.affiliate.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-icon">
          <path opacity="0.8" d="M14.1625 18.4876L13.4417 19.2084C11.053 21.5971 7.18019 21.5971 4.79151 19.2084C2.40283 16.8198 2.40283 12.9469 4.79151 10.5583L5.51236 9.8374" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
          <path d="M9.8374 14.1625L14.1625 9.8374" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="stroke-primary"></path>
          <path opacity="0.8" d="M9.8374 5.51236L10.5583 4.79151C12.9469 2.40283 16.8198 2.40283 19.2084 4.79151C21.5971 7.18019 21.5971 11.053 19.2084 13.4417L18.4876 14.1625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
          </svg>`, title: this.$t('Affiliates'), enabled: true },
        // { route: 'admin.raffles.index', icon: 'mdi-ticket', title: this.$t('Raffles'), enabled: this.rafflePackageIsEnabled },
        { route: 'admin.raffles.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" x="0" y="0" viewBox="0 0 20 18"><path d="M0 14a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1c0-.552-.46-.984-.982-1.164a3.001 3.001 0 0 1 0-5.672C19.54 5.984 20 5.552 20 5V4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v1c0 .552.46.984.982 1.164a3.001 3.001 0 0 1 0 5.672C.46 12.016 0 12.448 0 13z" opacity="1" fill="currentColor" class="" fill-opacity="0.8"></path><g fill-rule="evenodd" clip-rule="evenodd"><path d="M8 2.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 8 2.25zM8 12.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75zM8 7.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 8 7.25z" fill="currentColor" opacity="1"></path></g></svg>`, title: this.$t('Raffles'), enabled: this.rafflePackageIsEnabled },
        { route: 'admin.chat.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" x="0" y="0" viewBox="0 0 24 24" class="menu-icon">
          <path d="M10.889 3H9.778C5.482 3 2 6.526 2 10.875v3.375c0 1.243.995 2.25 2.222 2.25h6.667c3.682 0 6.667-3.022 6.667-6.75a6.85 6.85 0 0 0-.183-1.577C16.67 5.206 14.034 3 10.889 3z" opacity="1" fill="currentColor" fill-opacity="0.8"></path>
          <path d="M10.889 16.5c3.682 0 6.667-3.022 6.667-6.75a6.85 6.85 0 0 0-.184-1.577A7.88 7.88 0 0 1 22 15.375v3.375c0 1.243-.995 2.25-2.222 2.25H13.11c-2.903 0-5.372-1.878-6.287-4.5z" fill="currentColor" opacity="1" class="fill-primary"></path>
          </svg>`, title: this.$t('Chat'), enabled: true },
        { route: 'admin.settings.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" x="0" y="0" viewBox="0 0 18 18" style="padding:3px;" class="menu-icon">
          <path d="M9.955 0h-1.91C6.991 0 6.136.806 6.136 1.8A1.5 1.5 0 0 1 3.92 3.117l-.101-.055c-.914-.497-2.081-.202-2.608.659L.256 5.279C-.27 6.14.042 7.241.955 7.74c1 .543 1 1.979 0 2.523-.913.497-1.226 1.598-.699 2.459l.955 1.558c.527.861 1.694 1.156 2.608.66l.101-.056A1.5 1.5 0 0 1 6.136 16.2c0 .994.855 1.8 1.91 1.8h1.909c1.054 0 1.909-.806 1.909-1.8a1.5 1.5 0 0 1 2.216-1.317l.102.055c.913.497 2.08.202 2.607-.659l.955-1.558c.527-.861.214-1.962-.699-2.46-1-.543-1-1.979 0-2.523.913-.497 1.226-1.598.699-2.459l-.955-1.558c-.527-.861-1.694-1.156-2.608-.66l-.101.056A1.5 1.5 0 0 1 11.864 1.8c0-.994-.855-1.8-1.91-1.8z" opacity="1" fill="currentColor" fill-opacity="0.8"></path>
          <circle cx="9" cy="9" r="3" fill="currentColor" opacity="1" class="fill-primary"></circle>
        </svg>`, title: this.$t('Settings'), enabled: true },
        { route: 'admin.maintenance.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" x="0" y="0" viewBox="0 0 24 24" class="menu-icon" style="padding:2px;">
          <path d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" opacity="1" fill="currentcolor" fill-opacity="0.8"></path>
          <g fill-rule="evenodd" clip-rule="evenodd">
            <path d="M12 6.25a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75zM17 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zM7 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25z" fill="currentcolor" opacity="1" class="fill-primary"></path>
          </g>
        </svg>`, title: this.$t('Maintenance'), enabled: true },
        { route: 'admin.add-ons.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" x="0" y="0" viewBox="0 0 20 20" style="padding: 3px;" class="menu-icon">
          <path d="m9.172 19.624-8.17-3.714c-.78-.355-.78-1.465 0-1.82l8.17-3.714a2 2 0 0 1 1.655 0l8.17 3.714c.782.355.782 1.465 0 1.82l-8.17 3.714a2 2 0 0 1-1.655 0z" opacity="1" fill="currentColor" fill-opacity="0.8"></path>
          <path d="m9.172 14.624-8.17-3.714c-.78-.355-.78-1.465 0-1.82l8.17-3.714a2 2 0 0 1 1.655 0l8.17 3.714c.782.355.782 1.465 0 1.82l-8.17 3.714a2 2 0 0 1-1.655 0z" fill="currentColor" opacity="1" class="fill-primary"></path>
          <path d="M9.172 9.624 1.002 5.91c-.78-.355-.78-1.465 0-1.82L9.173.376a2 2 0 0 1 1.655 0l8.17 3.714c.782.355.782 1.465 0 1.82l-8.17 3.714a2 2 0 0 1-1.655 0z" opacity="1" fill="currentColor" class="" fill-opacity="0.8"></path>
        </svg>`, title: this.$t('Add-ons'), enabled: true },
        { route: 'admin.license.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24" id="reward-tag" data-name="Flat Color" class="menu-icon">
          <path id="secondary" d="M8,14h8v7a1,1,0,0,1-1.24,1L12,21.28,9.24,22A1,1,0,0,1,8,21Z" fill="currentColor" class="fill-primary"></path>
          <rect id="primary" x="2" y="2" width="20" height="13" rx="2" fill="currentColor" fill-opacity="0.8"></rect>
          <circle id="secondary-2" data-name="secondary" cx="12" cy="8.5" r="1.5" fill-opacity="0.8" fill="currentColor" class="fill-primary"></circle></svg>`, title: this.$t('License'), enabled: true },
        { route: 'admin.help.index', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="menu-icon">
            <path opacity="0.8" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="currentColor"></path>
            <path d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z" fill="currentColor" class="fill-primary"></path>
            <path d="M12 7C12.5523 7 13 7.44771 13 8C13 8.55229 12.5523 9 12 9C11.4477 9 11 8.55229 11 8C11 7.44771 11.4477 7 12 7Z" fill="currentColor" class="fill-primary"></path>
        </svg>`, title: this.$t('Help'), enabled: true }
      ]
    }
  },

  methods: {
    canAccess (route) {
      const [module, ...rest] = route.replace('admin.', '').split('.')
      return this.user.permissions === null || this.user.permissions[module] >= 1
    }
  }
}
</script>
