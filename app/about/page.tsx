import { ArrowRight, Award, CheckCircle, Target, Users } from "lucide-react";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Expert Software Development Team | Restacked, LLC",
  description:
    "Learn about Restacked's mission to deliver enterprise-grade software solutions. Meet our experienced team of developers, architects, and consultants.",
  keywords:
    "software development company, enterprise solutions, full-stack developers, technical consulting, software architecture, startup to enterprise",
  openGraph: {
    title: "About Restacked, LLC - Your Software Development Partner",
    description:
      "Experienced software development team specializing in web apps, mobile solutions, and technical consulting for startups and enterprises.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 bg-primary/10 p-4">
        <Container size="4">
          <Flex
            direction="column"
            align="center"
            className="max-w-4xl mx-auto text-center"
          >
            <Heading size="9" className="text-foreground mb-6 leading-tight">
              Building the Future of{" "}
              <span className="text-primary">Software</span>
            </Heading>
            <Text
              size="6"
              className="text-muted-foreground mb-10 max-w-3xl leading-relaxed"
            >
              We&apos;re a team of passionate developers, architects, and
              consultants dedicated to creating exceptional software solutions
              that drive business growth.
            </Text>
          </Flex>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section className="py-20 p-4">
        <Container size="4">
          <Grid columns={{ initial: "1", md: "2" }} className="gap-12">
            <Box>
              <Heading size="7" className="text-foreground mb-6">
                Our Mission
              </Heading>
              <Text
                size="4"
                className="text-muted-foreground leading-relaxed mb-6"
              >
                To empower businesses with cutting-edge software solutions that
                are not just functional, but transformative. We believe that
                great software should be intuitive, scalable, and built to last.
              </Text>
              <Text size="4" className="text-muted-foreground leading-relaxed">
                Every project we undertake is an opportunity to push the
                boundaries of what&apos;s possible, delivering solutions that
                exceed expectations and drive real business value.
              </Text>
            </Box>
            <Box className="space-y-2">
              <Heading size="7" className="text-foreground mb-6">
                Our Approach
              </Heading>
              <Text size="4" className="text-muted-foreground leading-relaxed">
                We combine technical expertise with strategic thinking to
                deliver solutions that align with your business goals. Our agile
                methodology ensures rapid iteration and continuous improvement.
              </Text>
              <Flex direction="column" gap="3">
                <Flex align="center" gap="3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <Text>User-centered design and development</Text>
                </Flex>
                <Flex align="center" gap="3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <Text>Scalable architecture from day one</Text>
                </Flex>
                <Flex align="center" gap="3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <Text>Continuous integration and deployment</Text>
                </Flex>
                <Flex align="center" gap="3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <Text>Transparent communication throughout</Text>
                </Flex>
              </Flex>
            </Box>
          </Grid>
        </Container>
      </Section>

      {/* Values */}
      <Section className="py-20 bg-primary/10 p-4">
        <Container size="4">
          <Flex direction="column" align="center" className="text-center mb-16">
            <Heading size="8" className="text-foreground mb-4">
              Our Core Values
            </Heading>
            <Text size="5" className="text-muted-foreground max-w-2xl">
              The principles that guide everything we do
            </Text>
          </Flex>

          <Grid
            columns={{ initial: "1", md: "3" }}
            gap="8"
            className="max-w-6xl mx-auto"
          >
            <Card className="p-8 text-center">
              <Box className="p-3">
                <Box className="p-3 w-fit bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </Box>
                <Heading size="5" className="text-foreground mb-4">
                  Excellence
                </Heading>
                <Text className="text-muted-foreground leading-relaxed">
                  We strive for excellence in every line of code, every design
                  decision, and every client interaction. Quality is never
                  negotiable.
                </Text>
              </Box>
            </Card>

            <Card className="p-8 text-center">
              <Box className="p-3">
                <Box className="p-3 w-fit bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </Box>
                <Heading size="5" className="text-foreground mb-4">
                  Collaboration
                </Heading>
                <Text className="text-muted-foreground leading-relaxed">
                  We work as an extension of your team, fostering open
                  communication and shared ownership of project success.
                </Text>
              </Box>
            </Card>

            <Card className="p-8 text-center">
              <Box className="p-3">
                <Box className="p-3 w-fit bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </Box>
                <Heading size="5" className="text-foreground mb-4">
                  Innovation
                </Heading>
                <Text className="text-muted-foreground leading-relaxed">
                  We embrace new technologies and methodologies, constantly
                  evolving to deliver cutting-edge solutions.
                </Text>
              </Box>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Stats */}
      <Section className="py-20 p-4">
        <Container size="4">
          <Grid
            columns={{ initial: "2", md: "4" }}
            gap="8"
            className="max-w-4xl mx-auto text-center"
          >
            <Box>
              <Heading size="8" className="text-primary mb-2">
                100+
              </Heading>
              <Text className="text-muted-foreground">Projects Delivered</Text>
            </Box>
            <Box>
              <Heading size="8" className="text-primary mb-2">
                50+
              </Heading>
              <Text className="text-muted-foreground">Happy Clients</Text>
            </Box>
            <Box>
              <Heading size="8" className="text-primary mb-2">
                10+
              </Heading>
              <Text className="text-muted-foreground">Years Experience</Text>
            </Box>
            <Box>
              <Heading size="8" className="text-primary mb-2">
                24/7
              </Heading>
              <Text className="text-muted-foreground">Support Available</Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section className="py-20 bg-primary/10 p-4">
        <Container size="4">
          <Flex direction="column" align="center" className="text-center mb-16">
            <Heading size="8" className="text-foreground mb-4">
              Why Choose Restacked?
            </Heading>
            <Text size="5" className="text-muted-foreground max-w-2xl">
              We&apos;re more than just developers - we&apos;re your strategic
              technology partners
            </Text>
          </Flex>

          <Grid
            columns={{ initial: "1", md: "2" }}
            gap="8"
            className="max-w-4xl mx-auto"
          >
            <Card className="p-6">
              <div className="p-4">
                <Heading size="5" className="text-foreground mb-4">
                  Proven Track Record
                </Heading>
                <Text className="text-muted-foreground leading-relaxed">
                  With over 100 successful projects across various industries,
                  we have the experience and expertise to handle projects of any
                  complexity.
                </Text>
              </div>
            </Card>

            <Card className="p-6">
              <div className="p-4">
                <Heading size="5" className="text-foreground mb-4">
                  End-to-End Solutions
                </Heading>
                <Text className="text-muted-foreground leading-relaxed">
                  From initial concept to deployment and maintenance, we provide
                  comprehensive services that cover every aspect of software
                  development.
                </Text>
              </div>
            </Card>

            <Card className="p-6">
              <div className="p-4">
                <Heading size="5" className="text-foreground mb-4">
                  Agile & Flexible
                </Heading>
                <Text className="text-muted-foreground leading-relaxed">
                  Our agile development process ensures rapid delivery while
                  maintaining flexibility to adapt to changing requirements.
                </Text>
              </div>
            </Card>

            <Card className="p-6">
              <div className="p-4">
                <Heading size="5" className="text-foreground mb-4">
                  Long-term Partnership
                </Heading>
                <Text className="text-muted-foreground leading-relaxed">
                  We build lasting relationships with our clients, providing
                  ongoing support and evolution of your software solutions.
                </Text>
              </div>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-primary p-4">
        <Container size="4">
          <Flex
            direction="column"
            align="center"
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Heading size="8" className="text-primary-foreground mb-6">
              Ready to Work Together?
            </Heading>
            <Text
              size="5"
              className="text-primary-foreground/90 mb-8 max-w-2xl"
            >
              Let&apos;s discuss how we can help transform your ideas into
              powerful software solutions.
            </Text>
            <Button size="4" asChild>
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </Flex>
        </Container>
      </Section>
    </>
  );
}
