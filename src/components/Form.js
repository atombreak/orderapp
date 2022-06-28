import {VStack, Input, Button, Textarea} from "@chakra-ui/react"



const Form = () => {
	return(
		<VStack spacing="4"  maxW={{base: "100vh", sm:"80vh", md:"50vh", lg:"36vh"}} p={4} h="auto" >
			<Input variant="filled" type="text" placeholder="Set todo Title" />
			<Textarea bg="whitesmoke" border="0px" varisnt="filled"  size="md"  placeholder="select a todo date" />
			<Button color="aliceblue" bg="#F15412"> Create It</Button>
			
		</VStack>
	)
}

export default Form;
