import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../utils/navigationLinks';
import styled from 'styled-components';

const links = navigationLinks.filter(({ header }) => header);

const Nav = styled.nav`
  margin-top: 10px;
`;

const StyledHamburguer = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.25em;
  height: 1.25em;
  cursor: pointer;

  div {
    width: 1.25em;
    height: 0.2em;
    background: #1d1d1d;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Hamburguer: React.FC<{ open: boolean; onClick: () => void }> = ({
  open,
  onClick,
}) => (
  <StyledHamburguer open={open} onClick={onClick}>
    <div />
    <div />
    <div />
  </StyledHamburguer>
);

const Li = styled.li`
  padding: 0 10px;
`;

const Ul = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  flex-direction: row;

  .menu {
    display: none;
    position: absolute;
    top: 5%;
    right: 5%;
  }

  @media (max-width: 768px) {
    ${Li}:not(:first-child) {
      display: none;
    }

    .menu {
      display: flex;
    }

    &.open {
      flex-direction: column;

      ${Li}:not(:first-child) {
        display: block;
      }
    }
  }
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Ul className={`${open ? 'open' : ''}`}>
        {links.map((link) => (
          <Li key={link.to}>
            <Link to={link.to}>{link.title}</Link>
          </Li>
        ))}
        <li className="menu" key="hamburguer">
          <Hamburguer open={open} onClick={() => setOpen(!open)} />
        </li>
      </Ul>
    </Nav>
  );
};

export default Navigation;
