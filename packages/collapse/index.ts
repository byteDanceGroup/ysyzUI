import Collapse from './index.vue';
Collapse.install = (app: { component: any }) => {
	app.component('ysyz-collapse', Collapse);
}
export default Collapse;