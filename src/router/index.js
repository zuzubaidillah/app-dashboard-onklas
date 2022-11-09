import {createRouter, createWebHistory} from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PostinganCom from '../views/PostinganView.vue'
import PostinganEbook from '../views/PostinganEbook.vue'
import HastagCom from '../views/HastagCom.vue'
import BerandaView from '../views/BerandaView.vue'
import PeringkatPost from '../views/PeringkatPost.vue'

const namaApp = 'CMS Sekolah'
const router = createRouter({
	history: createWebHistory(), routes: [{
		path: '/', name: 'login', redirect: '/sosial-media', component: LoginView, meta: {
			title: `Login | ${namaApp}`
		}
	}, {
		path: '/sosial-media', name: 'SosialMedia', redirect: '/sosial-media/postingan', meta: {
			title: `SosialMedia | ${namaApp}`
		}, component: () => import('../views/SosialMedia.vue'), children: [{
			path: 'postingan', name: 'PostinganCom', component: PostinganCom, meta: {
				title: `Postingan | ${namaApp}`
			}
		}, {
			path: 'postingan-ebook', name: 'PostinganEbook', component: PostinganEbook, meta: {
				title: `Postingan E-Book | ${namaApp}`
			}
		}, {
			path: 'hastag', name: 'HastagCom', component: HastagCom, meta: {
				title: `Hastag | ${namaApp}`
			}
		}, {
			path: 'peringkat-post', name: 'PeringkatPost', component: PeringkatPost, meta: {
				title: `Peringkat Post | ${namaApp}`
			}
		}]
	}, {
		path: '/beranda', name: 'BerandaView', component: BerandaView, meta: {
			title: `Beranda | ${namaApp}`
		}
	},
		{
			path: '/:pathMatch(.*)*',
			component: () => import('../views/PageNotFound.vue')
		}],
})

router.beforeEach((to) => {
	document.title = to.meta.title ?? "Title Not Found"
})

export default router
