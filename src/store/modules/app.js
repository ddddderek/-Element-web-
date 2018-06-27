const app = {
	state: {
		themeColor:"#20a0ff",
		menuType:false,
	},

	mutations: {
		SET_THEMECOLOR:(state,themeColor)=>{
			state.themeColor = themeColor
		},
		SET_MENUTYPE:(state,menuType)=>{
			state.menuType = menuType
		}
	}
}

export default app