import Grid from './index.vue';
Grid.install = (app: { component: any }) => {
	app.component('ysyz-grid', Grid);
};
export default Grid;
