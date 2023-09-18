<template lang="">
    <q-pull-to-refresh @refresh="refreshTable">
        <q-table
            title="Veículos"
            :rows="vehicles.vechicles"
            :columns="columns"
            row-key="name"
        >
            <template v-slot:header="props">
                <q-tr :props="props">
                    <q-th
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                    >
                        {{ $t('vehicle.'+col.label)  }}
                    </q-th>
                </q-tr>
            </template>

            <template v-slot:body="props">
                <q-tr align="center">
                  <q-td key="vehicle">
                    {{ props.row.vehicle }}
                    <q-popup-edit v-model="props.row.vehicle" v-slot="scope">
                        Veiculo
                      <q-input v-model="scope.value" dense autofocus counter>
                        <template v-slot:append>
                            <q-icon name="save" color="primary" @click="updateVehicle(props.row, scope.value, 'name')"/>
                          </template>
                      </q-input>
                    </q-popup-edit>
                  </q-td>
                  <q-td key="plate">
                    {{ props.row.plate }}
                    <q-popup-edit v-model="props.row.plate" v-slot="scope">
                        Placa
                      <q-input v-model="scope.value" dense autofocus counter>
                        <template v-slot:append>
                            <q-icon class="cursor-pointer" name="save" color="primary" @click="updateVehicle(props.row, scope.value, 'plate')"/>
                          </template>
                      </q-input>
                    </q-popup-edit>
                  </q-td>
                  <q-td key="year">
                    {{ props.row.year }}
                    <q-popup-edit v-model="props.row.year" v-slot="scope">
                        Placa
                      <q-input v-model="scope.value" dense autofocus counter>
                        <template v-slot:append>
                            <q-icon class="cursor-pointer" name="save" color="primary" @click="updateVehicle(props.row, scope.value, 'year')"/>
                          </template>
                      </q-input>
                    </q-popup-edit>
                  </q-td>
                </q-tr>
              </template>
        </q-table>
    </q-pull-to-refresh> 
    
  </template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            scope: null,
            columns: [
                {
                    name: "vehicle",
                    align: "center",
                    label: 'vehicles',
                    field: "vehicle",
                    sortable: true,
                },
                {
                    name: "plate",
                    align: "center",
                    label: 'plate',
                    field: "plate",
                    sortable: true,
                },
                {
                    name: "year",
                    align: "center",
                    label: 'year',
                    field: "year",
                    sortable: true,
                },
            ],
            vehicle: {
                name: null,
                plate: null,
                year: null,
                color: null,
                total_capacity: null,
                description: null,
                last_mileage: null
            },
        };
    },
    async mounted() {
        this.ActionGetVehicles();
    },
    computed: {
        ...mapState(["vehicles"]),
    },
    methods: {
        ...mapActions("vehicles", ["ActionGetVehicles", "ActionUpdateVehicle"]),
        ...mapActions("auth", ["ActionGetProfile"]),
        updateVehicle(vehicleRow, value, key) {
            var vm = this;
            vm.vehicle = {
                id: vehicleRow.vehicleId,
                name: key == 'name' ? value : vehicleRow.vehicle,
                plate: key == 'plate' ? value : vehicleRow.plate,
                color: key == 'color' ? value : vehicleRow.color,
                year: key == 'year' ? value : vehicleRow.year,
                total_capacity: key == 'capacity' ? value : vehicleRow.totalCapacity,
                description: key == 'description' ? value : vehicleRow.description,
                mileage: key == 'mileage' ? value : vehicleRow.mileage[0].last_mileage,
            };
            this.ActionUpdateVehicle(vm.vehicle)
                .then((resp) => {
                    this.ActionGetVehicles();
                });
        },
        async refreshTable(done) {
            setTimeout(() => {
                this.ActionGetVehicles();
                done()
            }, 1000)
        }
    },
};
</script>
<style lang=""></style>
  