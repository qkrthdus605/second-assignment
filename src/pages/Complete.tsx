import BgDiv from "../components/BgDiv";
import useRedirect from "../hooks/useRedirect";

const Complete = () => {
  useRedirect("/order", 3000);

  return (
    <BgDiv>
      <img src={process.env.PUBLIC_URL + "/assets/check.svg"} alt="check" />
      <div>주문이 완료되었습니다.</div>
    </BgDiv>
  );
};

export default Complete;
