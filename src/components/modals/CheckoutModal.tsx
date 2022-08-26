import { useState } from "react";
import Button from "../../ui-base-components/Button";
import Modal from "../../ui-base-components/Modal";


//@ts-ignore
export default function CheckoutModal({ setOpen, open }) {
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Modal
      visible={open}
      title="অর্ডার সফল হয়েছে!"
      onCancel={handleClick}
      footer={[
        <Button key="cancelButton" theme="dark" onClick={handleClick} style={{ marginRight: "7px"}}>
          ঠিক আছে
        </Button>,
      ]}
    >
      <div>অর্ডারটি হাতে পাবার জন্য দয়া করে ৫-৭ কার্যদিবস পর্যন্ত অপেক্ষা করুন। আমাদের সাথেই থাকুন। ধন্যবাদ।</div>
    </Modal>
  );
}