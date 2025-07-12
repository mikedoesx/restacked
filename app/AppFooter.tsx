import { Box, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";

import Image from "next/image";
import Link from "next/link";

export const AppFooter = () => {
  return (
    <Box className="bg-secondary text-secondary-foreground py-12">
      <Container size="4">
        <Grid columns={{ initial: "1", md: "4" }} gap="6">
          <Flex direction="column" gap="4" className="md:col-span-2">
            <Image
              src="/logo-header-white.png"
              width="280"
              height="60"
              alt="Restack, LLC Logo"
            />
            <Text className="text-secondary-foreground/70 max-w-md">
              Building the future of software, one application at a time.
              Enterprise-grade solutions for modern businesses.
            </Text>
          </Flex>

          <Box>
            <Heading size="4" className="text-secondary-foreground mb-4">
              Services
            </Heading>
            <Flex direction="column" gap="2">
              <Link
                href="#"
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                Web Development
              </Link>
              <Link
                href="#"
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                Mobile Apps
              </Link>
              <Link
                href="#"
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                Consulting
              </Link>
              <Link
                href="#"
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                DevOps
              </Link>
            </Flex>
          </Box>

          <Box>
            <Heading size="4" className="text-secondary-foreground mb-4">
              Company
            </Heading>
            <Flex direction="column" gap="2">
              <Link
                href="/about"
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/work"
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                Work
              </Link>
              <Link
                href="/contact"
                className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              >
                Contact
              </Link>
            </Flex>
          </Box>
        </Grid>

        <Box className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <Text className="text-secondary-foreground/70">
            &copy; {new Date().getFullYear()} Restacked, LLC. All rights
            reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
