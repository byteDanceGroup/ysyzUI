import Content from './index.vue'
Content.install = (app: { component: any }) =>{
    app.component(Content.name, Content)
}
export default Content