<template lang="">
    <div class="row q-gutter-sm">
        <div class="col-md">
            <q-input outlined dense 
                v-model="driver.name" 
                :label="$t('drivers.driver')"
                :rules="[val => val.length > 3 || 'Field is required']"
            >
                <template v-slot:append>
                    <q-icon name="person" />
                </template>
            </q-input>
        </div>
        <div class="col-md">
            <q-input outlined dense v-model="driver.telephone" :label="$t('drivers.telephone')"  mask="(##) ##### - ####">
                <template v-slot:append>
                    <q-icon name="contact_phone" />
                </template>
            </q-input>
        </div>
        <div class="col-md">
            <q-input outlined dense v-model="driver.cnh_category" :label="$t('drivers.driverLicense')">
                <template v-slot:append>
                    <q-icon name="mail" />
                </template>
            </q-input>
        </div>
        <div class="col-md">
            <q-input outlined dense v-model="driver.cnh_number" :label="$t('drivers.licenseNumber')">
                <template v-slot:append>
                    <q-icon name="mail" />
                </template>
            </q-input>
        </div>
        <div class="col-md">
             <q-btn color="primary" text-color="white" :label="!driver.id ? $t('general.save') : $t('general.update')" @click="saveDriver"/>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            driver: {
                id: null,
                name: null,
                telephone: null,
                cnh_category: null,
                cnh_number: null
            }
        }
    },
    methods: {
        ...mapActions('drivers', ['ActionSaveDriver', 'ActionGetDrivers']),
        saveDriver() {
            this.ActionSaveDriver(this.driver)
                .then((resp) => {
                    this.ActionGetDrivers();
                    this.driver =  {
                        id: null,
                        name: null,
                        telephone: null,
                        cnh_category: null,
                        cnh_number: null
                    }
                });
        }
    }
}
</script>
<style lang="">
    
</style>