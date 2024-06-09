import styled from "styled-components";

export const HeaderWarp = styled.div`
  width: 100%;
  height: 120px;
  border-bottom: 1px solid #DFDEDE;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  background-color: white;
`;

export const IconWrap = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
    width: 130px;
`;

export const Text = styled.div`
  width: 100%;
  font-family: Meongi, SansSerif;
  text-align: center;
  color: darkorange;
  font-size: 30px;
`;