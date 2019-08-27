<template>
    <div class="wrapper">
        <div class="search-module">
            <Form :label-width="80">
                <FormItem label="bkey/书名">
                    <Input v-model="form.keyword"></Input>
                </FormItem>
                <FormItem label="操作人">
                    <Input v-model="form.operator"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="queryOperatorList()">查 询</Button>
                </FormItem>
            </Form>
        </div>
        <div class="operatorlist-module">
            <Table :columns="operator.column" :data="operator.data" ref="table">

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
    .operatorlist-module {
        margin: 50px 20px 0 35px;
    }
</style>

<script>
    export default {
        data () {
            return {
                form: {
                    keyword: '',
                    operator: '',
                },
                operator: {
                    column: [
                        {
                            title: 'ID',
                            key: 'id'
                        },
                        {
                            title: 'bkey',
                            key: 'bkey'
                        },
                        {
                            title: 'ckey',
                            key: 'ckey'
                        },
                        {
                            title: 'bookid',
                            key: 'bookid'
                        },
                        {
                            title: '版权方ID',
                            key: 'copyrightId'
                        },
                        {
                            title: '操作人',
                            key: 'operator'
                        },
                        {
                            title: 'op_type',
                            key: 'opType'
                        },
                        {
                            title: 'op_key',
                            key: 'opKey'
                        },
                        {
                            title: 'op_value',
                            key: 'opValue'
                        },
                        {
                            title: '操作时间',
                            key: 'opTime'
                        },
                        {
                            title: '是否免费',
                            key: 'isFree'
                        },
                        {
                            title: 'op_status',
                            key: 'opStatus'
                        },
                    ],
                    data: [
                        {
                            id: '123456',
                            bkey: 'YUJSJ2252',
                            ckey: 'JHDHF1522',
                            bookid: 'cd424420',
                            copyrightId: '42552',
                            operator: '王一',
                            opType: '1',
                            opKey: '123',
                            opValue: '更新',
                            opTime: '2019-08-27 10:32:13',
                            isFree: '免费',
                            opStatus: '成功'
                        },
                        {
                            id: '1234564',
                            bkey: 'YUJSJ22542',
                            ckey: 'JHDHF1522',
                            bookid: 'cd424420',
                            copyrightId: '42552',
                            operator: '王er',
                            opType: '12',
                            opKey: '1233',
                            opValue: '更新',
                            opTime: '2019-08-27 10:32:13',
                            isFree: '免费',
                            opStatus: '成功'
                        },
                    ],
                }
            }
        },
        methods: {
            queryOperatorList () {
                this.keyword
            },
        }
    }
</script>