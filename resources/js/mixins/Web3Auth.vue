<script>
import Form from 'vform'
import axios from 'axios'
import { route } from '~/plugins/route'
import { ucfirst } from '~/plugins/utils'

export default {
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('{0} authentication', [ucfirst(this.$options._componentTag)]) }
  },

  data () {
    return {
      showModal: false,
      isLoading: false,
      isInstalled: false,
      isConnected: false,
      form: new Form({
        address: null,
        signature: null
      })
    }
  },

  methods: {
    async login () {
      this.isLoading = true
      const { data: { nonce } } = await axios.get(route('auth.web3.nonce'))
      
      if (await this.sign(nonce)) {
        const { data: { success, user, message } } = await this.form.post(`/api/auth/web3/metamask`)

          if (success) {
            this.$store.dispatch('auth/updateUser', user)
            if (this.user.two_factor_auth_enabled && !this.user.two_factor_auth_passed) {
            this.$router.push({ name: '2fa' })
          } else {
              window.location.reload()

          }
          
        } else {
          this.$store.dispatch('message/error', { text: message })
        }
      }

      this.isLoading = false
    }
  }
}
</script>
