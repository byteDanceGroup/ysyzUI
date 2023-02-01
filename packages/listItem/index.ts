import listItem from './index.vue'
listItem.install = (app: { component: any }) =>{
    app.component(listItem.name, listItem)
}
export default listItem