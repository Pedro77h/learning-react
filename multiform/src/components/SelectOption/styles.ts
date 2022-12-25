import styled from "styled-components";

export const Container = styled.div<{selected: boolean}>`
  display: flex;
  border: 2px solid ${props => props.selected ? '#25cd89' : '#16195c'};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid #486459;
  }
`;

export const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #191a59;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const Description = styled.div`
  font-size: 1rem;
  color: #b8b8d4;
`;
