<template lang="">
    <q-page padding>
        <FormPassenger />
        <QtablePassengers/>
    </q-page>
</template>
<script>
import FormPassenger from '../../components/passenger/newPassenger.vue'
import QtablePassengers from 'src/components/passenger/QtablePassengers.vue';
export default {
    components: {
        FormPassenger,
        QtablePassengers
    }
}
</script>
<style lang="">
    
</style>