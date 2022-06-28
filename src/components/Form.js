import {VStack, Input, Button,Text, Textarea} from "@chakra-ui/react"



const Form = ({closeForm}) => {
	return(
		<VStack spacing="4"  maxW={{base: "100vh", sm:"80vh", md:"50vh", lg:"36vh"}} p={4} h="auto" >
			<Input variant="filled" type="text" placeholder="Set todo Title" />
			<Textarea  varisnt="filled"  size="md"  placeholder="select a todo date" />
			<Button onClick={closeForm} alignSelf="flex-end" color="aliceblue" bg="#F15412" mt={4}> Create It</Button>
			
		</VStack>
	)
}

export default Form;
