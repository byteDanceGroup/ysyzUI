import Breadcrumb from "./index.vue"

Breadcrumb.install = (app: { component: any }) =>{
    app.component(Breadcrumb.name, Breadcrumb)
}
export default Breadcrumb