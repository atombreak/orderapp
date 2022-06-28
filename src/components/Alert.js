import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react';
import Form from "./Form.js"


 const ViewForm = ({open,close,opening}) => {
 	return(
 		<>
			<AlertDialog
			        isOpen={open}
			        onClose={close}
			        isCentered
			      >
			        <AlertDialogOverlay>
			          <AlertDialogContent>
			            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
			              Create A super Task
			            </AlertDialogHeader>
			
			            <AlertDialogBody>
			              <Form />
			            </AlertDialogBody>
			
			            <AlertDialogFooter>
			              <Button onClick={close}>
			                Cancel
			              </Button>
			              <Button colorScheme='red' onClick={close} ml={3}>
			                Delete
			              </Button>
			            </AlertDialogFooter>
			          </AlertDialogContent>
			        </AlertDialogOverlay>
			      </AlertDialog>
 		</>
 	)
 }


export default ViewForm;
