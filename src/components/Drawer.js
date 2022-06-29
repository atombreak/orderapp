import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Divider
} from '@chakra-ui/react';
import {useRef} from "react"

const Detail = () => {
	  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Take A react-native course</DrawerHeader>
			<Divider />
          <DrawerBody>
            <Text  fontSize="16">
				Go and check out the latest updates online
            </Text>
          </DrawerBody>

          <DrawerFooter justifyContent="center" alignItems="center">
            <Button colorScheme="blue"  mr={3} onClick={onClose}>
              Task Completed
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Detail;
