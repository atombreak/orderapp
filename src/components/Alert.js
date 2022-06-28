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
			        isOpen={opening}
			        onClose={close}
			        isCentered
			        motionPreset='slideInBottom'
			        
			      >
			        <AlertDialogOverlay>
			          <AlertDialogContent>
			            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
			              Create A super Task
			            </AlertDialogHeader>
			
			            <AlertDialogBody>
			              <Form closeForm={close}/>
			            </AlertDialogBody>
			          </AlertDialogContent>
			        </AlertDialogOverlay>
			      </AlertDialog>
 		</>
 	)
 }


export default ViewForm;
