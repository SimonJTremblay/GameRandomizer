import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {  faFistRaised, faUsers, faSkull, faHourglass, faSearch, 
          faTrash, faPlusSquare, faCalendarDay, faAngleLeft, faAngleRight,
          faUser, faTimesCircle
        } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faFistRaised,faUsers,faSkull,faHourglass, faSearch,
    faTrash,faPlusSquare,faCalendarDay, faAngleLeft, faAngleRight,
    faUser,faTimesCircle
    );
Vue.component('vue-fontawesome', FontAwesomeIcon);


import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
