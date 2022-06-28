import {VStack,Box, useDisclosure, IconButton} from "@chakra-ui/react";
import {useRecoilValue} from 'recoil';
import {name} from './store/globalStore.js';
import Header from './components/Header.js';
import Form from './components/Form.js';
import AlertForm from './components/Alert.js';
import {MdPostAdd} from "react-icons/md";
import {FaFolderPlus} from "react-icons/fa"

function App() {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const nameAtom = useRecoilValue(name);

  return (
    <VStack pos="relative" w="100%" h="100vh">
    	<Header />
   		<AlertForm open={onOpen} opening={isOpen} close={onClose}/> 
		<Box as="div" bg="teal.700" 
		className=" animate-ping"   pos="fixed" bottom="7" right="7" w="30px" h="30px" borderRadius="full">
		</Box>
			<IconButton onClick={onOpen}  p={2} icon={<FaFolderPlus />} colorScheme="teal" borderRadius="full" 
			pos="fixed" bottom="6"  right="6"/>
    </VStack>
  );
}

export default App;
