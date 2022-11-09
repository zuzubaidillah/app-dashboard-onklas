import {ref} from "vue"

export const asidebar = ref({
	isClass: null,
	isOpenedActive: null,
	isOpened: false,
	setIsOpened(){
		this.isOpened = !this.isOpened
		// let wScreen = window.screen.availWidth
		// if (wScreen<=678){
		// 	this.isClass = 'nosidebar'
		// }else{
			this.isClass = this.isOpened ? 'full_page' : 'with_sidebar'
		// }
	}
})
