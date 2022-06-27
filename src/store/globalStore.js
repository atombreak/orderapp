import {atom, selector} from 'recoil';


export const name = atom({
	key: "name",
	default: "Memo creator"
})


/*
 export const change = selector({
	key: "change",
	
	set: ({set}) => {
		set(name, "my new name is here")
	}
})
*/
