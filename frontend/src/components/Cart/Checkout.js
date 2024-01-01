import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const cartCtx = useContext(CartContext);

  const handlePaymentSelect = (payment) => {
    setSelectedPayment(payment);
  };

  return (
    <div className="max-w-xl mx-auto p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">결제 정보</h2>
      <div className="space-y-4">
        {cartCtx.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-500">
                {item.price.toLocaleString()} x {item.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="py-4">
        <p className="text-2xl font-bold">결제 수단</p>
        <div className="border border-gray-300 rounded-lg mt-4">
          <ul className="p-4 grid grid-cols-2 gap-2">
            <li
              className={`rounded-lg cursor-pointer py-2 px-4 ${
                selectedPayment === "신용 카드" ? "bg-blue-100" : ""
              }`}
              onClick={() => handlePaymentSelect("신용 카드")}
            >
              신용 카드
            </li>
            <li
              className={`rounded-lg cursor-pointer py-2 px-4 ${
                selectedPayment === "카카오페이" ? "bg-blue-100" : ""
              }`}
              onClick={() => handlePaymentSelect("카카오페이")}
            >
              카카오페이
            </li>
            <li
              className={`rounded-lg cursor-pointer py-2 px-4 ${
                selectedPayment === "가상계좌" ? "bg-blue-100" : ""
              }`}
              onClick={() => handlePaymentSelect("가상계좌")}
            >
              가상계좌
            </li>
            <li
              className={`rounded-lg cursor-pointer py-2 px-4 ${
                selectedPayment === "네이버페이" ? "bg-blue-100" : ""
              }`}
              onClick={() => handlePaymentSelect("네이버페이")}
            >
              네이버페이
            </li>
            <li
              className={`rounded-lg cursor-pointer py-2 px-4 ${
                selectedPayment === "페이코" ? "bg-blue-100" : ""
              }`}
              onClick={() => handlePaymentSelect("페이코")}
            >
              페이코
            </li>
            <li
              className={`rounded-lg cursor-pointer py-2 px-4 ${
                selectedPayment === "Apple Pay" ? "bg-blue-100" : ""
              }`}
              onClick={() => handlePaymentSelect("Apple Pay")}
            >
              Apple Pay
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-4 border-t border-gray-300" />
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">총 결제 금액</p>
        <p className="text-lg font-semibold">
          {cartCtx.totalAmount.toLocaleString()}원
        </p>
      </div>
      <button className="block w-full py-3 mt-6 btn btn-secondary">
        {cartCtx.totalAmount.toLocaleString()}원 결제하기
      </button>
    </div>
  );
};

export default Checkout;
