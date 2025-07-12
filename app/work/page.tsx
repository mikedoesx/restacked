import type { Metadata } from "next"
import { Button, Card, Heading, Text, Flex, Box, Container, Section, Grid, Badge } from "@radix-ui/themes"
import { Code2, ExternalLink, ArrowRight, Globe, Smartphone, Database, Cloud } from "lucide-react"
import Link from "next/link"

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
}

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
    features: ["HIPAA compliant", "Patient portal", "Appointment scheduling", "Prescription management"],
  },
  {
    title: "E-Learning Mobile App",
    description:
      "Cross-platform mobile learning application with video streaming, progress tracking, and offline capabilities.",
    technologies: ["React Native", "Firebase", "Node.js", "AWS S3", "Stripe"],
    category: "Mobile Application",
    icon: Smartphone,
    features: ["Offline content access", "Progress tracking", "Video streaming", "In-app purchases"],
  },
  {
    title: "Supply Chain Analytics",
    description:
      "Enterprise analytics platform for supply chain optimization with predictive modeling and real-time monitoring.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "Kubernetes"],
    category: "Enterprise Solution",
    icon: Cloud,
    features: ["Predictive analytics", "Real-time monitoring", "Custom dashboards", "API integrations"],
  },
  {
    title: "Social Commerce Platform",
    description: "Social media integrated e-commerce platform with influencer marketing tools and advanced analytics.",
    technologies: ["React", "GraphQL", "Node.js", "Redis", "AWS"],
    category: "Web Application",
    icon: Globe,
    features: ["Social media integration", "Influencer tools", "Advanced analytics", "Multi-vendor support"],
  },
  {
    title: "IoT Fleet Management",
    description:
      "IoT-based fleet management system with real-time tracking, maintenance scheduling, and driver analytics.",
    technologies: ["Angular", "Node.js", "MongoDB", "MQTT", "Google Cloud"],
    category: "Enterprise Solution",
    icon: Database,
    features: ["Real-time GPS tracking", "Maintenance alerts", "Driver behavior analysis", "Route optimization"],
  },
]

export default function WorkPage() {
  return (
    <Box className="min-h-screen">
      {/* Header */}
      <Box className="border-b border-[hsl(var(--border))]">
        <Container size="4">
          <Flex align="center" justify="between" py="4">
            <Flex align="center" gap="2">
              <Link href="/" className="flex items-center gap-2">
                <Box className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </Box>
                <Text size="5" weight="bold" className="text-foreground">
                  Restacked, LLC
                </Text>
              </Link>
            </Flex>
            <Flex align="center" gap="6" className="hidden md:flex">
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/work" className="text-primary font-medium">
                Work
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </Flex>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Section className="py-20 bg-gradient-to-br from-background to-muted">
        <Container size="4">
          <Flex direction="column" align="center" className="max-w-4xl mx-auto text-center">
            <Heading size="9" className="text-foreground mb-6 leading-tight">
              Our <span className="text-primary">Portfolio</span>
            </Heading>
            <Text size="6" className="text-muted-foreground mb-10 max-w-3xl leading-relaxed">
              Explore our successful projects across various industries. From startups to enterprise solutions, we've
              delivered innovative software that drives business growth.
            </Text>
          </Flex>
        </Container>
      </Section>

      {/* Portfolio Grid */}
      <Section className="py-20">
        <Container size="4">
          <Grid columns={{ initial: "1", md: "2" }} gap="8" className="max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <Flex direction="column" height="100%">
                  <Flex align="center" justify="between" className="mb-4">
                    <Box className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-primary" />
                    </Box>
                    <Badge color="blue" variant="soft">
                      {project.category}
                    </Badge>
                  </Flex>

                  <Heading size="5" className="text-foreground mb-3">
                    {project.title}
                  </Heading>

                  <Text className="text-muted-foreground mb-6 leading-relaxed flex-grow">{project.description}</Text>

                  <Box className="mb-6">
                    <Text size="2" weight="medium" className="text-foreground mb-3">
                      Key Features:
                    </Text>
                    <Grid columns="1" gap="2">
                      {project.features.map((feature, featureIndex) => (
                        <Text key={featureIndex} size="2" className="text-muted-foreground">
                          • {feature}
                        </Text>
                      ))}
                    </Grid>
                  </Box>

                  <Box className="mb-6">
                    <Text size="2" weight="medium" className="text-foreground mb-3">
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

                  <Button variant="outline" className="mt-auto bg-transparent" asChild>
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
      <Section className="py-20 bg-muted">
        <Container size="4">
          <Flex direction="column" align="center" className="text-center mb-16">
            <Heading size="8" className="text-foreground mb-4">
              Our Development Process
            </Heading>
            <Text size="5" className="text-muted-foreground max-w-2xl">
              A proven methodology that ensures successful project delivery
            </Text>
          </Flex>

          <Grid columns={{ initial: "1", md: "4" }} gap="6" className="max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <Box className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Text weight="bold" className="text-primary">
                  1
                </Text>
              </Box>
              <Heading size="4" className="text-foreground mb-3">
                Discovery
              </Heading>
              <Text size="2" className="text-muted-foreground">
                Understanding your business goals, requirements, and technical constraints
              </Text>
            </Card>

            <Card className="p-6 text-center">
              <Box className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Text weight="bold" className="text-primary">
                  2
                </Text>
              </Box>
              <Heading size="4" className="text-foreground mb-3">
                Design
              </Heading>
              <Text size="2" className="text-muted-foreground">
                Creating user-centered designs and technical architecture blueprints
              </Text>
            </Card>

            <Card className="p-6 text-center">
              <Box className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Text weight="bold" className="text-primary">
                  3
                </Text>
              </Box>
              <Heading size="4" className="text-foreground mb-3">
                Development
              </Heading>
              <Text size="2" className="text-muted-foreground">
                Agile development with regular updates and continuous integration
              </Text>
            </Card>

            <Card className="p-6 text-center">
              <Box className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Text weight="bold" className="text-primary">
                  4
                </Text>
              </Box>
              <Heading size="4" className="text-foreground mb-3">
                Deployment
              </Heading>
              <Text size="2" className="text-muted-foreground">
                Seamless deployment with ongoing support and maintenance
              </Text>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-primary">
        <Container size="4">
          <Flex direction="column" align="center" className="max-w-4xl mx-auto text-center text-white">
            <Heading size="8" className="text-primary-foreground mb-6">
              Ready to Start Your Project?
            </Heading>
            <Text size="5" className="text-primary-foreground/90 mb-8 max-w-2xl">
              Let's discuss your vision and create a custom solution that exceeds your expectations.
            </Text>
            <Button
              size="4"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </Flex>
        </Container>
      </Section>
    </Box>
  )
}
