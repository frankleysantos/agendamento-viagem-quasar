<template lang="">
    <q-page padding>
        <FormPassenger :passengerId="passengerId"/>
        <QtablePassengers @editPassengerSon="sendEditPassengerId"/>
    </q-page>
</template>
<script>
import FormPassenger from '../../components/passenger/newPassenger.vue'
import QtablePassengers from 'src/components/passenger/QtablePassengers.vue';
export default {
    components: {
        FormPassenger,
        QtablePassengers
    },
    data() {
        return {
            passengerId: null,
        }
    },
    methods: {
        sendEditPassengerId(payload) {
            this.passengerId = payload.passengerId;
        }
    }
}
</script>
<style lang="">
    
</style>