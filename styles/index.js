import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
export const mainColor = "#1DA1F2";
const secondaryColor = "#0092D0";
const blackColor = "#32363F";
export const whiteColor = "#F5F5F5";
const redColor = "#A13311";
const greenColor = "#008A63";
const yellowColor = "#008A63";
const { width, height } = Dimensions.get("window");
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
  chartText: {
    color: "rgba(29, 161, 242, 1)",
    fontWeight:"600"
  },

  splashContainer: {
    backgroundColor: colors.main,
  },
  chartContainer: {
    width: width,
  },
  loginFormContainer: {
    minWidth: width,
    alignItems: "center",
  },
  defaultContainer: {
    flex: 1,
    backgroundColor: blackColor,
  },
  containerLogin: {
    flex: 1,
    backgroundColor: blackColor,
  },
  imageLogin: {
    width: 250,
    height: 250,
    marginTop: "30%",
    marginBottom: "5%",
  },
  emailInput: {
    height: 40,
    width: 280,
    marginBottom: "3%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    color: colors.white,
    backgroundColor: "#2B2E36",
  },
  containerOfPasswordInput: {
    flexDirection: "row",
    alignItems: "center",
    width: 280,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "transparent",
    backgroundColor: "#2B2E36",
    paddingLeft: 10,
  },
  textInForgetPassword: {
    color: colors.main,
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Poppins",
    textAlign: "center",
  },
  subtitleInForgetPassword: {
    textAlign: "center",
    color: colors.white,
    marginBottom: "3%",
    fontSize: 12,
    margin: 12,
  },
  buttonSeConnecter: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 4,
    backgroundColor: mainColor,
  },
  textSeConnecter: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    color: "white",
  },
  textInResetPassword: {
    color: colors.main,
    fontSize: 20,
    fontWeight: "400",
    fontFamily: "Poppins",
    alignSelf: "flex-start",
    margin: 13,
  },
  listItem: {
    marginLeft: 14,
    color: "#757575",
  },
  activeItem: {
    marginLeft: 14,
    color: colors.white,
  },
  containerOfList: {
    alignSelf: "flex-start",
    marginLeft: 14,
    marginBottom: 14,
  },
  listOfItems: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.white,
  },
  ResetPassword: {
    flexDirection: "row",
  },
});
