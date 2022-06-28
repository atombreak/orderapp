import {atom, selector} from 'recoil';


export const Tasks = atom({
	key: "tsks",
	default: []
})

export const DarkMode = atom({
	key:"darkmode",
	default: ""
})



/*
 export const change = selector({
	key: "change",
	
	set: ({set}) => {
		set(name, "my new name is here")
	}
})
*/
