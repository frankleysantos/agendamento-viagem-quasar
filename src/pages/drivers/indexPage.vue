<template lang="">
    <q-page padding>
        <FormDriver />
        <TableDrivers />
    </q-page>
</template>
<script>
import FormDriver from '../../components/driver/newDriver';
import TableDrivers from '../../components/driver/tableDrivers';
export default {
    components: {
        FormDriver,
        TableDrivers
    }
}
</script>
<style lang="">
    
</style>