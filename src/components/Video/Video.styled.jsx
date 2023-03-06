import styled from '@emotion/styled';

export const VideoBox = styled.div`
  position: relative;
  padding: 200px 0;
`;
export const StatListBox = styled.div`
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
`;
export const StatItemBox = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: 100px;
  }
`;
export const StatValue = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
  letter-spacing: 0.6px;
  color: #01353e;
`;
export const StatName = styled.span`
  margin-top: 5px;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.6px;
  color: #242121;
`;
export const Vid = styled.video`
  width: 1200px;
  height: 600px;
  &:hover {
    cursor: pointer;
  }
`;
