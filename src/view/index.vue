<template>
  <div id="app-1">
    {{ message1 }}
    <main>
      <a href="https://www.huodongxing.com/" target="_blank">huodongxing</a>
      <h1>Apples</h1>
      <p>The apple is the pomaceous fruit of the apple tree.</p>
    </main>

    <span v-bind:title="message2">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>

    <p v-if="seen">现在你看到我了</p>

    <ol class="demo">
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ol>

    <p>{{ message3 }}</p>
    <button v-on:click="reverseMessage">逆转消息</button>

    <p>{{ message4 }}</p>
    <input v-model="message4">
    <ol>
      <!--
              现在我们为每个 todo-item 提供 todo 对象
              todo 对象是变量，即其内容可以是动态的。
              我们也需要为每个组件提供一个“key”，稍后再
              作详细解释。
      -->
      <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id"></todo-item>
    </ol>
  </div>
</template>

<script>
import Vue from "vue";
Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});
export default {
  name: "Index",
  data() {
    return {
      message1: "Hello Vue!",
      message2: "鼠标悬停",
      seen: true,
      todos: [
        { text: "学习 JavaScript" },
        { text: "学习 Vue" },
        { text: "整个牛项目" }
      ],
      message3: "123456",
      message4: "Hello Vue",
      groceryList: [
        { id: 0, text: "蔬菜" },
        { id: 1, text: "奶酪" },
        { id: 2, text: "随便其它什么人吃的东西" }
      ]
    };
  },
  methods: {
    reverseMessage: function() {
      this.message3 = this.message3
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style>
.demo {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  color: lightcoral;
  border: 1px solid #913249;
  border-radius: 2px;
  padding: 25px 35px;
  margin-top: 1em;
  margin-bottom: 40px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow-x: auto;
}
</style>
