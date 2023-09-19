import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";

// Reusable Disclosure Component
const DisclosureModal = ({ title, content }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-2">
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-pink px-4 py-2 text-left text-sm font-medium text-white hover:bg-darkPink focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>{title}</span>
              <HiChevronDown
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-white`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {content}
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default DisclosureModal;
