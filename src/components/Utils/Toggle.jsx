import { Switch } from "@headlessui/react";

export default function Toggle({ enabled, setEnabled }) {
  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-orange-500" : "bg-black"}
          relative inline-flex h-[18px] w-[38px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
