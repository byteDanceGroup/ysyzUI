import Sider from './index.vue'
Sider.install = (app: { component: any }) =>{
    app.component(Sider.name, Sider)
}
export default Sider