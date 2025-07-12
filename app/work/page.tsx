import {
  ArrowRight,
  Cloud,
  Database,
  ExternalLink,
  Globe,
  Smartphone,
} from "lucide-react";
import {
  Badge,
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
  title: "Our Work - Software Development Portfolio | Restacked, LLC",
  description:
    "Explore our portfolio of successful web applications, mobile apps, and enterprise solutions. See how we've helped businesses transform through technology.",
  keywords:
    "software development portfolio, web app examples, mobile app development, enterprise solutions, case studies, React projects, Node.js applications",
  openGraph: {
    title: "Portfolio - Successful Software Projects | Restacked, LLC",
    description:
      "Discover our portfolio of innovative web and mobile applications built for startups and enterprises across various industries.",
    type: "website",
  },
};

const projects = [
  {
    title: "FinTech Trading Platform",
    description:
      "Real-time trading platform with advanced analytics, portfolio management, and secure payment processing.",
    technologies: ["React", "Node.js", "PostgreSQL", "WebSocket", "AWS"],
    category: "Web Application",
    icon: Globe,
    features: [
      "Real-time data streaming",
      "Advanced charting",
      "Multi-factor authentication",
      "Automated trading algorithms",
    ],
  },
  {
    title: "Healthcare Management System",
    description:
      "Comprehensive patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Vercel"],
    category: "Enterprise Solution",
    icon: Database,
    features: [
      "HIPAA compliant",
      "Patient portal",
      "Appointment scheduling",
      "Prescription management",
    ],
  },
  {
    title: "E-Learning Mobile App",
    description:
      "Cross-platform mobile learning application with video streaming, progress tracking, and offline capabilities.",
    technologies: ["React Native", "Firebase", "Node.js", "AWS S3", "Stripe"],
    category: "Mobile Application",
    icon: Smartphone,
    features: [
      "Offline content access",
      "Progress tracking",
      "Video streaming",
      "In-app purchases",
    ],
  },
  {
    title: "Supply Chain Analytics",
    description:
      "Enterprise analytics platform for supply chain optimization with predictive modeling and real-time monitoring.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "Kubernetes"],
    category: "Enterprise Solution",
    icon: Cloud,
    features: [
      "Predictive analytics",
      "Real-time monitoring",
      "Custom dashboards",
      "API integrations",
    ],
  },
  {
    title: "Social Commerce Platform",
    description:
      "Social media integrated e-commerce platform with influencer marketing tools and advanced analytics.",
    technologies: ["React", "GraphQL", "Node.js", "Redis", "AWS"],
    category: "Web Application",
    icon: Globe,
    features: [
      "Social media integration",
      "Influencer tools",
      "Advanced analytics",
      "Multi-vendor support",
    ],
  },
  {
    title: "IoT Fleet Management",
    description:
      "IoT-based fleet management system with real-time tracking, maintenance scheduling, and driver analytics.",
    technologies: ["Angular", "Node.js", "MongoDB", "MQTT", "Google Cloud"],
    category: "Enterprise Solution",
    icon: Database,
    features: [
      "Real-time GPS tracking",
      "Maintenance alerts",
      "Driver behavior analysis",
      "Route optimization",
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="py-20 bg-primary/10 px-4">
        <Container size="4">
          <Flex
            direction="column"
            align="center"
            className="max-w-4xl mx-auto text-center"
          >
            <Heading size="9" className="text-foreground mb-6 leading-tight">
              Our <span className="text-primary">Portfolio</span>
            </Heading>
            <Text
              size="6"
              className="text-muted-foreground mb-10 max-w-3xl leading-relaxed"
            >
              Explore our successful projects across various industries. From
              startups to enterprise solutions, we've delivered innovative
              software that drives business growth.
            </Text>
          </Flex>
        </Container>
      </Section>

      {/* Portfolio Grid */}
      <Section className="py-20 px-4">
        <Container size="4">
          <Grid
            columns={{ initial: "1", md: "2" }}
            gap="8"
            className="max-w-6xl mx-auto"
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow"
              >
                <Flex direction="column" height="100%" p="4">
                  <Flex align="center" justify="between" className="mb-4">
                    <Box className="p-3 bg-primary/10 rounded-lg flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-primary" />
                    </Box>
                    <Badge color="blue" variant="soft">
                      {project.category}
                    </Badge>
                  </Flex>

                  <Heading size="5" className="text-foreground mb-3">
                    {project.title}
                  </Heading>

                  <Text className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </Text>

                  <Box className="mb-6">
                    <Text
                      size="2"
                      weight="medium"
                      className="text-foreground mb-3"
                    >
                      Key Features:
                    </Text>
                    <Grid columns="1" gap="2">
                      {project.features.map((feature, featureIndex) => (
                        <Text
                          key={featureIndex}
                          size="2"
                          className="text-muted-foreground"
                        >
                          • {feature}
                        </Text>
                      ))}
                    </Grid>
                  </Box>

                  <Box className="mb-6">
                    <Text
                      size="2"
                      weight="medium"
                      className="text-foreground mb-3"
                    >
                      Technologies:
                    </Text>
                    <Flex wrap="wrap" gap="2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" size="1">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>

                  <Button variant="outline" asChild>
                    <Link href="/contact">
                      Discuss Similar Project
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="py-20 bg-primary/10 px-4">
        <Container size="4">
          <Flex direction="column" align="center" className="text-center mb-16">
            <Heading size="8" className="text-foreground mb-4">
              Our Development Process
            </Heading>
            <Text size="5" className="text-muted-foreground max-w-2xl">
              A proven methodology that ensures successful project delivery
            </Text>
          </Flex>

          <Grid
            columns={{ initial: "1", md: "4" }}
            gap="6"
            className="max-w-6xl mx-auto"
          >
            <Card className="p-6 text-center">
              <div className="p-4">
                <Heading size="4" className="text-foreground mb-3">
                  Discovery
                </Heading>
                <Text size="2" className="text-muted-foreground">
                  Understanding your business goals, requirements, and technical
                  constraints
                </Text>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <div className="p-4">
                <Heading size="4" className="text-foreground mb-3">
                  Design
                </Heading>
                <Text size="2" className="text-muted-foreground">
                  Creating user-centered designs and technical architecture
                  blueprints
                </Text>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <div className="p-4">
                <Heading size="4" className="text-foreground mb-3">
                  Development
                </Heading>
                <Text size="2" className="text-muted-foreground">
                  Agile development with regular updates and continuous
                  integration
                </Text>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <div className="p-4">
                <Heading size="4" className="text-foreground mb-3">
                  Deployment
                </Heading>
                <Text size="2" className="text-muted-foreground">
                  Seamless deployment with ongoing support and maintenance
                </Text>
              </div>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-primary px-4">
        <Container size="4">
          <Flex
            direction="column"
            align="center"
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Heading size="8" className="text-primary-foreground mb-6">
              Ready to Start Your Project?
            </Heading>
            <Text
              size="5"
              className="text-primary-foreground/90 mb-8 max-w-2xl"
            >
              Let's discuss your vision and create a custom solution that
              exceeds your expectations.
            </Text>
            <Button size="4" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </Flex>
        </Container>
      </Section>
    </>
  );
}
