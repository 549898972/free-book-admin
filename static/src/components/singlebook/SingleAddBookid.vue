<template>
    <div class="wrapper">
        <Form :model="formItem" :label-width="80">
            <FormItem label="版权方">
                <Select v-model="model1" style="width:300px">
                    <Option v-for="item in copyrightList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </FormItem>
            <FormItem label="输入bookid">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 15,maxRows: 30}" placeholder="每个bkey以回车换行分割"></Input>
            </FormItem>
            <FormItem label="sell_status">
                <Input v-model="formItem.sellStatus"></Input>
            </FormItem>
            <FormItem label="copy_right">
                <Input v-model="formItem.copyright"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="submitBkeys">提交</Button>
            </FormItem>
        </Form>
        <Modal
                v-model="addResult"
                :mask-closable="false"
                title="添加bkey结果">
            <div class="model-wrapper">
                <div class="word-group">
                    <p>实际数据已经发送到：</p>
                    <p>furong@sogou-inc.com 邮箱，请查收</p>
                </div>
                <div class="button-group">
                    <Button @click="addResult=false">关闭弹窗</Button>
                </div>
            </div>
        </Modal>
    </div>
</template>

<style scoped>
    .wrapper {
        width: 500px;
        margin: 50px;
    }
    .model-wrapper {
        margin: 30px;
    }
    .button-group {
        margin: 30px 0;
    }
    .word-group p {
        font-size: 16px;
        line-height: 40px;
    }
</style>

<script>
    export default {
        data () {
            return {
                addResult: false,
                formItem: {
                    copyrightList: [{label: '阅文', value: 'yuewen'}],
                    textarea: '',
                    sellStatus: '',
                    copyright: ''
                },
                failBooks: {
                    bookColumn: [
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
                    bookList: [
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
                    ],
                }

            }
        },
        methods: {
            submitBkeys () {

                this.addResult = true
            }
        }
    }
</script>