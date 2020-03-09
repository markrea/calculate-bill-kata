const calculateBill = (price, vat ,tip) => {
    

if (typeof price && typeof vat && typeof tip === "number") {
    const totalBill = price + (price * vat / 100) + tip;
        return "£" + totalBill.toString()}
        else { 
            return "error";
        }
};




module.exports = calculateBill;