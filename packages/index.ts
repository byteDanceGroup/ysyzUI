import Button from "./button/index"
const install = (app: { use: (arg0: any) => void; })=>{
    app.use(Button)
}
const QUI = {
    install,
}
export{
    Button
};
export default QUI;