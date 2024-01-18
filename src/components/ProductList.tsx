import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./Card";

interface Product {
  id: string;
  name: string;
  event: number;
  meterialType: number;
  price: number;
}

const ProductList = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3001/items";

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ListContainer>
      {items.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin-top: 70px;
`;

export default ProductList;
