import List from './index.vue'

List.install = (app: { component: any }) =>{
    app.component(List.name, List)
}
export default List