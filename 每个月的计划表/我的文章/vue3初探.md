## Vue3 学习指南

vue3.0 出来有一段时间来，该来的还是要来的，学习还是要学习的

三字经有云：苏老泉，二十七，始发愤，读书籍。

苏洵二十七岁才开始读书，除了自己的天赋之外，还是有更坚持不懈的努力的。

比你聪明的比你还勤奋，你说气不气（手动狗头）

### 升级@vue/cli

为了让 vue-cli 支持 vue3,需要将 vue-cli 升级到 4.3.1 以上

```bash
npm update -g @vue/cli
```

### 创建项目

```bash
vue create project
vue add vue-next  # 升级vue3.0
npm install vue-router@4.0.0-alpha.7 -S  # 升级路由
```

### 配置路由

按照一般规范，在 src 目录下新建 router 文件夹，在 router 文件夹下新建 index.js 文件。
index.js 内容如下：

```javascript
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/home";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
```

基本的路由配置没有太大改变，大多数情况下你只需要关注 routes 中路由规则编写。接下来，我们需要在 main.js 中接入 router。

main.js:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.mount("#app");
```

不同于我们之前采用 new Vue()创建实例的方式，Vue3 在这里进行了改变；不仅如此，安装路由的方式也由之前的 Vue.use(Router)变成如上方式，同理对于 Vuex 的接入也是大同小异

### 基础语法初探

#### setup

> setup 功能是新的组件选项，它充当在组件内部使用 Composition API（新特性）的入口点；创建组件实例时，在初始道具解析后立即调用。在生命周期方面，它在 beforeCreate 挂接之前被调用。

一般来说，按照我们之前常规的写法，我们在对需要使用变量、计算属性的时候，我们会习惯性的写上：

home/index.vue

```javascript

// vue2
<template>
    <div class='home'>
        <div>{{count}}</div>
        <div>{{foo}}</div>
    </div>
</template>

<script>

import { ref } from 'vue'

export default {
    name: 'home',
    data() {
        return {
            count: 0
        }
    },
    computed: {
        foo() {
            return this.count + 1;
        }
    }
};


// Vue3
<template>
    <div class='home'>
        <div>{{count}}</div>
        <div>{{foo}}</div>
    </div>
</template>

<script>

import { ref, computed } from 'vue'

export default {
    name: 'home',
    setup(props, context) {
        const count = ref(0)
        const foo = computed(() => count.value + 1)
        return {
            count,
            foo
        }
    }
};
</script>

```

setup 接收两个重要参数：

1.props：等同于 vue2 的 props，在这个地方需要注意的地方是，我们不能对这个参数进行解构，如果使用解构会使他失去响应性。例如下面代码就会让 props 传过来的值失去响应性：

```javascript
export default {
  props: {
    name: String,
  },
  setup({ name }) {
    watchEffect(() => {
      console.log(`name is: ` + name); // 失去响应性!
    });
  },
};
```

2. context 其实这个参数我们也是比较熟悉的，它提供了一个上下文对象，该对象公开了先前 this 在 2.x API 中公开的属性的选择性列表，它仅包含三个属性（attrs、slots、emit），举个栗子：

```javascript
setup(props, context) {
    context.attrs // 2.x：this.attrs
    context.slots // 2.x：this.slots
    context.emit // 2.x：this.emit
}

```

### reactive

> 取得一个对象并返回原始对象的反应式代理。这等效于 2.x 的 Vue.observable()。

```javascript
<template>
    <div class='home'>
        <div>{{name}}</div>
    </div>
</template>

<script>

import { reactive } from 'vue'

export default {
    name: 'home',
    setup() {
        const obj = reactive({name: '石东昭'})
        obj.name = '许嵩'; // 修改属性值
        return obj;
    }
};
</script>
```

显而易见的，这个 api 就是单纯的把一个对象变的可响应

### ref

> 接受一个内部值并返回一个反应性且可变的 ref 对象。ref 对象具有.value 指向内部值的单个属性。

可能你会纳闷：2.x 里不是有 ref 吗？

然并卵，就像雷锋和雷峰塔的关系，java 和 javascript 的关系，就是没有关系！

```javascript
<template>
    <div class='home'>
        <div>{{count}}</div>
    </div>
</template>

<script>

import { ref } from 'vue'

export default {
    name: 'home',
    setup() {
        const count = ref(0);
        count.value++;
        console.log(count.value);
        return {
            count
        };
    }
};
</script>
```

这里也有一个注意点，你如果想要修改使用 ref 构造出来的变量，只能对 xxx.value 进行修改，同理你想要在 js 中访问它的值必须使用 xxx.value，直接对 count 进行赋值如 count++，这种写法会报错。

值得一提的是，在 template 模板中使用{{count}}访问的时候不用加.value，这里其实你在使用插值表达式的时候，它内部会自动展开，所以我们直接用就行了。

如果说我们把 reactive 和 ref 结合起来用会有怎样的效果呢，继续举个栗子：

```javascript
const count = ref(0);
const state = reactive({
  count,
});

console.log(state.count); // 0

