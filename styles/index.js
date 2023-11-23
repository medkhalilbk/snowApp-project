import { StyleSheet } from "react-native/types";

const mainColor = "#2D57A3";
const secondaryColor = "#0092D0";
const blackColor = "#212121";
const whiteColor = "#F5F5F5";
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
     backgroundColor:colors.main 
 }
});
