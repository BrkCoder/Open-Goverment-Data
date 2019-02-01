import React from 'react';
export const toggle = {
    on: true,
    off: false
}
export const SidemenuContext = React.createContext(
  toggle.off // default value
);