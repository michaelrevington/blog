import { Col, Row } from "reactstrap";
import TitleController from "./TitleController";
import { TypeAnimation } from "react-type-animation";
import { HeadProvider, Title } from "react-head";
import ImageController from "./ImageController";

import k8s from "../../images/K8S-logo.png";
import cpp from "../../images/ISO_C++_Logo.svg.png";
import mongodb from "../../images/mongodb-icon-2048x2048-cezvpn3f.png";
import docker from "../../images/4844483.png";
import java from "../../images/4844510.png";
import rust from "../../images/rust-logo-512x512.png";
import kafka from "../../images/kafka-logo.png";
import ubuntu from "../../images/ubuntu-plain-icon-256x256-we4d4gd0.png";
import {
  Card,
  CardContent,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

const Home = () => {
  return (
    <>
      <HeadProvider>
        <Title>Welcome to KnowSphere</Title>
      </HeadProvider>

      <Row>
        <Col className="text-center my-3">
          <TitleController>
            <h1 className="display-1 title fw-bold">KnowSphere</h1>
          </TitleController>
        </Col>
      </Row>
      <Row>
        <Col className="px-lg-4 px-3">
          <Card
            sx={{
              background: "linear-gradient(to top right, #133, #159)",
              fontFamily: "monospace Roboto",
              minHeight: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContent>
              <Typography color="white" mb={2}>
                &ensp;Welcome to the dynamic realm of technology, where
                innovation is the heartbeat of progress and the digital
                landscape is ever-evolving. this digital age, technology serves
                as the catalyst for transformation, weaving intricate threads
                that connect individuals and businesses across the globe. Our
                blog is a virtual space dedicated to unraveling the wonders of
                cutting-edge technologies, exploring the depths of programming
                languages like C++, navigating the vast landscape of container
                orchestration with Kubernetes, and delving into a myriad of
                other tech-centric topics. Join us on a journey where curiosity
                meets code, and where the pulse of innovation sets the rhythm
                for the future Welcome to a tech-savvy haven where the
                possibilities are limitless, and the conversation is boundless.
              </Typography>
              <Typography color="white">
                &ensp;Within this learning environment, we immerse ourselves in
                a myriad of technologies, spanning programming languages,
                development techniques, and fundamental concepts. From the
                basics to more advanced topics, our exploration extends beyond
                mere familiarity, delving into the intricacies of coding
                languages, innovative development techniques, and fundamental
                computing concepts. The goal is to provide learners with a
                holistic understanding, empowering them with a diverse skill set
                in the ever-evolving landscape of technology
              </Typography>
            </CardContent>
          </Card>
        </Col>
      </Row>

      <hr className="mt-4" />

      <Row className="mt-3">
        <h1 className="ms-2 text-center">Technologies and Languages</h1>
      </Row>
      <Row className="d-flex fle-row justify-content-center align-items-center mt-4">
        <ImageController>
          <img
            className="my-2 ico"
            src={k8s}
            alt="Kubernetes"
            width={90}
            height={90}
          ></img>
          <img
            className="mx-3 my-2 ico"
            src={cpp}
            alt="C++"
            width={60}
            height={70}
          ></img>
          <img
            className="mx-3 my-2 ico"
            src={mongodb}
            alt="MongoDB"
            width={60}
            height={70}
          ></img>
          <img
            className="mx-3 my-2 ico"
            src={docker}
            alt="Docker"
            width={60}
            height={70}
          ></img>
          <img
            className="mx-3 my-2 ico"
            src={java}
            alt="Java"
            width={60}
            height={70}
          ></img>
          <img
            className="mx-2 my-2 ico"
            src={rust}
            alt="Rust"
            width={70}
            height={70}
          ></img>
          <img
            className="my-2 ico"
            src={kafka}
            alt="Kafka"
            width={100}
            height={80}
            style={{ filter: "invert(100%)" }}
          ></img>
          <img
            className="my-2 ico"
            src={ubuntu}
            alt="Ubuntu"
            width={80}
            height={80}
          ></img>
        </ImageController>
      </Row>
      <hr className="mt-4" />
    </>
  );
};

export default Home;
