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
  Button,
  Dropdown,
  DropdownTrigger,
  User,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import { useState } from "react";
import type { User as UserType } from "@supabase/supabase-js";

interface NavbarProps {
  userData: UserType;
}

const NavbarComponent = ({ userData }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="fixed top-0 font-sans font-light"
        maxWidth="2xl"
        isBlurred
      >
        <NavbarContent className="flex flex-row" justify="start">
          <NavbarItem>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            {/* <NavbarBrand> */}

            <Image
              alt="logo"
              src="/images/GeassLogo.png"
              width={100}
              height={50}
              className="min-h-10"
            />
          </NavbarItem>
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
          {/* </NavbarBrand> */}
        </NavbarContent>

        {/* <NavbarContent className="flex" justify="start"> */}
        {/* </NavbarContent> */}

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

        {!userData && (
          <NavbarContent justify="end" className="font-mono">
            <NavbarItem className="hidden lg:flex">
              <Button
                as={Link}
                color="primary"
                href="/login"
                variant="solid"
                className="font-bold text-white"
              >
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="/signup"
                variant="bordered"
                className="font-bold text-white"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        )}

        {userData && (
          <NavbarContent justify="end" className="font-mono">
            <NavbarItem className="hidden gap-6 lg:flex">
              <Button color="primary" variant="bordered">
                My Libary
              </Button>
              <Dropdown placement="bottom-start">
                <DropdownTrigger>
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: "https://i.pinimg.com/564x/b3/fe/a1/b3fea11c5b76a812c61ba43addfe05d1.jpg"
                    }}
                    className="transition-transform "
                    description="@tonyreichert"
                    name={userData.email}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat" className="text-white">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">Signed in as</p>
                    <p className="font-bold">@tonyreichert</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">Configurations</DropdownItem>
                  <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </NavbarContent>
        )}

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
