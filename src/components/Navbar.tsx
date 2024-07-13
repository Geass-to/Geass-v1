"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button
} from "@nextui-org/react";
import { useState } from "react";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="fixed top-0 font-sans font-light"
        maxWidth="2xl"
        isBlurred
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Image alt="logo" src="/images/GeassLogo.png" width={100} height={50} />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="flex" justify="start">
          <NavbarItem>
            <Input
              type="search"
              placeholder="Search"
              labelPlacement="outside"
              variant="bordered"
              radius="full"
              color={"primary"}
              endContent={
                <MagnifyingGlass
                  className="flex-shrink-0 cursor-pointer text-2xl text-default-400"
                  stroke="blue"
                />
              }
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex sm:gap-16">
          <NavbarItem>
            <Link href="/home">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/popular">
              Popular
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/browse">
              Browse
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/genres">
              Genres
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/pricing">
              Pricing
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button as={Link} color="primary" href="#" variant="solid">
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="bordered">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#" aria-current="page">
              Popular
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="#">
              Browse
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="#">
              Genres
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="#">
              Pricing
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
