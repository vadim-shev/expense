
/* 
	Main.js mission:
	Templates --> Components --> ~~compile modules~~ --> Compiled Single Page Application --> Finish
*/



import { isLocalhost } from './globals.js'

import Vue from './nodes/npm/vue/dist/vue@min/vue.esm.browser.min.js'

import { MainTemplate } from './templates/main-template.js'
import Header from './components/header.js'
import Aside from './components/aside.js'
import Main from './components/main.js'
import Footer from './components/footer.js'

Vue.use(VueRouter)

window.onscroll = () => {
	console.log('obj')
}

var firebaseConfig = {
  	apiKey: "AIzaSyCWADWvPUQDrp3wYfyGqRGlYcKk_yaihRU",
  	authDomain: "tentative-web.firebaseapp.com",
  	databaseURL: "https://tentative-web.firebaseio.com",
  	projectId: "tentative-web",
  	storageBucket: "tentative-web.appspot.com",
  	messagingSenderId: "995843856822",
  	appId: "1:995843856822:web:548dbfb70157f894e38917",
 	measurementId: "G-MWC89TJX55"
}


firebase.initializeApp(firebaseConfig)

var usersRef = firebase.database().ref('users')

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: () => import('./components/home.js'),
			name: 'Home Page',
			meta: {
				title: 'Home'
			}
		},
		{
			path: '/blog',
			component: () => import('./components/blog/blog.js'),
			name: 'Blog Hub',
			meta: {
				title: 'Blog'
			}
		},
		{
			path: '*',
			component: () => import('./components/not-found.js'),
			meta: {
				title: 'Page not found'
			}
		}
	]
})

router.beforeEach(( to, from, next ) => {
	document.title = `${to.meta.title} | Expense`

	next()
})

new Vue({
	el: '#app',
	components: {
		'ceiling': Header,
		'quay': Aside,
		'lobby': Main,
		'floor': Footer
	},
	mounted: function() {

	},
	data: function() {
		return {
			isLocalhost: isLocalhost,

		}
	},
	router,
	template: MainTemplate
})