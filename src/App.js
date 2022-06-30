import {VStack,Box,useDisclosure, IconButton} from "@chakra-ui/react";
import {useRecoilState} from 'recoil';
import {useEffect} from "react"
import {Tasks} from './store/globalStore.js';
import Header from './components/Header.js';
import List from './components/List.js';
import Content from './components/NoContent.js'
import AlertForm from './components/Alert.js';
import {FaFolderPlus} from "react-icons/fa"

function App() {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [tasksAtom, setTasksAtom] = useRecoilState(Tasks);

	let  storageLocal = localStorage.getItem("tasks")
	const parsed = JSON.parse(storageLocal)
	useEffect(() => {
		setTasksAtom(parsed)
	}, [])
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasksAtom))
	}, [tasksAtom]) 


  return (
    <VStack pos="relative" w="100%" h="100vh">
    	<Header />
   		<AlertForm open={onOpen} opening={isOpen} close={onClose}/> 
	{ tasksAtom.length > 0 ?
   		<List /> : <Content />
   	}
		<Box as="div" bg="teal.700" className=" animate-ping" pos="fixed" bottom="7" right="7" w="30px" h="30px" borderRadius="full">
		</Box>
			<IconButton onClick={onOpen}  p={2}
			 icon={<FaFolderPlus />} colorScheme="teal" borderRadius="full" 
			pos="fixed" bottom="6"  right="6"/>
    </VStack>
  );
}

export default App;
