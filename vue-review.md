$props

<div v-bind="{id: someProp, name: someOtherProp}"></div>

this.$once('hook:beforeDestroy', function () {
    picker.destroy()
  })
  
组件内注入的路由
$router
$route
vm.beforeRouteEnter()
vm.beforeRouteUpdate()
vm.beforeRouteLeave()
$route.redirectedFrom

完整的导航解析流程
导航被触发。
在失活的组件里调用 beforeRouteLeave 守卫。
调用全局的 beforeEach 守卫。
在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
在路由配置里调用 beforeEnter。
解析异步路由组件。
在被激活的组件里调用 beforeRouteEnter。
调用全局的 beforeResolve 守卫 (2.5+)。
导航被确认。
调用全局的 afterEach 钩子。
触发 DOM 更新。
调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

slot 是用来分发内容的
