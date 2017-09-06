import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
	 state:{
        user_name:"",
        pid:111
    },
    mutations:{
        show(state,id){
        state.pid=id;
        alert(state.pid);
        }
    }
})