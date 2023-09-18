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
             <q-btn color="primary" text-color="white" :label="!passenger.id ? $t('general.save') : $t('general.update')" @click="savePassenger"/>
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
            id: null,
            name: null,
            cpf: null,
            telephone: null,
            email: null
          }  
        }
    },
    props: {
        passengerId: {
            default: null,
            type: Number
        }
    },
    watch: {
        passengerId: function(value) {
            this.ActionGetPassenger(value).then((resp) => {
                this.passenger = {
                    id: resp.passengerId,
                    name: resp.passenger,
                    cpf: resp.cpf,
                    telephone: resp.telephone,
                    email: resp.email
                }
            })
        }
    },
    methods: {
        ...mapActions('passengers', ['ActionSavePassenger', 'ActionGetPassengers', 'ActionGetPassenger']),
        savePassenger() {

            this.ActionSavePassenger(this.passenger).then((resp) => {
                this.ActionGetPassengers();
                this.resetPassenger();
            });
        },
        validateFormCpf(val) {
            if (val) {
                let cpf = String(val).replace(/[^\d]/g, '');
                if (cpf.length == 11) { 
                    return !validateCPF(val) ? this.$t('general.invalidCpf') : null;
                } else {
                    return this.$t('general.enterAllDigits')
                }
            }
            return null;
        },
        resetPassenger() {
            this.passenger.id = null;
            this.passenger.name =null;
            this.passenger.cpf =null;
            this.passenger.telephone =null;
            this.passenger.email =null;
        }
    }
}
</script>
<style lang="">
    
</style>