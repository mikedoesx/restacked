import { ArrowRight, Clock, Code2, Mail, MapPin, Phone } from "lucide-react";
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

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get Your Software Project Started | Restacked, LLC",
  description:
    "Ready to start your software project? Contact Restacked for a free consultation. We specialize in web development, mobile apps, and enterprise solutions.",
  keywords:
    "contact software developers, free consultation, web development quote, mobile app development, enterprise software, project estimate",
  openGraph: {
    title: "Contact Restacked, LLC - Start Your Software Project Today",
    description:
      "Get in touch with our expert development team. Free consultation available for web, mobile, and enterprise software projects.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <Box className="min-h-screen">
      {/* Hero Section */}
      <Section className="py-20 bg-primary/10">
        <Container size="4">
          <Flex
            direction="column"
            align="center"
            className="max-w-4xl mx-auto text-center"
          >
            <Heading size="9" className="text-foreground mb-6 leading-tight">
              Let's Build Something{" "}
              <span className="text-primary">Amazing Together</span>
            </Heading>
            <Text
              size="6"
              className="text-muted-foreground mb-10 max-w-3xl leading-relaxed"
            >
              Ready to transform your ideas into powerful software solutions?
              Get in touch for a free consultation and project estimate.
            </Text>
          </Flex>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section className="py-20">
        <Container size="4">
          <Grid
            columns={{ initial: "1", lg: "3" }}
            gap="12"
            className="max-w-6xl mx-auto"
          >
            {/* Contact Form */}
            <Box className="lg:col-span-2">
              <Card className="p-8">
                <Heading size="6" className="text-foreground mb-6">
                  Send us a message
                </Heading>
                <form className="space-y-6">
                  <Grid columns={{ initial: "1", sm: "2" }} gap="4">
                    <Box>
                      <Text
                        as="label"
                        size="3"
                        weight="medium"
                        className="text-foreground mb-2 block"
                      >
                        First Name *
                      </Text>
                      <TextField.Root placeholder="John" required />
                    </Box>
                    <Box>
                      <Text
                        as="label"
                        size="3"
                        weight="medium"
                        className="text-foreground mb-2 block"
                      >
                        Last Name *
                      </Text>
                      <TextField.Root placeholder="Doe" required />
                    </Box>
                  </Grid>

                  <Box>
                    <Text
                      as="label"
                      size="3"
                      weight="medium"
                      className="text-foreground mb-2 block"
                    >
                      Email Address *
                    </Text>
                    <TextField.Root
                      type="email"
                      placeholder="john@company.com"
                      required
                    />
                  </Box>

                  <Box>
                    <Text
                      as="label"
                      size="3"
                      weight="medium"
                      className="text-foreground mb-2 block"
                    >
                      Company
                    </Text>
                    <TextField.Root placeholder="Your Company Name" />
                  </Box>

                  <Box>
                    <Text
                      as="label"
                      size="3"
                      weight="medium"
                      className="text-foreground mb-2 block"
                    >
                      Project Type
                    </Text>
                    <select className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">
                        Mobile Development
                      </option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="devops">DevOps & Infrastructure</option>
                      <option value="other">Other</option>
                    </select>
                  </Box>

                  <Box>
                    <Text
                      as="label"
                      size="3"
                      weight="medium"
                      className="text-foreground mb-2 block"
                    >
                      Project Budget
                    </Text>
                    <select className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                      <option value="">Select budget range</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </Box>

                  <Box>
                    <Text
                      as="label"
                      size="3"
                      weight="medium"
                      className="text-foreground mb-2 block"
                    >
                      Project Details *
                    </Text>
                    <TextArea
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      rows={6}
                      required
                    />
                  </Box>

                  <Button
                    type="submit"
                    size="4"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4"
                  >
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </Box>

            {/* Contact Information */}
            <Box>
              <Card className="p-8 mb-8">
                <Heading size="5" className="text-foreground mb-6">
                  Get in Touch
                </Heading>
                <Flex direction="column" gap="6">
                  <Flex align="center" gap="4">
                    <Box className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </Box>
                    <Box>
                      <Text weight="medium" className="text-foreground">
                        Email
                      </Text>
                      <Text size="2" className="text-muted-foreground">
                        hello@restacked.dev
                      </Text>
                    </Box>
                  </Flex>

                  <Flex align="center" gap="4">
                    <Box className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </Box>
                    <Box>
                      <Text weight="medium" className="text-foreground">
                        Phone
                      </Text>
                      <Text size="2" className="text-muted-foreground">
                        +1 (555) 123-4567
                      </Text>
                    </Box>
                  </Flex>

                  <Flex align="center" gap="4">
                    <Box className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </Box>
                    <Box>
                      <Text weight="medium" className="text-foreground">
                        Location
                      </Text>
                      <Text size="2" className="text-muted-foreground">
                        Remote & On-site
                      </Text>
                    </Box>
                  </Flex>

                  <Flex align="center" gap="4">
                    <Box className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </Box>
                    <Box>
                      <Text weight="medium" className="text-foreground">
                        Response Time
                      </Text>
                      <Text size="2" className="text-muted-foreground">
                        Within 24 hours
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Card>

              <Card className="p-8">
                <Heading size="5" className="text-foreground mb-4">
                  Free Consultation
                </Heading>
                <Text className="text-muted-foreground mb-4 leading-relaxed">
                  Schedule a free 30-minute consultation to discuss your project
                  requirements and get expert advice.
                </Text>
                <Button variant="outline" className="w-full bg-transparent">
                  Schedule Call
                </Button>
              </Card>
            </Box>
          </Grid>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20 bg-primary/10">
        <Container size="4">
          <Flex direction="column" align="center" className="text-center mb-16">
            <Heading size="8" className="text-foreground mb-4">
              Frequently Asked Questions
            </Heading>
            <Text size="5" className="text-muted-foreground max-w-2xl">
              Common questions about our services and process
            </Text>
          </Flex>

          <Grid
            columns={{ initial: "1", md: "2" }}
            gap="8"
            className="max-w-4xl mx-auto"
          >
            <Card className="p-6">
              <Heading size="4" className="text-foreground mb-3">
                How long does a typical project take?
              </Heading>
              <Text className="text-muted-foreground leading-relaxed">
                Project timelines vary based on complexity. Simple web
                applications typically take 4-8 weeks, while enterprise
                solutions may take 3-6 months. We provide detailed timelines
                during our initial consultation.
              </Text>
            </Card>

            <Card className="p-6">
              <Heading size="4" className="text-foreground mb-3">
                Do you work with startups?
              </Heading>
              <Text className="text-muted-foreground leading-relaxed">
                We love working with startups and understand the unique
                challenges they face. We offer flexible engagement models and
                can help you build an MVP or scale your existing product.
              </Text>
            </Card>

            <Card className="p-6">
              <Heading size="4" className="text-foreground mb-3">
                What's included in your support?
              </Heading>
              <Text className="text-muted-foreground leading-relaxed">
                We provide ongoing maintenance, bug fixes, security updates, and
                feature enhancements. Our support packages are tailored to your
                specific needs and can include 24/7 monitoring.
              </Text>
            </Card>

            <Card className="p-6">
              <Heading size="4" className="text-foreground mb-3">
                Can you work with our existing team?
              </Heading>
              <Text className="text-muted-foreground leading-relaxed">
                Yes! We often work as an extension of existing development
                teams, providing specialized expertise or additional capacity
                for specific projects or technologies.
              </Text>
            </Card>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
