import { StyleSheet } from "react-native";

export const mainColor = "#2D57A3";
const secondaryColor = "#0092D0";
const blackColor = "#212121";
export const whiteColor = "#F5F5F5";
const redColor = "#A13311";
const greenColor = "#008A63";
const yellowColor = "#008A63";

const colors = {
  main: mainColor,
  secondary: secondaryColor,
  black: blackColor,
  white: whiteColor,
  red: redColor,
  green: greenColor,
  yellow: yellowColor,
};

export const styles = StyleSheet.create({
  splashContainer: {
    backgroundColor: colors.main
  },
  containerLogin: {
    flex: 1,
    backgroundColor: whiteColor,
    alignItems: 'center',
  },
  imageLogin: {
    width: 230,
    height: 250,
    marginTop: '30%',
    marginBottom: '5%'
  },
  emailInput: {
    height: 40,
    width: 280,
    marginBottom: '8%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 16,
    borderColor: '#AFAFAF'
  },
  containerOfPasswordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    height: 40,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#AFAFAF',
    paddingLeft: 10
  }
});
