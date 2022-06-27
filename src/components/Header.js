import {name} from "../store/globalStore.js";
import {useRecoilValue} from "recoil";
import {Box, Text, IconButton} from "@chakra-ui/react";
import {FaSun} from "react-icons/fa";
import { FaBeer } from 'react-icons/fa';



const Header = () => {

	const myName = useRecoilValue(name)

	
	return(
		<Box display="flex" alignItems="center" justifyContent="space-between" px={3} py={4}  w="100%" h="auto" bg='blue.600'>
			 <Text color="aliceblue" fontWeight="bold"  fontSize={26}>Super Todo App </Text>	
			 <IconButton icon={<FaSun/>} borderRadius="round"/>
		</Box>
	)
}


export default Header;
