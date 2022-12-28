import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useColorMode, Avatar } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import ThemeChangerComponent from "./ThemeChanger";

export default function NavbarComponent() {
  const { data: session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Navbar variant={colorMode}>
      <Container>
        <Navbar.Brand as={Link} href="/">
          Navbar with text
        </Navbar.Brand>
        <ThemeChangerComponent />
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text as={Link} href="/blog">
            Blogs
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {session ? (
            <>
              <Avatar
                className="mr-4"
                name={session.user?.name!}
                src={session.user?.image!}
              />
              <Navbar.Text>
                Signed in as:{" "}
                <a className="cursor-pointer" onClick={() => signOut()}>
                  {session.user?.name}
                </a>
              </Navbar.Text>
            </>
          ) : (
            <Navbar.Text className="cursor-pointer" onClick={() => signIn()}>
              Sign in
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
