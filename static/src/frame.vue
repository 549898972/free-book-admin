<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .ivu-layout {
        min-height: 840px;
    }
    .ivu-menu-submenu-title {
        padding-left: 16px;
    }
    .iconfont {
        margin-right: 6px;
    }
    .ivu-menu > .ivu-menu-item {
        padding: 0;
    }
    .ivu-menu > .ivu-menu-item > a {
        color: #515a6e;
        display: block;
        height: 50px;
        line-height: 50px;
    }
    .ivu-menu > .ivu-menu-item-selected > a {
        color: #2d8cf0;
    }
    .ivu-menu > .ivu-menu-item-active > a {
        color: #2d8cf0;
    }
    .ivu-menu > .ivu-menu-item:hover > a {
        color: #2d8cf0;
    }

</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <!--<div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>-->
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="copyright">
                            <template slot="title">
                                <span class="iconfont">&#xe632; </span>
                                版权方
                            </template>
                            <MenuItem name="1-1"><a @click="clickTab" href="#/copyright">版权方免费信息配置</a></MenuItem>
                        </Submenu>
                        <Submenu name="single">
                            <template slot="title">
                                <span class="iconfont">&#xe662; </span>
                                单本
                            </template>
                            <MenuItem name="2-1"><a @click="clickTab" href="#/single">单本列表</a></MenuItem>
                            <MenuItem name="2-2"><a @click="clickTab" href="#/single-add-bkey">新增bkey</a></MenuItem>
                            <MenuItem name="2-3"><a @click="clickTab" href="#/single-add-bookid">新增bookid</a></MenuItem>
                            <MenuItem name="2-4"><a @click="clickTab" href="#/single-cancel-auth">取消授权</a></MenuItem>
                        </Submenu>
                        <Submenu name="backup">
                            <template slot="title">
                                <span class="iconfont">&#xe635; </span>
                                后台
                            </template>
                            <MenuItem name="3-1"><a @click="clickTab" href="#/operation-record">操作记录查询</a></MenuItem>
                        </Submenu>
                        <Submenu name="mail">
                            <template slot="title">
                                <span class="iconfont">&#xe73c; </span>
                                邮件
                            </template>
                            <MenuItem name="3-2-1"><a @click="clickTab" href="#/mail">邮件配置</a></MenuItem>
                            <MenuItem name="3-2-2"><a @click="clickTab" href="#/mail-add">邮件添加</a></MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>{{ curRoute }}</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '14px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data() {
          return {
              curRoute:'请选择频道',
          }
        },
        methods: {
            clickTab(e) {
                let route = e.target.innerText
                this.curRoute = route
            }
        }
    }
</script>
