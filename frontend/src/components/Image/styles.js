import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: 1fr / 1fr;

  img {
    width: 100%;
    height: 100%;
    grid-area: 1/1;
    object-fit: cover;
  }
`;

const skeletonLoading = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`;

export const Skeleton = styled.div`
  width: 100%;
  background-color: green;
  grid-area: 1/1;
  background-image: ${({ theme }) => `linear-gradient(90deg,
                      ${theme.skeleton.primary} 0px,
                      ${theme.skeleton.secondary} 50%,
                      ${theme.skeleton.primary} 100%)`
};
  background-color: ${({ theme }) => theme.skeleton.primary};
  background-size: 200%;
  background-position: 0%;
  animation: ${skeletonLoading} 1.5s linear infinite;
`;