state.count = 1;
console.log(count.value); // 1
```

当 ref 被访问或作为反应对象的属性进行更改时，它会自动展开为内部值，因此其行为类似于普通属性。

是不是有点懵了，其实我也是(ૢ˃ꌂ˂ૢ)

### computed

熟悉的 computed，还是原来的配方还是原来的味道，熟悉的 getter 和 setter

```javascript
const count = ref(1);
const plusOne = computed(() => count.value + 1);

console.log(plusOne.value); // 2

plusOne.value++; // 无效
```

在这里我们不难发现，它的访问方式也等同于 ref，也是需要采用 xxx.value，与此同时呢，如果你想要修改一个计算属性的值，你必须为他设置 setter，并对相应的依赖进行修改。

```javascript
const count = ref(1);
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1;
  },
});

plusOne.value = 1;
console.log(count.value); // 0
```

### readonly

这个颇有 typeScript 的味道，意如其名，顾名思义，就是构造一个只能访问的属性，这个玩意它针对的很强，也就是无论你这个对象嵌套有多深，被他包装后的对象一定是只能读，其实就是相当于一个代理：

```javascript
const re = reactive({ count: 0 });
const readonlyRe = readonly(re);
readonlyRe.count++; // 无效，并且会给出警告
```

### watchEffect

你妹猜错，这里和 2.x 的 watch 是相似的，是用来监听的

```javascript
const count = ref(0);

watchEffect(() => console.log(count.value));
// -> 打印 0

setTimeout(() => {
  count.value++;
  // -> 打印 1
}, 100);
```

总而言之，他会收集传入函数的依赖，一旦依赖发生发生改变，他就会重新调用你传进来的函数，用过 react hooks 的童靴可能会说，这玩意怎么这么像 useEffect，其实 Vue3 也的确借鉴了 react 一些不错的设计，所以，大家也不要觉得抄袭不抄袭的，框架终究是为用户服务，好的设计自然应该值得借鉴， 就像 react 也有借鉴 Vue 的一些优点对自身进行优化，而且这两个的实现方式是完全不一样的。

当我们调用这个 api 的同时，它会返回一个用于暂停句柄的函数，我们可以显式调用它用于的停止当前监听，并且对于传入给 watchEffect 的回调函数，这个 api 在触发调用的时候会传入一个用于注册无效回调的函数 onInvalidate。具体例子如下：

```javascript
const stop = watchEffect((onInvalidate) => {
  const token = performAsyncOperation(id.value); // 执行一个异步操作
  onInvalidate(() => {
    // 依赖的id发生变化，但是异步操作还未完成，我们就可以在这里停止你的异步操作。
    token.cancel(); // 这里我们假设你的异步操作返回了一个包含取消操作的方法。
  });
});

stop(); // 我们可以使用这个方法去停止它
```

如果我们注册了无效回调方法，那么在这个依赖已经变化但是异步请求还未完成的时候，它内部就会帮我们调用我们注册的无效回调。

(我已经傻了:scream:)

### 生命周期函数

让我们和 2.x 对比一下

1. beforeCreate (vue3 弃用) -> 使用 setup()
2. created (vue3 弃用) -> 使用 setup()
3. beforeMount -> onBeforeMount
4. mounted -> onMounted
5. beforeUpdate -> onBeforeUpdate
6. updated -> onUpdated
7. beforeDestroy -> onBeforeUnmount
8. destroyed -> onUnmounted
9. errorCaptured -> onErrorCaptured

This is a demo：

```javascript
import { onMounted, onUpdated, onUnmounted } from "vue";

const MyComponent = {
  setup() {
    onMounted(() => {
      console.log("mounted!");
    });
    onUpdated(() => {
      console.log("updated!");
    });
    onUnmounted(() => {
      console.log("unmounted!");
    });
  },
};
```

### 模板引用

上面介绍了 ref 这个 api，那我们怎么获取 dom 呢

那当然是 document.querySelector()了（大笑:laughing:）

这个 3.0 必然也是有的，且看：

```javascript
<template>
    <div class='home'>
        <div ref="dom"></div>
    </div>
</template>

<script>

import { ref, onMounted } from 'vue'

export default {
    name: 'home',
    setup() {
        const dom = ref(null)
        onMounted(() => {
            console.log(dom.value);
        })
        return {
            dom
        }
    }
};
</script>

```

从代码中我们可以发现，现在这种访问 dom 的方式和之前区别在于，我们需要显示设定一个响应性变量，然后再在模板中使用之前我们耳熟能详的方式 ref='xxx'来进行设定。

看到这里是不是彻底晕了，vue3.0 还在预览版中，估计正式版快要来了，先慢慢接触消化吧。
这里附上尤雨溪大神几次关于 vue3.0 的演讲视频，让我们进入大神的内心世界。

[【Vue3.0】尤雨溪 - 聊聊 Vue.js 3.0 Beta 官方直播完整版 2020-04-21](https://www.bilibili.com/video/BV1Tg4y1z7FH?from=search&seid=6694407067616080576)

[【Web 前端会客厅】Vue 之父尤雨溪深度解读 Vue3.0 的开发思路（上）](https://www.bilibili.com/video/BV1qC4y18721?from=search&seid=6694407067616080576)

[【Web 前端会客厅】Vue 之父尤雨溪深度解读 Vue3.0 的开发思路（中）](https://www.bilibili.com/video/BV1yK4y1s7Xh?from=search&seid=6694407067616080576)
