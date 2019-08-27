<template>
    <div class="wrapper">
        <Form :model="formItem" :label-width="80">
            <FormItem label="bkey列表">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 15,maxRows: 30}" placeholder="每个bkey以回车换行分割"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="submitBkeys">提交</Button>
            </FormItem>
        </Form>
        <Modal
                width="1000"
                v-model="addResult"
                :mask-closable="false"
                title="取消bkey结果">
            <div class="model-wrapper">
                <div class="word-group">
                    <p><h2>取消成功：230本</h2></p>
                    <p><h2>取消失败：113本</h2></p>
                </div>
                <div class="table-wrapper">
                    <Table :columns="failBooks.bookColumn" :data="failBooks.bookList" ref="table">
                    </Table>
                </div>
                <div class="button-group">
                    <Button style="margin-right: 8px" @click="addResult=false">关闭弹窗</Button>
                    <Button type="primary" @click="exportData">导出失败书籍</Button>
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
    .table-wrapper {
        margin-top: 30px;
    }
</style>

<script>
    export default {
        data () {
            return {
                addResult: false,
                formItem: {
                    textarea: ''
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
            exportData () {
                this.$refs.table.exportCsv({
                    filename: '失败列表'
                });
            },
            submitBkeys () {

                this.addResult = true
            }
        }
    }
</script>