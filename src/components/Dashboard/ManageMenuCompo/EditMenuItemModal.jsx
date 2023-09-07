import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import MenuForm from "../../Forms/UpdateMenuForm/MenuForm";

const EditMenuItemModal = ({ isTheModalOpen, onClose, menuItem,refetch }) => {
  // console.log(menuItem);
  return (
    <>
      <Transition appear show={isTheModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform max-w-4xl overflow-hidden rounded-2xl p-6 bg-gray text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-center text-2xl  font-bold leading-6 text-black/80"
                  >
                    Update Your Menu Item
                  </Dialog.Title>
                  <MenuForm
                    // handleSubmit={handleSubmit}
                    refetch={refetch}
                    onClose={onClose}
                    menuItem={menuItem}
                  ></MenuForm>
                  <span
                    onClick={onClose}
                    className="absolute cursor-pointer right-3 top-3 text-red-600 text-lg shadow-lg rounded-full h-8 w-8 flex justify-center items-center"
                  >
                    x
                  </span>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditMenuItemModal;
