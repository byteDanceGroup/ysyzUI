import TabContent from './myTabContent.vue' 
TabContent.install = (app: { component: any }) =>{
    app.component(TabContent.name, TabContent)
}
export default TabContent