// import { Modal } from "@repo/ui/modal";
import { Chip } from "@repo/ui/chip";
import { Test } from "@repo/ui/test";
export default function UserDetail() {
  return (
    <div>
      Docs UserDetail
      <Chip label="Chip" />
      {/* <Modal isOpen={true} onClose={() => {console.log("close")}}>
        <div>Modal</div>
      </Modal> */}
      <Test />
    </div>
  );
}
