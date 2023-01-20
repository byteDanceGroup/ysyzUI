## 技术文档    
2023-01-20
test1
### 组件暴露方式可以留着讨论，目前的声明方式同iview相同，例如button封装为Button。
### packages

- 组件代码都在packages中，其中组件的实现内容在index.ts和index.vue中，,将页面展示内容放在下层的doc文件夹中。
- style文件中有scss文件，定义了颜色变量，后续可以将.vue的样式代码都转移过来。
#### doc
技术文档的展示页面为`doc.md`，其中实现了左侧的菜单栏和中间部分的组件展示(`demo1.vue`等)和代码展示(下文中的`preview.vue`)，在src下的`Home.vue`中通过router实现。

### src

#### components
代码展示模块在components中的`preview.vue`，只实现了代码展示和简单的高亮显示，未进行样式优化。

### router和views中是常规的路由配置和跳转实现。

### 队员在开发过程中，在main.ts中引用本地packages包即可，记得不要引用已发布的npm包。