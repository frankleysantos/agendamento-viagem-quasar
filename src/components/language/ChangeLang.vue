<template lang="">
    <div
      class="q-gutter-sm"
    >
      <q-img
        src="../../assets/countryFlags/brazil.svg"
        style="width: 32px; height: 24px; cursor: pointer"
        @click="choiceLang('pt-BR')"
      />
      <q-img
        src="../../assets/countryFlags/united-states.svg"
        style="width: 32px; height: 24px; cursor: pointer; margin-left: 10px"
        @click="choiceLang('en-US')"
      />
      <q-icon name="manage_accounts" size="24px" class="bg-teal">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="logout">
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-icon>
    </div>

</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      lang: this.language
    }
  },
  computed: {
    ...mapState(["language"]),
  },
  methods: {
    ...mapActions('language', ['ChangeLanguage']),
    ...mapActions("auth", ["ActionLogoutProfile"]),
    choiceLang(lang) {

      this.ChangeLanguage(lang)
      this.$i18n.locale = this.language.language
      import(`quasar/lang/${this.language.language}`).then(language => {
        this.$q.lang.set(language.default)
      })    // set quasar's language too!!
    },
    logout() {
      this.ActionLogoutProfile()
    }
  },
}
</script>
<style lang="">
    
</style>