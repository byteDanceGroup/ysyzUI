import Icon from './index.vue'
Icon.install = (app: { component: any }) =>{
    app.component(Icon.name, Icon)
}
export default Icon