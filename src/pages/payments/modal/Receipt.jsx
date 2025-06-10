import { motion, AnimatePresence } from "framer-motion";
import { Banknote, Download } from "lucide-react";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

const ReceiptModal = ({ open, onClose }) => {
    const receiptRef = useRef();

    const handleDownloadPDF = () => {
        const element = receiptRef.current;
        if (!element) {
            console.error("Receipt element not found");
            return;
        }

        // Optional: add small delay to ensure styles are fully rendered
        setTimeout(() => {
            const options = {
                margin: 0.3,
                filename: `receipt_${Date.now()}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            };

            html2pdf().set(options).from(element).save();
        }, 100); // small delay to allow layout to finalize
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white rounded-md shadow-lg w-full max-w-md overflow-hidden"
                        ref={receiptRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="bg-[#47BA82] text-white px-6 py-4 flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Receipt</h2>
                            <button onClick={handleDownloadPDF} className="p-2 rounded hover:bg-white/20 transition-colors">
                                <Download className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="max-h-[70vh] overflow-y-auto p-2">
                            {/* Order Details */}
                            <div className="px-6 py-4 text-sm space-y-1">
                                <div className="flex justify-between"><span className="text-gray-600">Sold To</span><span className="font-medium">Demo Name</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">Order ID</span><span className="font-medium">#67458</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">Invoice No.</span><span className="font-medium">#67458</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">Invoice Date</span><span className="font-medium">00/00/0000</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">Payment Date</span><span className="font-medium">00/00/0000</span></div>
                            </div>

                            {/* Item List */}
                            <div className="border-t px-6 py-3">
                                <h3 className="font-semibold text-[#354A5F] mb-2">Order Item Name</h3>
                                {[{ label: "200 G or S", qty: 100, price: "$0000" }, { label: "500 G or M", qty: 100, price: "$0000" }, { label: "1 KG or L", qty: 100, price: "$0000" }, { label: "2 KG or XL", qty: 100, price: "$0000" }].map((item, i) => (
                                    <div className="flex justify-between text-sm py-1" key={i}>
                                        <span>{item.label}</span>
                                        <span>{item.qty}</span>
                                        <span className="font-semibold">{item.price}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Payment Method */}
                            <div className="border-t px-6 py-4 text-sm">
                                <h4 className="font-semibold mb-2">Payment Method</h4>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <Banknote className="w-4 h-4" />
                                    <span>Bank Transfer</span>
                                </div>
                            </div>

                            {/* Totals */}
                            <div className="border-t px-6 py-4 text-sm space-y-1">
                                <div className="flex justify-between"><span className="text-gray-600">Sub Total</span><span>$ XXXX</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">Discount</span><span>5%</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">GSTN</span><span>5%</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">SGST</span><span>5%</span></div>
                                <div className="flex justify-between"><span className="text-gray-600">CGST</span><span>5%</span></div>
                            </div>

                            {/* Total */}
                            <div className="border-t px-6 py-4 font-semibold flex justify-between items-center">
                                <span>Total Amount</span>
                                <span className="text-lg">$ XXXXX</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ReceiptModal;
