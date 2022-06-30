import {VStack, Heading, Text} from "@chakra-ui/react"


const Content = () => {
	return(
		<VStack mt={6} justitfyContent="center" p={4} h="40vh" w="100%" maxW={{base: "90vh", sm:"70vh", md:"50",lg:"40vh"}}>
			<Heading textAlign="center" fontWeight="bolder">
				Ooops no super task yet...
			</Heading>
			<Text>
				Click on the bottom-right corner ICON to add a super task
			</Text>
		</VStack>
	)
}


export default Content;
