<template lang="">
    <div>
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
        </q-table>
    </div>  
    
  </template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
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
        };
    },
    async mounted() {
        // this.ActionGetProfile();
        this.ActionGetVehicles();
    },
    computed: {
        ...mapState(["vehicles"]),
    },
    methods: {
        ...mapActions("vehicles", ["ActionGetVehicles"]),
        ...mapActions("auth", ["ActionGetProfile"]),
    },
};
</script>
<style lang=""></style>
  