import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { darkThemes } from "@/theme";
import { Box, Fab, ThemeProvider, Tooltip } from "@mui/material";
import ProductsProvider from "@/components/context/productscontext";
import ResponsiveAppBar from "@/components/Navbar/ResponsiveAppBar";
import { Footer } from "@/components/Footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { BottomAppBar } from "@/components/NavbarBotoon";
import ScrollBack from "@/components/ScrollBack/ScrollBack";

import AuthProvider from "@/components/nextauthProvder/AuthProvider";
const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});
export const metadata: Metadata = {
  title: "App shop",
  description: "Generated by create next app",
  icons: { icon: "/images/LogoShop.svg" },
};

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}
export default function RootLayout({
  children,
  props,
}: {
  children: React.ReactNode;
  props: Props;
}) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <AuthProvider>
          <ThemeProvider theme={darkThemes}>
            <ProductsProvider>
              <Box id="back-to-top-anchor" />
              <ResponsiveAppBar />
              {children}
              <Footer />
              <BottomAppBar />
              <ScrollBack {...props}>
                <Tooltip title="scroll to top">
                  <Fab
                    size="medium"
                    aria-label="scroll back to top"
                    sx={{
                      bgcolor: "#bdbdbd",
                      "&:hover": { bgcolor: "#e0e0e0" },
                      zIndex: 3,
                    }}
                  >
                    <KeyboardArrowUpIcon fontSize="large" />
                  </Fab>
                </Tooltip>
              </ScrollBack>
            </ProductsProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
