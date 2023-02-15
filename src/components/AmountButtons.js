import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ stock }) => {
  const [amount, setAmount] = useState(1);
  const increase = () => {
    const next = amount + 1;
    next <= stock && setAmount(next);
  };
  const decrease = () => {
    const prev = amount - 1;
    prev >= 1 && setAmount(prev);
  };

  return (
    <Wrapper className="amount-btns">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;
