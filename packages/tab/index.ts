import Tabs from './tabs.vue'
Tabs.install = (app: { component: any }) =>{
    app.component(Tabs.name, Tabs)
}
export default Tabs