const Phone = { 
			template: `
						<table border="1" cellspacing="0" style="background:#bfcfff;">
							<tr><th>이름</th><th>전화번호</th></tr>
							<tr><td>유관순</td><td>010-1111-2222</td></tr>
							<tr><td>홍길동</td><td>010-1111-3333</td></tr>
							<tr><td>이순신</td><td>010-1111-7777</td></tr>
						</table>						
					  ` 
			}
const Mail = { 
			template: `
						<table border="1" cellspacing="0" style="background:#b9ff73;">
							<tr><th>이름</th><th>이메일</th></tr>
							<tr><td>유관순</td><td>jeon@ssabu.net</td></tr>
							<tr><td>홍길동</td><td>hong@ssabu.net</td></tr>
							<tr><td>이순신</td><td>lee@ssabu.net</td></tr>
						</table>
					  ` 
			}

const routes = [
  { path: '/phone', component: Phone },
  { path: '/mail', component: Mail }
]


const router = new VueRouter({
  routes
})

const app = new Vue({
  el : '#app',
  data : {
	title: 'Vue Router 샘플',  
  },
  router
})
