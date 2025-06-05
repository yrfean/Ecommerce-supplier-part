import { useState } from "react";
import { AlertTriangle, DollarSign } from "lucide-react";

const notifications = [
    {
        id: 1,
        type: "alert",
        title: "Reminder",
        message: "Check out your 6 product expires soon !",
        actions: true,
    },
    {
        id: 2,
        type: "alert",
        title: "Low Stock Alert",
        message: "Check out your stock",
        actions: true,
    },
    {
        id: 3,
        type: "payment",
        title: "Repayment date is near",
        message: "Check out your refund date and confirm your payment",
    },
    {
        id: 4,
        type: "payment",
        title: "Repayment date is near",
        message: "Check out your refund date and confirm your payment",
    },
];

const NotificationModal = ({setViewNotification}) => {
    const [open, setOpen] = useState(true);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
            onClick={() => setViewNotification(false)}
        >
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-4 ">
                <h2 className="text-xl font-semibold text-center mb-4">Notification</h2>

                <div className="space-y-3 max-h-[70vh] overflow-y-auto p-2">
                    {notifications.map((n) => (
                        <div
                            key={n.id}
                            className={`rounded-lg p-4 flex gap-3 items-start ${n.type === "alert"
                                ? "bg-green-50 border border-green-100"
                                : "bg-green-100"
                                }`}
                        >
                            <div className="pt-1">
                                {n.type === "alert" ? (
                                    <AlertTriangle className="text-red-500 w-5 h-5" />
                                ) : (
                                    <DollarSign className="text-green-600 w-5 h-5" />
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold">
                                    {n.title} <span className="text-black">!</span>
                                </h3>
                                <p className="text-sm text-gray-700 mt-1">{n.message}</p>
                                {n.actions && (
                                    <div className="mt-2 text-sm flex gap-4 text-green-600 font-medium">
                                        <button className="hover:underline">Check out</button>
                                        <button className="hover:underline">Mark as read</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 text-center">
                    <button
                        onClick={() => setOpen(false)}
                        className="text-sm text-gray-500 hover:text-black"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotificationModal;
