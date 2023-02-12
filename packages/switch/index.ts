import Switch from './index.vue'

Switch.install = (app: { component: any }) =>{
    app.component(Switch.name, Switch)
}
export default Switch