import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 5vh;
`;

const Radio = styled.input`
  display: none;
`;

const Rating = styled.div`
  cursor: pointer;
`;

const Ratings = ({ rate, setRate, data, size }) => {

  return (
    <Container>
      {[...Array(5)].map((_, index) => {
        const givenRating = index + 1;
        return (
          <label key={index}>
            <Radio
              type="radio"
              value={givenRating}
            />
            <Rating>
              <FaStar
                color={
                  givenRating <= rate ? "#FE6244" : "rgba(71, 69, 69, 0.168)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};

export default Ratings;
