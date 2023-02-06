import Panel from './index.vue';
Panel.install = (app: { component: any }) => {
	app.component('ysyz-panel', Panel);
}
export default Panel;