// theme.ts
import { createTheme } from '@shopify/restyle';

const theme = createTheme({
  colors: {
    background: '#000000ff',  
    text: '#ffffffff',
    card: '#2f2f2fff',
    red: '#FF3B30',
    green: '#34C759',
    purple: '#AF52DE',
    input: '#1a1a1aff',
    border: '#515151ff',
    
    disabled: '#CCCCCC',
  },

  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },

  borderRadii: {
    s: 8,
    m: 12,
    l: 16,
    round: 9999,
  },

  textVariants: {
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'text',
    },
    heading: {
      fontSize: 20,
      fontWeight: '600',
      color: 'text',
    },
    body: {
      fontSize: 16,
      fontWeight: '400',
      color: 'text',
    },
    small: {
      fontSize: 12,
      color: 'text',
    },
    defaults: {
      fontSize: 16,
      fontWeight: '400',
      color: 'text',
    },
  },
});

export type Theme = typeof theme;
export default theme;