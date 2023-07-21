<template lang="">
    <div :class="$q.platform.is.mobile ? 'q-pa-sm q-gutter-sm' : 'row q-pb-sm flex flex-start q-gutter-sm'">
        <div class="col-lg col-md-4 col-sm-12">
            <q-input outlined  v-model="vehicle.name" :label="$t('vehicle.vehicle')" dense>    
                <template v-slot:append>
                    <q-icon name="no_crash" />
                </template>
            </q-input>
        </div>
        <div class="col-lg col-md-4 col-sm-12">
            <q-input outlined v-model="vehicle.plate" :label="$t('vehicle.plate')" dense>    
                <template v-slot:append>
                    <q-icon name="branding_watermark" />
                </template>
            </q-input>
        </div>
        <div class="col-lg col-md col-sm-12">
            <q-input outlined v-model="vehicle.year" :label="$t('vehicle.year')" dense>    
                <template v-slot:append>
                    <q-icon name="calendar_today" />
                </template>
            </q-input>
        </div>
        <div class="col-lg col-md-4 col-sm-12">
            <q-input outlined v-model="vehicle.color" :label="$t('vehicle.color')" dense>    
                <template v-slot:append>
                    <q-icon name="palette" />
                </template>
            </q-input>
        </div>
        <div class="col-lg col-md-4 col-sm-12">
            <q-input outlined v-model="vehicle.total_capacity" :label="$t('vehicle.totalCapacity')" dense type="number" min="1">    
                <template v-slot:append>
                    <q-icon name="reduce_capacity" />
                </template>
            </q-input>
        </div>
        <div class="col-lg col-md col-sm-12">
            <q-input outlined v-model="vehicle.last_mileage" :label="$t('vehicle.mileage')" dense>    
                <template v-slot:append>
                    <q-icon name="speed" />
                </template>
            </q-input>
        </div>
        <div class="col-lg col-md-6 col-sm-12" :align="$q.platform.is.mobile ? 'right' : ''">
            <q-btn size="md" color="primary" icon="save" :label="$q.platform.is.mobile ? '' : $t('vehicle.addVehicle')" @click="saveVehicle"/>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            vehicle: {
                name: null,
                plate: null,
                year: null,
                color: null,
                total_capacity: null,
                description: null,
                last_mileage: null
            },
        }
    },
    methods: {
        ...mapActions('vehicles', ['ActionGetVehicles', 'ActionSaveVehicle']),
        saveVehicle() {
            this.ActionSaveVehicle(this.vehicle)
                .then((resp) => this.ActionGetVehicles());
        }
    }
}
</script>
<style lang="">
    
</style>