import {
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Smartphone,
  Star,
  Users,
  Zap,
} from "lucide-react";
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
  TextArea,
  TextField,
} from "@radix-ui/themes";

import { CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-primary/10 px-4">
        <Container size="4">
          <Flex
            direction="column"
            align="center"
            className="max-w-4xl mx-auto text-center py-20"
          >
            <Heading size="9" className="text-foreground mb-6 leading-tight">
              Software <span className="text-primary">Built Smart</span>
            </Heading>
            <Text
              size="6"
              className="text-muted-foreground mb-10 max-w-4xl leading-relaxed"
            >
              Restacked helps startups and enterprises design, build, and scale
              full-stack applications.
            </Text>
            <Flex
              direction={{ initial: "column", sm: "row" }}
              gap="4"
              justify="center"
            >
              <Button
                size="4"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
                asChild
              >
                <Link href="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="4"
                variant="outline"
                className="border-border text-foreground hover:bg-primary/10 px-8 py-4 bg-transparent"
                asChild
              >
                <Link href="/work">View Work</Link>
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-primary px-4 text-center">
        <Container size="4">
          <Grid columns={{ initial: "1", md: "3" }} gap="6">
            <Flex
              direction="column"
              align="center"
              justify={"center"}
              className={"max-w-xs mx-auto"}
            >
              <Zap className="w-12 h-12 mb-4 text-primary-foreground/70" />
              <Heading size="5" className="text-primary-foreground mb-2">
                Lightning Fast
              </Heading>
              <Text className="text-primary-foreground/80">
                Rapid development cycles without compromising quality
              </Text>
            </Flex>
            <Flex
              direction="column"
              align="center"
              justify={"center"}
              className={"max-w-xs mx-auto"}
            >
              <Shield className="w-12 h-12 mb-4 text-primary-foreground/70" />
              <Heading size="5" className="text-primary-foreground mb-2">
                Enterprise Security
              </Heading>
              <Text className="text-primary-foreground/80">
                Bank-grade security and compliance standards
              </Text>
            </Flex>
            <Flex
              direction="column"
              align="center"
              justify={"center"}
              className={"max-w-xs mx-auto"}
            >
              <CheckCircle className="w-12 h-12 mb-4 text-primary-foreground/70" />
              <Heading size="5" className="text-primary-foreground mb-2">
                Proven Results
              </Heading>
              <Text className="text-primary-foreground/80">
                Successful projects delivered on time
              </Text>
            </Flex>
          </Grid>
        </Container>
      </Section>

      {/* Features Section */}
      <Section id="services" className="py-20 px-4">
        <Container size="4" className="py-32">
          <Flex direction="column" align="center" className="text-center mb-16">
            <Heading size="8" className="text-foreground mb-4">
              Enterprise-Grade Solutions
            </Heading>
            <Text size="5" className="text-muted-foreground max-w-2xl">
              We deliver cutting-edge technology solutions that scale with your
              business
            </Text>
          </Flex>

          <Grid
            columns={{ initial: "1", md: "3" }}
            gap="6"
            className="max-w-6xl mx-auto"
          >
            <Card className="text-center hover:shadow-lg transition-shadow">
              <Flex direction="column" align="center" justify="center" p="4">
                <Box className="p-4 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-primary" />
                </Box>
                <Heading size="6" className="text-foreground mb-4">
                  Custom Web Apps
                </Heading>
                <Text className="text-muted-foreground leading-relaxed">
                  Tailored platforms built for scale and speed. From MVP to
                  enterprise, we craft solutions that grow with you.
                </Text>
              </Flex>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <Flex direction="column" align="center" p="4">
                <Box className="p-4 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-primary" />
                </Box>
                <Heading size="6" className="text-foreground mb-4">
                  Mobile Solutions
                </Heading>
                <Text className="text-muted-foreground leading-relaxed">
                  iOS, Android, and cross-platform expertise. Native performance
                  with modern frameworks and seamless UX.
                </Text>
              </Flex>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <Flex direction="column" align="center" p="4">
                <Box className="p-4 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </Box>
                <Heading size="6" className="text-foreground mb-4">
                  CTO-Level Guidance
                </Heading>
                <Text className="text-muted-foreground leading-relaxed">
                  Architecture, DevOps, and tech leadership. Strategic guidance
                  to make the right technology decisions.
                </Text>
              </Flex>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Trusted By Section */}
      {/* <Section className="py-16 bg-primary/10 px-4">
        <Container size="4">
          <Flex direction="column" align="center" className="text-center mb-16">
            <Heading size="8" className="text-foreground mb-4">
              Trusted by Innovative Companies
            </Heading>
          </Flex>
          <Grid
            columns={{ initial: "2", md: "4" }}
            gap="6"
            className="items-center max-w-4xl mx-auto"
          >
            {[1, 2, 3, 4].map((i) => (
              <Flex key={i} align="center" justify="center">
                <Box className="py-4 px-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Text className="text-muted-foreground" weight="medium">
                    Logo {i}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Grid>
        </Container>
      </Section> */}

      {/* Testimonials Section */}
      {/* <Section className="py-20 px-4">
        <Container size="4">
          <Flex direction="column" align="center" className="text-center mb-16">
            <Heading size="8" className="text-foreground mb-4">
              Trusted by Industry Leaders
            </Heading>
          </Flex>

          <Grid
            columns={{ initial: "1", md: "2" }}
            gap="6"
            className="max-w-4xl mx-auto"
          >
            <Card>
              <Flex direction="column" p="4">
                <Flex className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-current"
                    />
                  ))}
                </Flex>
                <Text size="4" className="text-foreground mb-6 leading-relaxed">
                  "Restacked transformed our legacy system into a modern,
                  scalable platform. Their technical expertise and strategic
                  guidance were invaluable."
                </Text>
                <Flex align="center">
                  <Box className="px-3.5 py-3 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Text weight="bold" className="text-primary">
                      SJ
                    </Text>
                  </Box>
                  <Flex direction={"column"}>
                    <Text weight="bold" className="text-foreground">
                      Sarah Johnson
                    </Text>
                    <Text className="text-muted-foreground">
                      CTO, TechFlow Inc.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Card>

            <Card className="p-8">
              <Flex direction="column" p="4">
                <Flex className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-current"
                    />
                  ))}
                </Flex>
                <Text size="4" className="text-foreground mb-6 leading-relaxed">
                  "The team delivered our mobile app ahead of schedule with
                  exceptional quality. Their attention to detail and user
                  experience is outstanding."
                </Text>
                <Flex align="center">
                  <Box className="px-3 py-3 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Text weight="bold" className="text-primary">
                      MC
                    </Text>
                  </Box>
                  <Flex direction={"column"}>
                    <Text weight="bold" className="text-foreground">
                      Michael Chen
                    </Text>
                    <Text className="text-muted-foreground">
                      Founder, StartupXYZ
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          </Grid>
        </Container>
      </Section> */}

      {/* Contact Form */}
      <Section id="contact" className="py-20 bg-primary/10 px-4">
        <Container size="3">
          <Flex direction="column" align="center" className="text-center mb-12">
            <Heading size="8" className="text-foreground mb-4">
              Ready to Get Started?
            </Heading>
            <Text size="5" className="text-muted-foreground">
              Let&apos;s discuss your project and how we can help you succeed
            </Text>
          </Flex>

          <Card>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-1">
                  <Text
                    as="label"
                    size="3"
                    weight="medium"
                    className="text-foreground block"
                  >
                    Name
                  </Text>
                  <TextField.Root
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>

                <div className="space-y-1">
                  <Text
                    as="label"
                    size="3"
                    weight="medium"
                    className="text-foreground block"
                  >
                    Email
                  </Text>
                  <TextField.Root
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>

                <div className="space-y-1">
                  <Text
                    as="label"
                    size="3"
                    weight="medium"
                    className="text-foreground block"
                  >
                    Message
                  </Text>
                  <TextArea
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button type="submit" size="4">
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  );
}
