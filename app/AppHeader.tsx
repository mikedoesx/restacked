import { Box, Button, Container, Flex, Link } from "@radix-ui/themes";

import Image from "next/image";

export const AppHeader = () => {
  return (
    <Box className="border-b border-[hsl(var(--border))]">
      <Container size="4">
        <Flex align="center" justify="between" py="4">
          <a href="/">
            <Image
              src="/logo-header.png"
              width={280 * 0.8}
              height={60 * 0.8}
              alt="Restack, LLC Logo"
            />
          </a>

          <Flex align="center" gap="6" className="hidden md:flex">
            <Link
              href="/services"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </Flex>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
