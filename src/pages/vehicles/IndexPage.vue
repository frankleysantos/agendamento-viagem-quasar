<template lang="">
  <q-page padding>
    <div v-if="$q.platform.is.desktop">
      <NewVehicle/>
    </div>
    
    <div v-if="$q.platform.is.mobile" class="q-pb-sm" align="right">
      <q-btn :label="$t('vehicle.addVehicle')" color="primary" @click="inception = true"/>

      <q-dialog v-model="inception" persistent>

        <q-card class="q-pa-md">
          <q-toolbar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
            </q-avatar>

            <q-toolbar-title><span class="text-weight-bold">{{$t('general.add')}}</span> {{$t('vehicle.vehicle')}}</q-toolbar-title>

            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>
          <NewVehicle/>
  
        </q-card>
      </q-dialog>
    </div>

    <QtableVehicles/>

  </q-page> 
  
</template>
<script>
import QtableVehicles from "../../components/vehicle/QtableVehicles"
import NewVehicle from "../../components/vehicle/NewVehicle.vue"
export default {
  data() {
    return {
      inception: false
    }
  },
  components: {
    QtableVehicles,
    NewVehicle
  },

};
</script>
<style lang=""></style>
