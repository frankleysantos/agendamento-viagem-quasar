<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawerAction" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div align="center">
          <ChangeLang />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          {{ $t('general.travelManagement') }}
        </q-item-label>
        <EssentialLink v-for="(menu, index) in essentialLinks" :key="index" v-bind="menu" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ChangeLang from "../components/language/ChangeLang"
import EssentialLink from "src/components/EssentialLink";
export default {
  name: 'MainLayout',
  components: {
    ChangeLang,
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          keyI18n: 'general',
          title: 'home',
          caption: 'travelManagement',
          link: "/#/",
          icon: "grid_view"
        },
        {
          keyI18n: 'vehicle',
          title: 'vehicle',
          caption: 'vehicle',
          link: "/#/vehicles",
          icon: "no_crash"
        },
        {
          keyI18n: 'passenger',
          title: 'passenger',
          caption: 'passenger',
          link: "/#/passengers",
          icon: "hail"
        },
        {
          keyI18n: 'drivers',
          title: 'driver',
          caption: 'drivers',
          link: "/#/drivers",
          icon: "commute"
        },
        {
          keyI18n: 'scheduledTrips',
          title: 'scheduledTrips',
          caption: 'scheduledTrips',
          link: "/#/scheduledTrips",
          icon: "commute"
        }
      ]
    }
  },
  methods: {
    toggleLeftDrawerAction() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
      return this.leftDrawerOpen;
    },
    redirectHome() {
      this.$router.push('/');
    }
  }
}
</script>
