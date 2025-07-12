import type { Metadata } from "next"
import { Button, Card, Heading, Text, Flex, Box, Container, Section, Grid } from "@radix-ui/themes"
import { Code2, Smartphone, Users, Cloud, Globe, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services - Web Development, Mobile Apps & DevOps | Restacked, LLC",
  description:
    "Expert web development, mobile app development, technical consulting, and DevOps services. Custom enterprise solutions built for scale and performance.",
  keywords:
    "web development, mobile app development, DevOps, technical consulting, enterprise software, full-stack development, React, Node.js, cloud architecture",
  openGraph: {
    title: "Professional Software Development Services | Restacked, LLC",
    description:
      "Transform your business with our expert web development, mobile apps, and DevOps services. Enterprise-grade solutions built for scale.",
    type: "website",
  },
}

export default function ServicesPage() {
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
              <Link href="/services" className="text-primary font-medium">
                Services
              </Link>
              <Link href="/work" className="text-muted-foreground hover:text-primary transition-colors">
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
              Enterprise Software <span className="text-primary">Services</span>
            </Heading>
            <Text size="6" className="text-muted-foreground mb-10 max-w-3xl leading-relaxed">
              From custom web applications to mobile solutions and DevOps infrastructure, we deliver comprehensive
              technology services that scale with your business.
            </Text>
          </Flex>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section className="py-20">
        <Container size="4">
          <Grid columns={{ initial: "1", md: "2" }} gap="8" className="max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Flex direction="column">
                <Box className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-primary" />
                </Box>
                <Heading size="6" className="text-foreground mb-4">
                  Web Development
                </Heading>
                <Text className="text-muted-foreground mb-6 leading-relaxed">
                  Full-stack web applications built with modern frameworks like React, Next.js, and Node.js. Scalable,
                  secure, and optimized for performance.
                </Text>
                <Flex direction="column" gap="2" className="mb-6">
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">Custom Web Applications</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">E-commerce Platforms</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">API Development & Integration</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">Progressive Web Apps (PWAs)</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Flex direction="column">
                <Box className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-primary" />
                </Box>
                <Heading size="6" className="text-foreground mb-4">
                  Mobile Development
                </Heading>
                <Text className="text-muted-foreground mb-6 leading-relaxed">
                  Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter. Optimized
                  for performance and user experience.
                </Text>
                <Flex direction="column" gap="2" className="mb-6">
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">Native iOS & Android Apps</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">Cross-Platform Development</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">App Store Optimization</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">Mobile Backend Services</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Flex direction="column">
                <Box className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </Box>
                <Heading size="6" className="text-foreground mb-4">
                  Technical Consulting
                </Heading>
                <Text className="text-muted-foreground mb-6 leading-relaxed">
                  CTO-level guidance for architecture decisions, technology stack selection, and strategic planning.
                  Expert advice to accelerate your development.
                </Text>
                <Flex direction="column" gap="2" className="mb-6">
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">Technology Strategy & Planning</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">Architecture Design & Review</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">Code Audits & Optimization</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">Team Training & Mentoring</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Flex direction="column">
                <Box className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Cloud className="w-8 h-8 text-primary" />
                </Box>
                <Heading size="6" className="text-foreground mb-4">
                  DevOps & Infrastructure
                </Heading>
                <Text className="text-muted-foreground mb-6 leading-relaxed">
                  Cloud infrastructure, CI/CD pipelines, and deployment automation. Scalable, secure, and cost-effective
                  infrastructure solutions.
                </Text>
                <Flex direction="column" gap="2" className="mb-6">
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">Cloud Architecture (AWS, GCP, Azure)</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">CI/CD Pipeline Setup</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">Container Orchestration</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <Text size="2">Monitoring & Performance</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Technology Stack */}
      <Section className="py-20 bg-muted">
        <Container size="4">
          <Flex direction="column" align="center" className="text-center mb-16">
            <Heading size="8" className="text-foreground mb-4">
              Our Technology Stack
            </Heading>
            <Text size="5" className="text-muted-foreground max-w-2xl">
              We use cutting-edge technologies and proven frameworks to deliver robust, scalable solutions
            </Text>
          </Flex>

          <Grid columns={{ initial: "1", md: "3" }} gap="8" className="max-w-6xl mx-auto">
            <Card className="p-6">
              <Heading size="5" className="text-foreground mb-4">
                Frontend
              </Heading>
              <Flex direction="column" gap="2">
                <Text>React & Next.js</Text>
                <Text>TypeScript</Text>
                <Text>Tailwind CSS</Text>
                <Text>Vue.js & Nuxt.js</Text>
                <Text>Angular</Text>
              </Flex>
            </Card>

            <Card className="p-6">
              <Heading size="5" className="text-foreground mb-4">
                Backend
              </Heading>
              <Flex direction="column" gap="2">
                <Text>Node.js & Express</Text>
                <Text>Python & Django</Text>
                <Text>PostgreSQL & MongoDB</Text>
                <Text>GraphQL & REST APIs</Text>
                <Text>Microservices Architecture</Text>
              </Flex>
            </Card>

            <Card className="p-6">
              <Heading size="5" className="text-foreground mb-4">
                Infrastructure
              </Heading>
              <Flex direction="column" gap="2">
                <Text>AWS, Google Cloud, Azure</Text>
                <Text>Docker & Kubernetes</Text>
                <Text>Terraform & Infrastructure as Code</Text>
                <Text>GitHub Actions & CI/CD</Text>
                <Text>Monitoring & Logging</Text>
              </Flex>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-primary">
        <Container size="4">
          <Flex direction="column" align="center" className="max-w-4xl mx-auto text-center text-white">
            <Heading size="8" className="text-primary-foreground mb-6">
              Ready to Build Something Amazing?
            </Heading>
            <Text size="5" className="text-primary-foreground/90 mb-8 max-w-2xl">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
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
