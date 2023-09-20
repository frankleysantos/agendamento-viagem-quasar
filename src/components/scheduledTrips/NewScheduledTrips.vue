<template lang="">
    <div class="row q-gutter-sm">
        <div class="col-md">
            <q-select
                v-model="scheduledTrips.state"
                :options="optionsStates"
                color="primary"
                filled
                clearable
                label="Estados"
                option-value="stateId"
                option-label="name"
                @filter="filterFnState"
                use-input
                input-debounce="0"
            >
            <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
        </div>
        <div class="col-md" v-if="scheduledTrips.state">
            <q-select
                v-model="scheduledTrips.cities"
                :options="optionsCities"
                color="primary"
                filled
                clearable
                label="Cidades"
                option-value="stateId"
                option-label="name"
                @filter="filterFnCitie"
                use-input
                input-debounce="0"
            />
        </div>
        <div class="col-md">
            <q-select
                v-model="scheduledTrips.vehicle"
                :options="optionsVehicles"
                color="primary"
                filled
                clearable
                label="Veiculos"
                option-value="stateId"
                :option-label="(res) => `${res.vehicle} (${res.plate} - ${res.year})`"
                @filter="filterFnVehicles"
                use-input
                input-debounce="0"
            />
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            scheduledTrips: {
                state: null,
                citie: null,
                vehicle: null
            },
            optionsStates: [],
            optionsCities: [],
            optionsVehicles: [],
        }
    },

    created() {
        this.ActionGetStates().then((resp) => {
            this.optionsStates = this.states.states;
        });
        this.ActionGetVehicles()
    },

    computed: {
        ...mapState(['states', 'cities', 'vehicles'])
    },

    watch: {
        'scheduledTrips.state': function(val) {
            console.log(val)
            if (val && val.stateId) {
                this.ActionGetCities(val.stateId).then((resp) => {
                    this.optionsCities = this.cities.cities
                });
            } else {
                this.scheduledTrips.cities = null;
            }
        }
    },
    methods: {
        ...mapActions('states', ['ActionGetStates']),
        ...mapActions('cities', ['ActionGetCities']),
        ...mapActions('vehicles', ['ActionGetVehicles']),
        filterFnState (val, update) {
            if (val === '') {
                update(() => {
                    this.optionsStates = this.states.states;
                })
                return;
            }

            update(() => {
                
                const needle = val.toLowerCase()
                console.log('update', needle, this.states.states);
                this.optionsStates = this.states.states.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
            })
        },
        filterFnCitie (val, update) {
            if (val === '') {
                update(() => {
                    this.optionsCities = this.cities.cities
                })
                return;
            }

            update(() => {
                
                const needle = val.toLowerCase()
                this.optionsCities = this.cities.cities.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
            })
        },

        filterFnVehicles (val, update) {
            if (val === '') {
                update(() => {
                    this.optionsVehicles = this.vehicles.vechicles
                })
                return;
            }

            update(() => {
                const needle = val.toLowerCase()
                this.optionsVehicles = this.vehicles.vechicles.filter(v => v.vehicle.toLowerCase().indexOf(needle) > -1)
            })
        }
    }
}
</script>
<style lang="">
    
</style>