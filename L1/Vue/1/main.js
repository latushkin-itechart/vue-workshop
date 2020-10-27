const app = new Vue({
    template: `
       <div class="app">
        <div class="alert alert-primary">{{message}}</div>
        <p class="font-weight-italic"> Visited at {{visitDate}}</p>
       </div>
    `,
    data: {
        message: "Hello, World!",
        visitDate: new Date().toLocaleString()
    }
})
app.$mount("#app");