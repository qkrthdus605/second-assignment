import React, { createContext, useContext, useState, ReactNode } from "react";

interface OrderContextProps {
  totalCnt: number;
  totalPrice: number;
  setTotalCnt: React.Dispatch<React.SetStateAction<number>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  resetOrder: () => void;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [totalCnt, setTotalCnt] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // 총 개수, 총 금액 초기화
  const resetOrder = () => {
    setTotalCnt(0);
    setTotalPrice(0);
  };

  const contextValue: OrderContextProps = {
    totalCnt,
    totalPrice,
    setTotalCnt,
    setTotalPrice,
    resetOrder,
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error(
      "useOrderContext must be used within an OrderContextProvider"
    );
  }
  return context;
};
