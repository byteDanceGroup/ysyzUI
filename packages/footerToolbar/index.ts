import FooterToolbar from './index.vue';
FooterToolbar.install = (app: { component: any }) => {
	app.component('ysyz-footer-toolbar', FooterToolbar);
}
export default FooterToolbar;
