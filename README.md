# igo-mall商城项目

### 介绍

一个简单的商城项目，目的只是为了练手实战，项目前后端分离。

### 代码仓库

https://github.com/iwuss/igo-mall

### 项目结构

<img style="box-shadow:unset;" src="/medias/article/mall/1.png">

#### Node后端

采用Protobuf进行数据交换，并且定义的实体结构可以给前端使用，无需在前端重复定义。

1、主要技术栈
- Nestjs
- Typescript
- mongoDB
- Progress SQL（待定）
- Redis
- Protobuf

2、功能（待定）
- [x] 用户登录

#### web商城

开发单页面应用，为了更好的SEO，利用Nuxt同构框架进行SSR

1、主要技术栈
- Nuxtjs
- Redis
- Vue2.x
- Typescript
- Ant Design vue

2、功能（待定）
- [ ] 用户登录

#### 小程序

1、主要技术栈
- Taro
- Vue3
- Typescript
- Sass

2、功能（待定）
- [x] 用户登录

#### CMS

商城的内容管理后台

1、主要技术栈
- Element+
- Vue3
- Typescript

2、功能（待定）
- [ ] 用户登录