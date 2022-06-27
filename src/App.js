import {VStack} from "@chakra-ui/react";
import {useRecoilValue} from 'recoil';
import {name} from './store/globalStore.js';
import Header from './components/Header.js'

function App() {

	const nameAtom = useRecoilValue(name);
  return (
    <VStack w="100%" h="100vh"  bgColor="aliceblue">
    	<Header />
   
    </VStack>
  );
}

export default App;
