<style scoped>
    @import 'styles/common.css';
</style>

<template>
    <div>
        <router-view></router-view>
    </div>
    <Tree data="baseData" show-checkbox></Tree>
</template>

<script>
//    import baseData from 'data.json';
//    require('data.json');
    export default {
        data () {
            return {
            baseData: [{
                "expand": true,
                "title": "parent 1",
                "children": [{
                    "title": "parent 1-0",
                    "expand": true,
                    "disabled": true,
                    "children": [{
                        "title": "leaf",
                        "disableCheckbox": true
                    }, {
                        "title": "leaf"
                    }]
                }, {
                    "title": "parent 1-1",
                    "expand": true,
                    "checked": true,
                    "children": [{
                        "title": "leaf"
                    }]
                }]
            }]};
        }
    }
</script>
