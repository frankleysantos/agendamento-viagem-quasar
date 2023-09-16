<template lang="">
    <div class="row q-gutter-sm">
        <div class="col-md">
            <q-input outlined dense 
                v-model="passenger.name" 
                :label="$t('passenger.passenger')"
                :rules="[val => val.length > 3 || 'Field is required']"
            >
                <template v-slot:append>
                    <q-icon name="person" />
                </template>
            </q-input>
        </div>
        <div class="col-md">
            <q-input outlined dense v-model="passenger.cpf" 
                :label="$t('passenger.cpf')" mask="###.###.###-##"
                :rules="[validateFormCpf]"
            >
                <template v-slot:append>
                    <q-icon name="badge" />
                </template>
            </q-input>
        </div>
        <div class="col-md">
            <q-input outlined dense v-model="passenger.telephone" :label="$t('passenger.telephone')"  mask="(##) ##### - ####">
                <template v-slot:append>
                    <q-icon name="contact_phone" />
                </template>
            </q-input>
        </div>
        <div class="col-md">
            <q-input outlined dense v-model="passenger.email" :label="$t('passenger.email')">
                <template v-slot:append>
                    <q-icon name="mail" />
                </template>
            </q-input>
        </div>
        <div class="col-md">
             <q-btn color="white" text-color="black" :label="$t('general.save')" @click="savePassenger"/>
        </div>
    </div>
</template>
<script>
import { validateCPF } from "../../helpers/general"
import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {
          passenger: {
            name: null,
            cpf: null,
            telephone: null,
            email: null
          }  
        }
    },
    methods: {
        ...mapActions('passengers', ['ActionSavePassenger', 'ActionGetPassengers']),
        savePassenger() {

            this.ActionSavePassenger(this.passenger).then((resp) => {
                this.ActionGetPassengers();
            });
        },
        validateFormCpf(val) {
            let cpf = String(val).replace(/[^\d]/g, '');
            if (cpf.length == 11) { 
                return !validateCPF(val) ? this.$t('general.invalidCpf') : null;
            } else {
                return this.$t('general.enterAllDigits')
            }
        }
    }
}
</script>
<style lang="">
    
</style>