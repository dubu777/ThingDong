import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Fragment } from 'react';
import styled from 'styled-components';

const ThingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 7rem;
  position: relative;
`;

const ThingsContents = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const HandImage = styled(Image)`
  position: absolute;
  top: calc(50% - 11rem);
  left: 50%;
  transform: translate(-50%, calc((50% - 11rem)));
`;

const PATMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BlueDotWrapper = styled.div`
  border-radius: 21px;
  border: 2px dashed ${({ theme }) => theme.color.blue};
  background-color: ${({ theme }) => theme.color.white2};
  width: 100%;
  height: 8rem;
  padding: 0rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1.5rem 0rem;

  p {
    display: inline;
    text-align: center;
  }
`;

export {
  ThingsContainer,
  ThingsContents,
  HandImage,
  PATMessageContainer,
  BlueDotWrapper,
};
