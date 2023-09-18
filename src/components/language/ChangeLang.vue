<template lang="">
    <div
      class="q-gutter-sm"
    >
      <q-avatar class="cursor-pointer" color="white" text-color="primary" icon="manage_accounts">
        <q-menu>
          <q-list style="min-width: 150px">
            <q-item>
              <q-item-section>
                <div class="row q-py-sm">
                  <div class="col-md">
                    <strong>{{ $t('general.changeLanguage') }}</strong>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md">
                    <q-img
                      class="cursor-flag"
                      src="../../assets/countryFlags/brazil.svg"
                      style="width: 32px; height: 24px; cursor: pointer"
                      @click="choiceLang('pt-BR')"
                    />
                    <q-img
                      class="cursor-flag"
                      src="../../assets/countryFlags/united-states.svg"
                      style="width: 32px; height: 24px; cursor: pointer; margin-left: 10px"
                      @click="choiceLang('en-US')"
                    />
                  </div>
                </div>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="logout">
              <q-item-section>{{ $t('general.logout') }}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-avatar>
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
<style lang="css">
 .cursor-flag:hover {
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  -o-filter: blur(1px);
  -ms-filter: blur(1px);
  filter: blur(1px);
 }   
</style>