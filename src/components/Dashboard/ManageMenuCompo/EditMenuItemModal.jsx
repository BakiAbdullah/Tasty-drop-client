import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const EditMenuItemModal = ({isTheModalOpen, onClose}) => {
  // const [editedMenuItem, setEditedMenuItem] = useState({
  //   // Initialize with the data of the menu item being edited
  // });

  // const handleInputChange = (e) => {
  //   // Handle form input changes and update the 'editedMenuItem' state
  // };

  const handleSubmit = () => {
    // Handle the form submission and update the menu item
    // You can make an API call to update the menu item here
    // After a successful update, close the modal by calling 'onClose'
  };

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Menu Item
                  </Dialog.Title>
                  <form onSubmit={handleSubmit}>
                    {/* Form fields for editing the menu item */}
                    {/* Use 'editedMenuItem' state for input values */}
                    {/* Add input change handlers */}
                    <button type="submit" className="btn-primary mt-4">
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="btn-secondary mt-2"
                    >
                      Cancel
                    </button>
                  </form>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      Got it, thanks!
                    </button>
                  </div>
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
