<template>
    <div>
        <h1 @click="test">这是App2的用户管理页面！</h1>
    </div>
</template>
<script>
export default {
    name: 'user-auth',
    methods: {
        test() {
            this.$router.push({
                path: '/auth/org',
                query: {
                    name: '123'
                }
            })
        }
    }
}
</script>
