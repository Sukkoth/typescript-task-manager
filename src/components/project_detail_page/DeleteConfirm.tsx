import { BiTrash } from "react-icons/bi";
import Modal from "../Modal";

type Props = {
  onClose?: () => void;
  onConfirm?: () => void;
  headerText: string;
  closeButtonText?: string;
  confirmButtonText?: string;
};

function ConfirmModal(props: Props) {
  return (
    <Modal>
      <Modal.Button type='TOGGLER'>
        <BiTrash className='cursor-pointer hover:scale-110 duration-300 hover:text-red-400' />
      </Modal.Button>
      <Modal.Content>
        <div className='w-[20rem]'>
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
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default ConfirmModal;
