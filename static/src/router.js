import VueRouter from 'vue-router'
import Copyright from './components/copyright/Copyright.vue'
import OperationRecord from './components/back/OperationRecord.vue'
import Mail from './components/mail/Mail.vue'
import MailAdd from './components/mail/MailAdd.vue'
import Single from './components/singlebook/Single.vue'
import SingleAddBkey from './components/singlebook/SingleAddBkey.vue'
import SingleAddBookid from './components/singlebook/SingleAddBookid.vue'
import SingleCancelAuth from './components/singlebook/SingleCancelAuth.vue'

var router = new VueRouter({
    routes:[
        { path: '/copyright', component: Copyright },
        { path: '/operation-record', component: OperationRecord },
        { path: '/mail', component: Mail },
        { path: '/mail-add', component: MailAdd },
        { path: '/single', component: Single },
        { path: '/single-add-bkey', component: SingleAddBkey },
        { path: '/single-add-bookid', component: SingleAddBookid },
        { path: '/single-cancel-auth', component: SingleCancelAuth },
    ],
})

export default router