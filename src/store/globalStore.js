import {atom, selector} from 'recoil';


export const Tasks = atom({
	key: "tasks",
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
