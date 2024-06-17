import styled from "styled-components";

export const HeaderWarp = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #dfdede;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  background-color: white;
`;

export const IconWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 70px;
`;

export const Text = styled.div`
  width: 100%;
  font-family: Meongi, SansSerif;
  text-align: center;
  color: darkorange;
  font-size: 15px;
`;
