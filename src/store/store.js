import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            {id: 1, text: '洗碗', done: true},
            {id: 2, text: '吃饭', done: true},
            {id: 3, text: '刷牙', done: false}
        ],
        // 用户登录信息
        user_id: "",
        username: "",
        nickname: "",
        token: "",
        avatar: "",
        collectList: [],
        clock: 0,  //打脸倒计时的Interval ID
    },
    getters: {
        changeState: state => {
            //相当于vue实例中的methods,用于处理公用data
            //自vuex 面向组件的数据处理
        },
        doneTodos: state => {
            return state.todos.filter(todos => todos.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        },
    },
    mutations: {
        //写法与getters相类似
        //组件想要对于vuex 中的数据进行的处理
        //组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
        //内部操作必须在此刻完成(同步)
        setcollectList(state, payload) {
            state.collectList = payload
        },
        increment(state) {
            state.count++
        },
        inc: state => state.count++,
        setuser_id: (state, payload) => {
            state.user_id = payload
        },
        setUsername: (state, payload) => {
            state.username = payload
        },
        setnickname: (state, payload) => {
            state.nickname = payload
        },
        setexpire_time: (state, payload) => {
            state.expire_time = payload
        },
        settoken: (state, payload) => {
            state.token = payload
        },
        setclock: (state, payload) => {
            state.clock = payload
        },
        // 从localStorage取出数据赋给用户信息
        _flashUser(state) {
            state.user_id = localStorage.user_id
            state.username = localStorage.username
            state.nickname = localStorage.nickname
            state.token = localStorage.token
            state.avatar = localStorage.avatar
        },
        _clearToken(state) {
            state.user_id = ""
            state.username = ""
            state.nickname = ""
            state.token = ""
            state.avatar = ""
            state.collectList = []
        }


    },
    actions: {
        //使得mutations能够实现异步调用，实现例如延迟调用
        increment({commit}, payload) {
            commit('突变方法名')
            //payload应该是一个对象，可通过模板方法调用传入对象的方式将数据从组件传入vuex
        },

    },
    modules: {
        //引入某一个state的以上集合的模块，会自动分别填充到上面，使得结构更加清晰
    },
});