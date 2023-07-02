import styled from "styled-components";

export const CountersWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  background-color: black;
`;

export const CountersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
  row-gap: 4px;
  column-gap: 4px;
`;

export const GridItemContainer = styled.div`
  display: flex;
  width: calc(50vw - 2px);
  height: calc(50vh - 2px);
  justify-content: center;
  align-items: center;
`;

export const GridItemContainerFlipped = styled.div`
  display: flex;
  width: calc(50vw - 2px);
  height: calc(50vh - 2px);
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
`;

