<template>
    <div class="event-card">
    </div>
</template>

<script>
export default{
    name: 'EventCard'
}
</script>

<style scoped>
.event-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
}

.event-card:haver {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>