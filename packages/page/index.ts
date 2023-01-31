import Page from './index.vue'
Page.install = (app: { component: any }) =>{
    app.component(Page.name, Page)
}
export default Page
