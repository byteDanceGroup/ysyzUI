import Form from './index.vue'
Form.install = (app: { component: any }) =>{
    app.component(Form.name, Form)
}
export default Form