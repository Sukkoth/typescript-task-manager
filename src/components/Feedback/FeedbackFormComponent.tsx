import { useCreateFeedback } from "../../react_query/mutations";
import { FEEDBACK_SCHEMA } from "../../Schemas/feedbackSchema";
import { FeedbackForm } from "../shared/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { authSelector } from "../../features/Auth/authSlice";
import Modal from "../Modal";
import { BiErrorAlt } from "react-icons/bi";
import Alert from "../Alert";

function FeedbackFormComponent() {
  const { user } = useSelector(authSelector);

  const createFeedback = useCreateFeedback();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(FEEDBACK_SCHEMA),
  });

  const onSubmitHandler = async (formData: FeedbackForm) => {
    try {
      await createFeedback.mutateAsync({
        form: formData,
        user_id: user!.id,
      });
      reset();
      toast("Thank you for your feedback 🤩", {
        type: "success",
      });
    } catch (error) {
      toast("Error while submitting your feedback", {
        type: "error",
      });
    }
  };

  return (
    <form aria-disabled={createFeedback.isPending}>
      {createFeedback.isError && (
        <div className='mb-10'>
          <Alert
            type='ERROR'
            icon={<BiErrorAlt />}
            showBorder
            showCloseButton
            text={createFeedback.error?.message}
          />
        </div>
      )}

      <div className='mb-2'>
        <label htmlFor='feedback-area' className='text-lg'>
          What are your thoughts about this app?
        </label>
        <textarea
          className='app-input mt-3'
          id='feedback-area'
          rows={5}
          {...register("message")}
        ></textarea>
        {errors.message?.message && (
          <p className='text-red-300 mt-2 ml-2 text-sm'>
            {errors.message?.message || "Incorrect one here"}
          </p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='feedback-type' className='text-lg'>
          Feedback type
        </label>
        <select id='type' className='app-input mt-3' {...register("type")}>
          <option value='GENERAL'>General</option>
          <option value='BUG'>Bug Report</option>
          <option value='FEATURE'>Feature request</option>
        </select>
        {errors.type?.message && (
          <p className='text-red-300 mt-2 ml-2 text-sm'>
            {errors.type?.message || "Incorrect one here"}
          </p>
        )}
      </div>
      <Modal.Footer>
        <Modal.Button type='CLOSE' />
        <Modal.Button
          type='CONFIRM'
          text={createFeedback.isPending ? "Submitting . . ." : "Submit"}
          onConfirm={handleSubmit(onSubmitHandler)}
          closeModalOnConfirm={false}
        />
      </Modal.Footer>
    </form>
  );
}

export default FeedbackFormComponent;
