import { BiTrash } from "react-icons/bi";
import Modal from "./Modal";
import { ReactElement } from "react";

type Props = {
  onClose?: () => void;
  onConfirm?: () => void;
  headerText: string;
  closeButtonText?: string;
  confirmButtonText?: string;
  children?: ReactElement;
};

function ConfirmModal(props: Props) {
  return (
    <Modal>
      <Modal.Button type='TOGGLER'>
        {props.children ? (
          props.children
        ) : (
          <BiTrash className='cursor-pointer hover:scale-110 duration-300 hover:text-red-400' />
        )}
      </Modal.Button>
      <Modal.Content>
        <h1>{props.headerText}</h1>
        <Modal.Footer>
          <Modal.Button type='CLOSE' />
          <Modal.Button
            type='CONFIRM'
            text={props.confirmButtonText}
            onConfirm={() => props.onConfirm?.()}
            closeModalOnConfirm={false}
          />
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

export default ConfirmModal;
