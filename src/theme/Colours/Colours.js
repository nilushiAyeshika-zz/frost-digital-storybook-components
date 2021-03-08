const createPrimaryPalette = (normal, hovered, pressed, disabled) => ({ normal, hovered, pressed, disabled });

const createShadowColourSet = (normal, hovered, pressed) => ({ normal, hovered, pressed });

const PrimaryA = createPrimaryPalette('#158BEA', '#0257D7', '#00409F', '#B9DCF9', '#E9EFFF');

const PrimaryB = createPrimaryPalette('#0BA360', '#06844C', '#007147', '#B6E3CF', '#E6F3ED');

const Danger = createPrimaryPalette('#DE1E17', '#CF100C', '#B40101', '#F5BBB9', '#FAE7E7');

const Auxiliary = {
  navigation: '#001932',
  shadow: '#001932',
  successForeground: '#007147',
  successBackground: '#E6F3ED',
  dangerForeground: '#007147',
  dangerBackground: '#FAE7E7',
};

const Typography = {
  title: '#222222',
  active: '#4C4C4C',
  input: '#4C4C4C',
  system: '#6B6B6B',
  label: '#6B6B6B',
  disabled: '#BBBBBB',
  prompt: '#BBBBBB',
  light: '#FFFFFF',
};

const Border = {
  light: '#ced4da',
};

const Backgrounds = {
  white: '#FFFFFF',
  page: '#F9F9F9',
  button: '#F7F7F7',
  field: '#F7F7F7',
  row: '#F7F7F7',
  pageHeader: '#EFEFF1',
  tooltip: '#4C4C4C',
  rangeInput: "#ced4da",
  disabled: '#cccccc',
};

const Shadows = {
  regular: createShadowColourSet('rgba(0, 22, 99, 0.12)', 'rgba(0, 22, 99, 0.24)', 'rgba(0, 22, 99, 0.24)'),
  inverse: createShadowColourSet('rgba(229, 232, 235, 0.3)', 'rgba(229, 232, 235, 0.36)', 'rgba(229, 232, 235, 0.36)'),
};
 
 /**
  * Borders colour palette
  * @type {ColourPaletteBorders}
  */
 const Borders = {
   light: '#D1D4D8',
   dark: '#C3C6CA',
 };
 
 const Colours = {
   PrimaryA,
   PrimaryB,
   Danger,
 
   Auxiliary,
 
   Typography,
   Borders,
   Backgrounds,
   Shadows,

   Border,
 };
 
 export default Colours;
 