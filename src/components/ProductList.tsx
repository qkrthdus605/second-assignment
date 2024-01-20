import { useQuery } from "react-query";
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

const fetchData = async () => {
  const apiUrl = "http://localhost:3001/items";
  const response = await axios.get(apiUrl);
  return response.data;
};

const ProductList = () => {
  const { data: items, isLoading } = useQuery<Product[]>("product", fetchData);

  // 로딩중일 경우 보여줄 텍스트
  if (isLoading) {
    return (
      <LoadingText>
        목록을
        <br /> 불러오고 있습니다
      </LoadingText>
    );
  }

  return (
    <ListContainer>
      {items?.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin: 70px 0 170px 0;
`;

const LoadingText = styled.div`
  text-align: center;
  line-height: 22px;
`;

export default ProductList;
