import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    yellow: {
      500: 'FFBA08',
    },
    blackAlpha: {
      800: '#47585B'
    }
  }
})