import { useContext } from "react";
import { ModalContext } from ".";
import { createPortal } from "react-dom";
import Overlay from "./Overlay";

type ContentProps = {
  children: React.ReactNode;
};

export default function Content({ children }: ContentProps) {
  const { isOpen, toggleModal } = useContext(ModalContext);

  if (isOpen)
    return createPortal(
      <Overlay onClose={toggleModal}>{children}</Overlay>,
      document.body
    );
}
