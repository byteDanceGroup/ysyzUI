import Table from './index.vue';
Table.install = (app: { component: any }) => {
	app.component('ysyz-table', Table);
}
export default Table;
