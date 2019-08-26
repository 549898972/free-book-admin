<template>
    <div class="wrapper">
        <div>
            <Select v-model="model1" style="width:300px">
                <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Button type="primary" @click="add = true">新 增</Button>
            <Button type="error">删 除</Button>
            <Button type="success" @click="sync=true">数据同步</Button>
        </div>
        <div style="margin-top: 30px;">
            <Table border highlight-row ref="selection" :columns="columns4" :data="copyRightList" style="margin-bottom: 30px;" @on-selection-change="onSelectionChange">
                <template slot-scope="{ row, index }" slot="update">
                    <Button type="primary" size="small" @click="showUpdate(index)">修 改</Button>
                </template>
                <template slot-scope="{ row, index }" slot="detail">
                    <Button type="success" size="small" style="margin-right: 5px" @click="showDetail(index)">明 细</Button>
                </template>
            </Table>
            <Button @click="handleSelectAll(true)">全选</Button>
            <Button @click="handleSelectAll(false)">清除</Button>
        </div>
        <Modal
                v-model="add"
                :mask-closable="false"
                title="新增版权方">
            <Form :model="formItem" :label-width="80">
                <FormItem label="Input">
                    <Input v-model="addForm.input" placeholder="版权方名称"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary">Submit</Button>
                    <Button style="margin-left: 8px" @click="add=false">Cancel</Button>
                </FormItem>
            </Form>
        </Modal>
        <Modal
                v-model="sync"
                :mask-closable="false"
                title="数据同步">
            <div class="sync-word-group">
                <p>数据已同步成功，目前书库内有免费图书100000本</p>
                <p>新增图书：230本</p>
                <p>取消图书：113本</p>
            </div>
            <div class="sync-button-group">
                <Button type="primary">发送相关人员</Button>
                <Button style="margin-left: 8px" @click="sync=false">不发送</Button>
            </div>
        </Modal>
        <Modal
                v-model="update"
                :mask-closable="false"
                title="修改版权方">
            <Form :model="formItem" :label-width="80">
                <FormItem v-for="item in updateForm" :label="item.chName">
                    <Input v-model="item.value" ></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="update1">Submit</Button>
                    <Button style="margin-left: 8px" @click="update=false">Cancel</Button>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                //新增模块显示开关
                add: false,
                //新增表单数据
                addForm: {
                    input: '',
                },
                //数据同步
                sync: false,
                //修改模块显示开关
                update: false,
                //更新表单数据
                updateForm: {
                    copyrightId: {chName: '版权方ID', value: '123'},
                    copyrightName: {chName: '版权方名称', value: '456'},
                },
                //合作版权方类型
                typeList: [
                    {
                        value: '0',
                        label: '汇总'
                    },
                    {
                        value: '1',
                        label: '全部免费'
                    },
                    {
                        value: '2',
                        label: '全部免费+剔除'
                    },
                    {
                        value: '3',
                        label: '部分合作免费'
                    },
                    {
                        value: '4',
                        label: '不合作免费'
                    }
                ],
                model1: '',
                //表格列名
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: '修改数据',
                        slot: 'update',
                        width: 120,
                        align: 'center'
                    },
                    {
                        title: '数据明细',
                        slot: 'detail',
                        width: 120,
                        align: 'center'
                    },
                ],
                //表格数据
                copyRightList: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                //选定版权方
                selections: [],
            }
        },
        methods: {
            //全选按钮事件
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            //根据id获得版权方明细
            getOneCopyRight (params) {

                return {}
            },
            //表格单行明细
            showDetail (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.copyRightList[index].name}<br>Age：${this.copyRightList[index].age}<br>Address：${this.copyRightList[index].address}`
                })
            },
            //表格单行修改
            showUpdate () {
                this.update = true;
            },
            //表格单行更新
            update1 () {
                console.log(this.updateForm);
            },
            //表格单行移除
            remove (index) {
                this.copyRightList.splice(index, 1);
            },
            //表格行选定事件
            onSelectionChange (selections) {
                this.selections = selections
                console.log(this.selections)
                console.log(this.selections[0])
            },
            //批量删除选定版权商
            deleteSelection () {

            },
        }
    }
</script>
<style scoped>
    button {
        min-width: 80px;
        margin-right: 13px;
        font-size: 14px;
        display: inline-block;
    }
    .ivu-select {
        margin-right: 25px;
        font-size: 14px;
        display: inline-block;
    }
    .wrapper {
        padding: 20px 30px 30px 30px;
    }
    .ivu-select-single .ivu-select-selection .ivu-select-placeholder,
    .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
        font-size: 14px
    }
    .sync-word-group {
        margin: 20px 0 15px 30px;
    }
    .sync-word-group > p {
        margin-bottom: 10px;
        font-size: 14px;
    }
    .sync-button-group {
        padding: 10px 0 20px 30px;
    }
    .sync-button-group button {
        min-width: 116px;
    }
</style>