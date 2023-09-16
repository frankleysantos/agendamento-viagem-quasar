<template lang="">
    <div>
        <q-table
            title="Veículos"
            :rows="passengers.passengers"
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
                        {{ col.label == 'actions' ? $t('general.'+col.label): $t('passenger.'+col.label)  }}
                    </q-th>
                </q-tr>
            </template>

            <template v-slot:body="props">
                <q-tr align="center">
                    <q-td key="passenger">
                        {{ props.row.passenger }}
                    </q-td>
                    <q-td key="cpf">
                        {{ props.row.cpf }}
                    </q-td>
                    <q-td key="telephone">
                        {{ props.row.telephone }}
                    </q-td>
                    <q-td key="email">
                        {{ props.row.email }}
                    </q-td>
                    <q-td key="actions">
                        <q-icon class="cursor-pointer" name="edit"  size="20px" color="primary" @click="editPassenger(props.row.passengerId)"/>
                        <!-- <q-icon class="cursor-pointer" name="delete" size="20px" color="red-5" @click="editPassenger(props.row.passengerId)"/> -->
                    </q-td>
                </q-tr>
              </template>
        </q-table>
        
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
    created() {
        this.ActionGetPassengers()
    },
    data() {
        return {
            columns: [
                {
                    name: "passenger",
                    align: "center",
                    label: 'passenger',
                    field: "passenger",
                    sortable: true,
                },
                {
                    name: "cpf",
                    align: "center",
                    label: 'cpf',
                    field: "cpf",
                    sortable: true,
                },
                {
                    name: "telephone",
                    align: "center",
                    label: 'telephone',
                    field: "telephone",
                    sortable: true,
                },
                {
                    name: "email",
                    align: "center",
                    label: 'email',
                    field: "email",
                    sortable: true,
                },
                {
                    name: "actions",
                    align: "center",
                    label: 'actions',
                    field: 'actions',
                    sortable: false,
                },
            ]
        }
    },
    methods: {
        ...mapActions('passengers', ['ActionGetPassengers']),
        editPassenger(passengerId) {
            this.$emit('editPassengerSon', {
                passengerId: passengerId
            })
        }
    },
    computed: {
        ...mapState(['passengers'])
    }
}
</script>
<style lang="">
    
</style>