import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    yellow: {
      500: '#FFBA08',
    },
    blackAlpha: {
      800: '#47585B',
    },
    gray: {
      200: '#F5F8FA',
      300: '#DADADA',
      400: '#999999',
      
    },
  }
})