import styled from "styled-components";

export const Wrap = styled.div`
  width: 90%;
  height: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const MainText = styled.div`
  width: 100%;
  height: 100%;
  font-family: Jamsil_Medium, SansSerif;
  font-size: 50px;
  text-align: center;
`;

export const SubText = styled.div`
  width: 100%;
  height: 100%;
  font-family: Jamsil_light, SansSerif;
  font-size: 40px;
  text-align: center;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin-top: 30px;
`;

export const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageBox = styled.div`
  width: 400px;
  height: 350px;
  box-shadow:
    0 12px 24px rgba(0, 0, 0, 0.03),
    0 -12px 24px rgba(0, 0, 0, 0.033),
    12px 0 24px rgba(0, 0, 0, 0.03),
    -12px 0 24px rgba(0, 0, 0, 0.03);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #1170e6;
  color: white;
  border: none;
  border-radius: 25px;
  font-family: Bmjua, SansSerif;
  font-size: 22px;
  cursor: pointer;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 10px;
`;

export const DescWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Desc = styled.div`
  font-size: 25px;
  font-family: Jamsil_light, SansSerif;
  text-align: center;
  color: #6f6d6d;
`;

export const Input = styled.input`
  width: 80px;
  height: 35px;
  font-size: 20px;
  font-family: Jamsil_light, SansSerif;
  text-align: center;
`;
