const getTheme = (isDarkMode: boolean) => ({
  primary: '#6229E8',
  secondary: '#03DAC6',
  background: isDarkMode ? '#121212' : '#F5F5F5',
  surface: isDarkMode ? '#1E1E1E' : '#FFFFFF',
  error: isDarkMode ? '#CF6679' : '#B00020',
  textPrimary: isDarkMode ? '#FFFFFF' : '#212121',
  textSecondary: isDarkMode ? '#B3B3B3' : '#757575',
  textOnPrimary: '#FFFFFF',
  textOnSecondary: '#000000',
  border: isDarkMode ? '#272727' : '#E0E0E0',
  inputBackground: isDarkMode ? '#2C2C2C' : '#F0F0F0',
});

export default getTheme;