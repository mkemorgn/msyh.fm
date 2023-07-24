<template>

    <div id="app">
        {{ events }}
    </div>

</template>

<script>
 import axios from "axios";

export default ({
    el: '#app',
    data () {
    return {
        events: null
    }
    },
    mounted () {
    axios
        .get('http://127.0.0.1:8000/api/events')
        .then(response => (this.events = response))
    }
    })
</script>
