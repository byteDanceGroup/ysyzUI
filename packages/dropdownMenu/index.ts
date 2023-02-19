import DropdownMenu from './index.vue';
DropdownMenu.install = (app: { component: any }) => {
	app.component('ysyz-dropdown-menu', DropdownMenu);
}
export default DropdownMenu;
