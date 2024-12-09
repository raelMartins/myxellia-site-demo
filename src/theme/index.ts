/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({

    fonts: {
      body: 'var(--font-neue-haas-grotesk)',
    },
    styles: {
        global: {
            body: {
                fontFamily: 'var(--font-neue-haas-grotesk)',
            },
            h1: {
                fontFamily: 'var(--font-neue-haas-grotesk-display-pro)',
            },
            h2: {
                fontFamily: 'var(--font-neue-haas-grotesk-display-pro)',
            },
            h3: {
                fontFamily: 'var(--font-neue-haas-grotesk-display-pro)',
            },
            h4: {
                fontFamily: 'var(--font-neue-haas-grotesk-display-pro)',
            },
            h5: {
                fontFamily: 'var(--font-neue-haas-grotesk-display-pro)',
            },
            h6: {
                fontFamily: 'var(--font-neue-haas-grotesk-display-pro)',
            },
        }
    }

});