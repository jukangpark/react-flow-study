import styled from "styled-components";

export const StyledNode = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  background: ${(props) => props.theme.nodeBg};
  color: ${(props) => props.theme.nodeColor};
  border: 1px solid black;

  .react-flow__handle {
    background: green;
    width: 8px;
    height: 10px;
    border-radius: 3px;
  }
`;
