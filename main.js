const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    router,
    render: function (h) {
        return h('router-view')
    }
})
    .$mount('#app')