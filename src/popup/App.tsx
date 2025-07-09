import { useEffect, useState } from "react";

export default function App() {
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        chrome.runtime.sendMessage({ type: "GET_STATE" }, (res: { isEnabled: boolean }) => {
            setEnabled(res.isEnabled);
        });
    }, []);

    const toggle = () => {
        chrome.runtime.sendMessage({ type: "TOGGLE_ADBLOCK" }, (res: { isEnabled: boolean }) => {
            setEnabled(res.isEnabled);
        });
    };

    // @ts-ignore
    return (
        <div className="p-4 text-center w-64">
            <h1 className="text-xl font-semibold mb-4">Ad Blocker</h1>
            <button onClick={toggle} className={`px-4 py-2 rounded-md w-full text-white font-bold ${
                enabled ? "bg-green-600" : "bg-red-600"}`}>
                {enabled ? "Enabled ✅" : "Disabled ❌"}
            </button>
            <p className="mt-4 text-sm text-gray-600">Blocks banner + YouTube ads.</p>
        </div>
    );
}
