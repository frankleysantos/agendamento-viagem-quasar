<template lang="">
<div>
    <div
      class="float-right"
      id="flags"
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
    </div>
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
    choiceLang(lang) {

      this.ChangeLanguage(lang)
      this.$i18n.locale = this.language.language
      import(`quasar/lang/${this.language.language}`).then(language => {
        this.$q.lang.set(language.default)
      })    // set quasar's language too!!
    }
  },
}
</script>
<style lang="">
    
</style>