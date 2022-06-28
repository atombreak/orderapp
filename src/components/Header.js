import {name} from "../store/globalStore.js";
import {useRecoilValue} from "recoil";
import {Box, Text, IconButton, useColorMode} from "@chakra-ui/react";
import {FaSun, FaMoon} from "react-icons/fa";



const Header = () => {

	const myName = useRecoilValue(name)

	const { colorMode, toggleColorMode } = useColorMode();
	
	return(
		<Box display="flex" alignItems="center" justifyContent="space-between" px={3} py={4}  w="100%" h="auto" bg='blue.600'>
			 <Text color="aliceblue" fontWeight="bold"  fontSize={26}>Super Todo App </Text>	
			 <IconButton onClick={toggleColorMode} 
			  icon={colorMode === "light" ? <FaSun/> : <FaMoon />} rounded="full"/>
		</Box>
	)
}


export default Header;
