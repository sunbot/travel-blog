import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import tw from "tailwind.macro";

const Wrapper = styled.div`
  margin: -2em 0 0 0;
  padding: 0 1.5em 2em;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    ${tw`rounded-lg`};
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`;

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`;

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`;

const PostLinks = props => {
  return (
    <Wrapper>
      <Box>
        {props.previous && (
          <PreviousLink to={`/${props.previous.slug}/`}>
            &#8592; Prev Post
          </PreviousLink>
        )}
        {props.next && (
          <NextLink to={`/${props.next.slug}/`}>Next Post &#8594;</NextLink>
        )}
      </Box>
    </Wrapper>
  );
};

export default PostLinks;
