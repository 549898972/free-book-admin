<template>
    <div class="wrapper">
        <div class="search-module">
            <Form :label-width="80">
            <FormItem label="bkey/书名">
                <Input v-model="keyword"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="queryBookList()">查 询</Button>
            </FormItem>
            </Form>
        </div>
        <div class="booklist-module">
            <div class="button-group">
                <Button type="primary" @click="singleAddBkey">bkey新增</Button>
                <Button type="primary" @click="singleAddBookid">bookid新增</Button>
                <Button type="error" @click="singleCancelAuth">取消授权</Button>
                <Button type="default" @click="exportData">导出</Button>
            </div>
            <Table :columns="books.bookColumn" :data="books.bookList" ref="table">

            </Table>
        </div>
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
        margin: 50px 20px 0 35px;
    }
    .button-group {
        padding: 0 0 20px 0;
    }
    .button-group button {
        margin-right: 8px;
        min-width: 100px;
    }
</style>

<script>
    export default {
        data () {
            return {
                keyword: '',
                books: {
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
                }
            }
        },
        methods: {
            queryBookList () {
                this.keyword
            },
            exportData () {
                //一定要给Table标签添加属性 ref="table" 才能使用导出csv
                this.$refs.table.exportCsv({
                    filename: '导出数据'
                });
            },
            singleAddBkey () {
                this.$router.push({ path: '/single-add-bkey' })
            },
            singleAddBookid () {
                this.$router.push({ path: '/single-add-bookid' })
            },
            singleCancelAuth () {
                this.$router.push({ path: '/single-cancel-auth' })
            },
        }
    }
</script>