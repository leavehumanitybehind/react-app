import styled from "styled-components";
import colors from "../../manager/themeManager/colors";
import chatImage from "../../assets/images/bgchat.png";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.mainBgColor};
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
`;

export const ChatWrapper = styled.div`
border-left: 2px solid white;
border-radius: 20px 0 20px 20px;
  height: 100%;
  background-image: url(${chatImage});
`;
