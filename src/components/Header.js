import {name} from "../store/globalStore.js";
import {useRecoilValue} from "recoil";
import {useRef} from "react"
import {Box,VStack, Text, IconButton, useColorMode} from "@chakra-ui/react";
import {FaSun, FaMoon} from "react-icons/fa";



const Header = () => {

	const showTime = useRef()
	
	const timer = setInterval(function() {
	  myTimer();
	}, 1000);

	const  myTimer = () => {
	  let d = new Date();
	  showTime.current.innerHTML = d.toLocaleTimeString();
 	}

	const { colorMode, toggleColorMode } = useColorMode();
	
	return(
		<Box display="flex" alignItems="center" justifyContent="space-between" px={3} py={4}  w="100%" h="auto" bg='blue.600'>
			 <VStack spacing="2" alignItems="flex-start">
				 <Text color="aliceblue" fontWeight="bold"  fontSize={26}>Super Todo App </Text>	
				 <Text ref={showTime} color="aliceblue" fontWeight="bold"  fontSize={12} ></Text>
			 </VStack>
			 <IconButton onClick={toggleColorMode} 
			  icon={colorMode === "light" ? <FaSun/> : <FaMoon />} rounded="full"/>
		</Box>
	)
}


export default Header;
