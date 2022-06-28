import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  VStack,
  HStack,
  Spacer,
  Text,
  Divider,
  IconButton,
  Heading
} from '@chakra-ui/react';
import {MdDeleteSweep} from "react-icons/md";
import {Tasks} from "../store/globalStore.js"
import {useRecoilState} from "recoil"

const ListTodos = () => {
	const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	const [taskItems, setTaskItems] = useRecoilState(Tasks)
	
	const delTask = (item) => {
		const newList = taskItems.filter((taskId) => taskId.id != item.id)
		setTaskItems(newList)
	} 

	return(
	<>
		<Heading pt={7} pl={5} alignSelf="start" fontSize="32px">Your Tasks</Heading>
		<Divider mb="20px" />
		<VStack overflowY="scroll"  px={2} py={5} w="90%" maxW={{base:"90%", sm:"75vh", md:"60vh", lg:"45vh"}} h="63vh"
			sx={{
			    '&::-webkit-scrollbar': {
			      width: '1px',
			      borderRadius: '8px',
			      backgroundColor: `rgba(0, 0, 0, 0.05)`,
			    },
			    '&::-webkit-scrollbar-thumb': {
			      backgroundColor: `rgba(0, 0, 0, 0.05)`,
			    },
			  }}
		>

			{
			taskItems.map((task) => (
				<HStack  borderColor="blue.200"  border="1px"  borderRadius="lg"  justifyContent="between" p={3}  w="100%"  h="80px">
					<VStack  alignItems="flex-start">
						<Text fontSize="17" fontWeight="bold"> {task.title}</Text>
						<Text>{task.day}  {month[task.month]}, {task.year}</Text>
					</VStack>
					<Spacer />
					<IconButton onClick={ () => delTask(task)} colorScheme="red" icon={<MdDeleteSweep />}/>				  
				</HStack>
			))
			}	
		</VStack>
	</>
	)
}

export default ListTodos;
