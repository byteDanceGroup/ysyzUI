import GlobalFooter from './index.vue'
GlobalFooter.install = (app: { component: any }) =>{
    app.component(GlobalFooter.name, GlobalFooter)
}
export default GlobalFooter