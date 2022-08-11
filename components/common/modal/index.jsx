import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Kbd,
} from "@chakra-ui/react";
import { autocomplete } from "@algolia/autocomplete-js";
import { useEffect } from "react";
import "@algolia/autocomplete-theme-classic";

function NavigationModal({ isOpen, onOpen, onClose }) {
  return (
    <>
      <span onClick={onOpen}>
        <Kbd>ctrl </Kbd> + <Kbd>K</Kbd>
      </span>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody id="autocomplete">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio optio
            facere harum minima amet incidunt beatae, molestiae laudantium
            deleniti repellendus, ipsa, nulla blanditiis veritatis! Eius non
            voluptatum accusantium id neque?
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default NavigationModal;
