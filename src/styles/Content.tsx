import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export const BoxWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin-top: 30px;
`;

export const ImageBox = styled.div`
  width: 400px;
  height: 350px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.03), 0 -12px 24px rgba(0, 0, 0, 0.033), 12px 0 24px rgba(0, 0, 0, 0.03), -12px 0 24px rgba(0, 0, 0, 0.03);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #1170E6;
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
