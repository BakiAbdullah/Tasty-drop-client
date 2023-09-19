import { useState } from "react";
import { FaStar } from "react-icons/fa";
// import { Container, Radio, Rating } from "./RatingStyles";
import styled from 'styled-components';

const Reatings = ({ rate, setRate, data, size }) => {
    const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 5vh;
  font-size: ${size}px;
`;

    const Radio = styled.input`
  display: none;
`;

    const Rating = styled.div`
  cursor: pointer;

`;
    return (
        <Container>
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label key={index}>
                        <Radio
                            type="radio"
                            value={givenRating}
                            onClick={() => {
                                if (data?.rating) {
                                    setRate(data?.rating)
                                }
                                else {
                                    setRate(givenRating);
                                }

                                // alert(
                                //     `Are you sure you want to give
                                //     ${givenRating} stars ?`
                                // );
                            }}
                        />
                        <Rating>
                            <FaStar
                                color={
                                    givenRating < rate || givenRating === rate
                                        ? "#FE6244"
                                        : "rgba(71, 69, 69, 0.168)"
                                }
                            />
                        </Rating>
                    </label>
                );
            })}
        </Container>

    );
};

export default Reatings;