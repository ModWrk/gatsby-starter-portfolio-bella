import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { Flex } from 'grid-emotion';

const Wrapper = styled.header`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.greyLight};
  a {
    color: ${props => props.theme.colors.bg};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`;

const Inner = styled(Flex)`
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    justify-content: center;
    flex-direction: column;
    text-align: center;
    div:last-child {
      margin-top: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  transform: translateX(0);
  transition: all 200ms ease-out;
  &:before {
    content: '←';
    padding-right: 8px;
  }
  &:hover {
    color: ${props => props.theme.colors.bg};
    transform: translateX(-6px);
  }
`;

const CaseHeader = ({ isCase }) => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <Inner justifyContent="space-between" p={4}>
        {isCase ? (
          <React.Fragment>
            <StyledLink to="/">Home</StyledLink>
          </React.Fragment>
        ) : (
        //   <React.Fragment>
        //     <div>
        //       Copyright &copy; {year} by <a href="https://github.com/ModWrk/portfolio">Erik Clevenger</a>. Theme
        //       modified from the{' '}
        //       <a href="https://github.com/LekoArts/gatsby-starter-portfolio-bella">Bella GitHub Repository</a>.
        //     </div>
        //   </React.Fragment>
        )}
      </Inner>
    </Wrapper>
  );
};

export default CaseHeader;

CaseHeader.propTypes = {
  isCase: PropTypes.bool,
};

CaseHeader.defaultProps = {
  isCase: false,
};
