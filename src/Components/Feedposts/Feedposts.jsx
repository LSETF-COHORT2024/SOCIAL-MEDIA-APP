import { Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
const Feedposts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <FeedPost
        img="https://res.cloudinary.com/dciu77c43/image/upload/v1702477498/cld-sample-5.jpg"
        avatar="https://res.cloudinary.com/dciu77c43/image/upload/v1702477498/cld-sample-5.jpg"
        username="David williams"
        comments={112}
        location={"3hr Los Angeles"}
      />
      <FeedPost
        img="https://bit.ly/ryan-florence"
        avatar="https://bit.ly/ryan-florence"
        username="Ryan Florence"
        comments={200}
        location={"5hr Califonia"}
      />
      <FeedPost
        img="https://bit.ly/code-beast"
        avatar="https://bit.ly/code-beast"
        username="Christian Nwamba"
        comments={250}
        location={"6hr Washington"}
      />
      <FeedPost
        img="https://bit.ly/sage-adebayo"
        avatar="https://bit.ly/sage-adebayo"
        username="Segun Adebayo"
        comments={150}
        location={"1hr Boston "}
      />
    </Container>
  );
};

export default Feedposts;
