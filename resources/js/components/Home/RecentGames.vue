<template>
  <v-container class="home-page-recent-games mt-0">
    <v-row>
      <v-col class="text-left">
        <h3 class="text-h5 text-sm-h5 font-weight-medium">
          {{ $t('Recent games') }}
        </h3>
      </v-col>
    </v-row>
    <v-row justify="start" class="mt-0">
      <v-col cols="12" md="12">
        <v-list v-if="recentGames === null">
          <v-skeleton-loader v-for="(v,i) in Array(10).fill(0)" :key="i" type="list-item-avatar-three-line" />
        </v-list>
        <p v-else-if="recentGames.length === 0" class="text-center">
          {{ $t('No games found') }}
        </p>
        <!-- <v-timeline v-else dense class="pt-0">
          <v-timeline-item
            v-for="game in recentGames"
            :key="game.id"
            right
            small
          >
            <template #icon>
              <user-avatar :user="game.account.user" :size="40" />
            </template>
            <v-card :elevation="5" class="recent-game-card" :class="{ win: game.win >= game.bet, loss: game.win < game.bet }">
              <v-card-title>
                {{ game.title }}
              </v-card-title>
              <v-card-text class="body-1 py-0">
                <template v-if="game.win > 0">
                  {{ $t('{0} bet {1} and won {2} credits', [game.account.user.name, game.bet, game.win > 999 ? decimal(game.win) : game.win]) }}
                </template>
                <template v-else>
                  {{ $t('{0} bet {1} credits and lost', [game.account.user.name, game.bet]) }}
                </template>
              </v-card-text>
              <v-card-actions class="justify-space-between">
                <span class="text--secondary ml-2">
                  <v-icon class="text--secondary mr-1">
                    mdi-clock-outline
                  </v-icon>
                  {{ game.updated_ago }}
                </span>
                <v-btn small :to="{ name: 'history.games.show', params: { id: game.id } }" :color="game.win >= game.bet ? 'success' : 'error'" class="white--text">
                  {{ $t('View') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-timeline-item>
        </v-timeline> -->
        <v-data-table
          v-else
          :headers="headers"
          :items="recentGames"
          class="elevation-1 recent-games-table bg-transparent"
          :items-per-page="8"
          :page.sync="page"
          >
          <!-- hide-default-footer -->
          <template #item.user="{ item }">
            <div class="d-flex align-center">
              <user-avatar :user="item.account.user" :size="32" class="mr-2" />
              <span>{{ item.account.user.name }}</span>
            </div>
          </template>

          <template #item.result="{ item }">
            <span v-if="item.win > 0">
              {{ $t('{0} bet {1} and won {2} credits', [item.account.user.name, item.bet, item.win > 999 ? decimal(item.win) : item.win]) }}
            </span>
            <span v-else>
              {{ $t('{0} bet {1} credits and lost', [item.account.user.name, item.bet]) }}
            </span>
          </template>

          <template #item.time="{ item }">
            <v-icon small class="mr-1">mdi-clock-outline</v-icon>{{ item.updated_ago }}
          </template>

          <template #item.status="{ item }">
            <v-chip
              small
              :color="item.win >= item.bet ? 'success' : 'error'"
              dark
            >
              {{ item.win >= item.bet ? 'Win' : 'Loss' }}
            </v-chip>
          </template>

          <template #item.action="{ item }">
            <v-btn
              small
              :color="item.win >= item.bet ? 'success' : 'error'"
              :to="{ name: 'history.games.show', params: { id: item.id } }"
              class="white--text"
            >
              {{ $t('View') }}
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import { decimal } from '~/plugins/format'
import { config } from '~/plugins/config'
import UserAvatar from '~/components/UserAvatar'

export default {
  components: { UserAvatar },

  data () {
    return {
      recentGames: null,
      page: 1,
      headers: [
        { text: this.$t('User'), value: 'user', sortable: false },
        { text: this.$t('Title'), value: 'title' },
        { text: this.$t('Result'), value: 'result', sortable: false },
        { text: this.$t('Time'), value: 'time' },
        { text: this.$t('Status'), value: 'status', sortable: false },
        { text: this.$t('Action'), value: 'action', sortable: false },
      ],
    }
  },

  created () {
    this.pullRecentGames()
  },

  methods: {
    config,
    decimal,
    async pullRecentGames () {
      const { data } = await axios.get('/api/pub/games/recent')

      this.recentGames = data
    }
  }
}
</script>
<style lang="scss" scoped>
.recent-game-card {
  border-width: 1px;
  border-style: solid;

  &.win {
    // border-color: var(--v-success-base);
    background: #1a1a1a;
    // background: #023304;
    border: 2px solid #4caf50;
    box-shadow: none !important;
    border-radius: 12px;
  }
  &.loss {
    // border-color: var(--v-error-base);
    background: #1a1a1a;
    // background: #2b0404;
    border: 2px solid #ff5252;
    box-shadow: none !important;
    border-radius: 12px;
  }
  .v-card__title{
    padding: 8px 16px 2px;
    font-size: 16px;
    line-height: 1.6;
  }
  .body-1{
    font-size: 14px !important;
    line-height: 1.4;
  }
}
</style>
