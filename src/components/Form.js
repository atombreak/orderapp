import {VStack,useToast, Input, Button,Text, Textarea} from "@chakra-ui/react"
import {Tasks} from "../store/globalStore.js"
import {useRecoilState} from "recoil";
import {useState} from "react"

const Form = ({closeForm}) => {

	const toast = useToast({
		title:"Can't create fill in all field",
		status: "error",
		duration: 3000,
		isClosable: true
	})
	const [titleInput, setTitleInput] = useState("")
	const [descripInput, setDescripInput] = useState("");
	const [tasks, setTasks]	= useRecoilState(Tasks)
	const [isDisabled, setIsDisabled] = useState(true)

	const d = new Date();
	
	const addTask = () => {
		
		if(titleInput.length < 0){
			toast()
			return closeForm();
		}else if(descripInput.length < 5){
			toast()
			return closeForm();
		}

		const task = {
			id: Math.floor((Math.random() * 10) * 3 + (Math.random() * 10) + 2 * (Math.random() * 10)),
			title: titleInput,
			body: descripInput,
			day: d.getDate(),
			month: d.getMonth(),
			year: d.getFullYear()
		}

		setTasks([...tasks, task])
		closeForm();
		
	}
	return(
		<VStack spacing="4"  maxW={{base: "100vh", sm:"80vh", md:"50vh", lg:"36vh"}} p={4} h="auto" >
			<Input value={titleInput} onChange={(e) => setTitleInput(e.target.value)} variant="filled" type="text" placeholder="Super Task Title" />
			<Textarea value={descripInput} onChange={(e) => setDescripInput(e.target.value)}  varisnt="filled"  size="md"  placeholder="Describe your SUPER task here....." />
			<Button  onClick={addTask} alignSelf="flex-end" color="aliceblue" bgColor="teal.500" mt={4}> Create Task</Button>
			 
		</VStack>
	)
}

export default Form;
