"use client";

// React
import { ReactElement, ReactNode, useCallback, useRef, useState } from "react";

// MUI Core Components
import Slide from "@mui/material/Slide";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MuiLink from "@mui/material/Link";
import Divider from "@mui/material/Divider";

// MUI Hooks
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useColorScheme } from "@mui/material/styles";

// Material UI Icon
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import HelpIcon from "@mui/icons-material/Help";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

// My Components
import MobileDrawer from "./MobileDrawer";
import Button from "@mui/material/Button";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useScrollSpy } from "@/hook/useScrollSpy";

interface Props {
  children?: ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children as ReactElement}
    </Slide>
  );
}

const drawerWidth = 240;
const navItems: { name: string; icon: ReactNode }[] = [
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    name: "Features",
    icon: <ChecklistOutlinedIcon />,
  },
  {
    name: "Download",
    icon: <CloudDownloadOutlinedIcon />,
  },
  {
    name: "FAQs",
    icon: <HelpIcon />,
  },
  {
    name: "Contact",
    icon: <ContactMailOutlinedIcon />,
  },
];

export default function Header(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeId = useScrollSpy(navItems.map((item) => item.name));

  const { mode, systemMode, setMode } = useColorScheme();
  const headerRef = useRef<HTMLDivElement>(null);

  // toggle Dark Theme
  const toggleDarkTheme = useCallback(() => {
    const baseMode = mode ?? systemMode;
    if (baseMode) {
      const currMode = baseMode === "dark" ? "light" : "dark";
      setMode(currMode);
    }
  }, [mode, systemMode, setMode]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // GSAP Animation
  useGSAP(() => {
    if (!headerRef.current) return;

    const tl = gsap.timeline();
    tl.to(".hidden-before-anim", {
      opacity: 1,
      visibility: "visible",
      duration: 0,
      ease: "power3.out",
    }).from(headerRef.current, {
      y: -120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <Box className="hidden-before-anim">
      <HideOnScroll {...props}>
        <AppBar
          sx={{ bgcolor: "background.default", color: "inherit" }}
          elevation={0}
          ref={headerRef}
        >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              className="flex items-center justify-between relative"
              variant="dense"
            >
              {/* Logo */}
              <Box>
                <svg width="148" height="25" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z"
                      fill={mode === "dark" ? "#FFF" : "#242A45"}
                      fillRule="nonzero"
                    />
                    <g>
                      <circle fill="#5267DF" cx="12.5" cy="12.5" r="12.5" />
                      <path
                        d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z"
                        fill="#FFF"
                      />
                    </g>
                  </g>
                </svg>
              </Box>

              {/* Open Drawer Navigation Icons */}
              <Box className="block md:hidden -order-1">
                <Tooltip title="Open Drawer Navigation" enterDelay={500}>
                  <IconButton
                    aria-label="Open Drawer Navigation"
                    onClick={handleDrawerToggle}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* DeskTop Navigation */}
              <Box component="nav" aria-label="Main Navigation" className="hidden md:flex">
                <List sx={{ display: "flex" }}>
                  {navItems.map(({ name }, index) => (
                    <ListItem key={index}>
                      <MuiLink
                        // component={Link}
                        aria-current={name === activeId ? "page" : undefined}
                        href={`#${name} `}
                        underline="none"
                        sx={{
                          fontWeight: 700,
                          transition: "color ease-in-out 300ms",
                          color: name === activeId ? "primary.main" : "inherit",
                          "&:after":
                            name === activeId
                              ? {
                                  content: '""',
                                  position: "absolute",
                                  left: 0,
                                  bottom: -9,
                                  width: "100%",
                                  height: "2px",
                                  bgcolor: "primary.main",
                                }
                              : {},
                          "&:hover": {
                            color: name === activeId ? "" : "primary.main",
                          },
                        }}
                      >
                        {name}
                      </MuiLink>
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Theme Toggle & Login Bottun*/}
              <Box className="flex items-center justify-center gap-2">
                <Tooltip
                  title={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  enterDelay={500}
                >
                  <IconButton
                    size="large"
                    color="inherit"
                    onClick={() => toggleDarkTheme()}
                    aria-label={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    aria-pressed={mode === "dark"}
                  >
                    {mode === "dark" ? (
                      <LightModeOutlinedIcon fontSize="medium" />
                    ) : (
                      <DarkModeOutlinedIcon fontSize="medium" />
                    )}
                  </IconButton>
                </Tooltip>

                <Box className="hidden md:block">
                  <Tooltip title="Login" enterDelay={500}>
                    <Button size="small" variant="contained" color="secondary">
                      Login
                    </Button>
                  </Tooltip>
                </Box>
              </Box>
            </Toolbar>
          </Container>

          <Divider />
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer Navigation  */}
      <Box component="nav" aria-label="Main Navigation">
        <MobileDrawer {...{ drawerWidth, handleDrawerToggle, mobileOpen, navItems }} />
      </Box>

      {/* Add space below header */}
      <Toolbar />
    </Box>
  );
}
