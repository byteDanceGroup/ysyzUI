import Layout from './index.vue'
Layout.install = (app: { component: any }) =>{
    app.component(Layout.name, Layout)
}
export default Layout