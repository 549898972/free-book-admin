<template>
    <div class="wrapper">
        <div class="search-module">
            <Form :label-width="80">
                <FormItem label="姓名">
                    <Input v-model="keyword"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="queryBookList()">查 询</Button>
                    <Button type="success" @click="showAdd = true">添 加</Button>
                    <Button type="error" >删 除</Button>
                </FormItem>
            </Form>
        </div>
        <div class="booklist-module">
            <Table :columns="mail.column" :data="mail.data" @on-selection-change="onSelectionChange">

            </Table>
        </div>
        <Modal
                v-model="showAdd"
                :mask-closable="false"
                title="新增邮件发送人">
            <Form :label-width="80">
                <FormItem label="邮箱">
                    <Input v-model="addForm.mail"></Input>
                </FormItem>
                <FormItem label="真实姓名">
                    <Input v-model="addForm.name"></Input>
                </FormItem>
                <FormItem label="tel">
                    <Input v-model="addForm.tel"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary">提 交</Button>
                    <Button style="margin-left: 8px" @click="showAdd=false">取 消</Button>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>

<style scoped>
    .search-module {
        max-width: 500px;
        margin: 20px;
    }
    .search-module {
        min-width: 100px;
    }
    .booklist-module {
        margin: 50px 50px 0 35px;
    }
    .button-group {
        padding: 0 0 20px 0;
    }
    .search-module button {
        margin-right: 10px;
    }
</style>

<script>
    export default {
        data () {
            return {
                keyword: '',
                mail: {
                    column: [
                        {
                            type: 'selection',
                            width: 60,
                            align: 'center'
                        },
                        {
                            title: 'bkey',
                            key: 'bkey'
                        },
                        {
                            title: '书名',
                            key: 'name'
                        },
                        {
                            title: '作者',
                            key: 'author'
                        },
                        {
                            title: '版权方',
                            key: 'copyright'
                        },
                        {
                            title: '描述',
                            key: 'desc'
                        },
                        {
                            title: '类型',
                            key: 'type'
                        },
                        {
                            title: '评论',
                            key: 'comment'
                        }
                    ],
                    data: [
                        {
                            bkey: '123456',
                            name: '战神狂飙',
                            author: '七夜',
                            copyright: '阅文集团',
                            desc: '很好看的呢',
                            type: '奇幻玄幻',
                            comment: '很好看，值得一看'
                        },
                        {
                            bkey: '123456890',
                            name: '都市特种兵',
                            author: '爸爸',
                            copyright: '阅文集团',
                            desc: '很不好看的呢',
                            type: '都市生活',
                            comment: '也是很好看，值得一看'
                        },
                        {
                            bkey: '123456890',
                            name: '都市特种兵',
                            author: '爸爸',
                            copyright: '阅文集团',
                            desc: '很不好看的呢',
                            type: '都市生活',
                            comment: '也是很好看，值得一看'
                        },
                        {
                            bkey: '123456890',
                            name: '都市特种兵',
                            author: '爸爸',
                            copyright: '阅文集团',
                            desc: '很不好看的呢',
                            type: '都市生活',
                            comment: '也是很好看，值得一看'
                        },
                        {
                            bkey: '123456890',
                            name: '都市特种兵',
                            author: '爸爸',
                            copyright: '阅文集团',
                            desc: '很不好看的呢',
                            type: '都市生活',
                            comment: '也是很好看，值得一看'
                        },
                        {
                            bkey: '123456890',
                            name: '都市特种兵',
                            author: '爸爸',
                            copyright: '阅文集团',
                            desc: '很不好看的呢',
                            type: '都市生活',
                            comment: '也是很好看，值得一看'
                        }
                    ],
                },
                showAdd: false,
                addForm: {
                    mail: '',
                    name: '',
                    tel: '',
                }
            }
        },
        methods: {
            queryBookList () {
                this.keyword
            },
            onSelectionChange (selections) {
                this.selections = selections
                console.log(this.selections)
            },
        }
    }
</script>