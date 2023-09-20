<template lang="">
    <!--  -->
    <div>
        <q-table :title="$t('drivers.drivers')" :rows="drivers.drivers" :columns="columns" row-key="name">
            <template v-slot:header="props">
                <q-tr :props="props">
                    <q-th
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                    >
                        {{ col.label == 'actions' ? $t('general.'+col.label): $t('drivers.'+col.label)  }}
                    </q-th>
                </q-tr>
            </template>
        </q-table>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            columns: [
                {
                    name: 'driver',
                    label: 'driver',
                    field: 'driver',
                    align: 'center'
                },
                {
                    name: 'telephone',
                    label: 'telephone',
                    field: 'telephone',
                    align: 'center'
                },
                {
                    name: 'cnh_category',
                    label: 'driverLicense',
                    field: 'cnh_category',
                    align: 'center'
                },
                {
                    name: 'cnh_number',
                    label: 'licenseNumber',
                    field: 'cnh_number',
                    align: 'center'
                }
            ]
        }
    },
    async created() {
        await this.ActionGetDrivers();
    },
    computed: {
        ...mapState(['drivers']),
    },
    methods: {
        ...mapActions('drivers', ['ActionGetDrivers'])
    }
}
</script>
<style lang="">
    
</style>