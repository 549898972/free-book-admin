//引入Vue和相关组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//路由文件
import router from './router'

//引入iview组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';

//引入iView组件
/*
import {
    Button,
    Table,
    Layout,
    Header,
    Select,
    Option,
    Modal,
    Form,
    FormItem,
    Menu,
    MenuItem,
    Sider,
    Submenu,
    Breadcrumb,
    BreadcrumbItem,
    Content
} from 'iview';
*/

//引入iView组件css
/*import 'iView/src/styles/custom.less'
import 'iView/src/styles/index.less'
import 'iView/src/styles/components/button.less'*/

//引入自定义字体图标样式
import './css/iconfonts.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(iView)

/*Vue.component(Button.name, Button)
Vue.component(Table.name, Table)
Vue.component(Header.name, Header)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Modal.name, Modal)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Sider.name, Sider)
Vue.component(Submenu.name, Submenu)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Content.name, Content)*/

Vue.config.devtools = true;

//引入组件
import frame from './frame.vue'

new Vue({
    el: '#app',
    data: {
        visible: false
    },
    methods: {
        show: function () {
            this.visible = true;
        }
    },
    render: c => c(frame),
    router: router,
})