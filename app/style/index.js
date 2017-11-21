/**
 * Created by guoshuyu on 2017/11/7.
 */
import React, {StyleSheet, Dimensions, PixelRatio, Platform, StatusBar} from "react-native";
import * as constant from "./constant"

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
export const navBarHeight = (Platform.OS === 'ios') ? constant.iosnavHeaderHeight : constant.andrnavHeaderHeight;

export default StyleSheet.create({
    routerStyle: {
        //设置router的样式
        flex: 1,
        backgroundColor: constant.mainBackgroundColor,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,

    },
    navigationBar: {
        backgroundColor: constant.primaryColor,
        paddingTop: StatusBar.currentHeight,
        height: navBarHeight,
    },
    titleTextStyle:{
        color: constant.titleTextColor,
    },
    mainBgColor: {
        backgroundColor: constant.mainBackgroundColor
    },
    mainBox: {
        backgroundColor: constant.mainBackgroundColor,
        flex: 1
    },
    flex: {
        flex: 1,
    },
    flexDirectionRow: {
        flexDirection: 'row',
        flex: 1,
    },
    flexDirectionColumn: {
        flexDirection: "column",
        flex: 1,
    },
    flexDirectionRowNotFlex: {
        flexDirection: 'row',
    },
    flexDirectionColumnNotFlex: {
        flexDirection: "column",
    },
    justifyCenter: {
        justifyContent: "center"
    },
    centered: {
        justifyContent: "center",
        alignItems: "center"
    },
    centerV: {
        justifyContent: "center",
    },
    centerH: {
        alignItems: "center"
    },
    justifyBetween: {
        justifyContent: "space-between"
    },
    alignItemsEnd: {
        alignItems: "flex-end"
    },
    justifyEnd: {
        justifyContent: "flex-end"
    },
    welcomeText: {
        color: constant.primaryColor,
        fontSize: constant.largetTextSize,
        fontWeight: "bold",
        textAlign: "center"
    },
    smallTextWhite: {
        color: constant.TextColorWhite,
        fontSize: constant.smallTextSize
    },
    smallText: {
        color: constant.mainTextColor,
        fontSize: constant.smallTextSize
    },
    subLightSmallText: {
        color: constant.subLightTextColor,
        fontSize: constant.smallTextSize
    },
    subSmallText: {
        color: constant.subTextColor,
        fontSize: constant.smallTextSize
    },
    middleText: {
        color: constant.mainTextColor,
        fontSize: constant.middleTextWhite
    },
    normalText: {
        color: constant.mainTextColor,
        fontSize: constant.normalTextSize
    },
    subNormalText: {
        color: constant.subTextColor,
        fontSize: constant.normalTextSize
    },
    normalTextWhite: {
        color: constant.TextColorWhite,
        fontSize: constant.normalTextSize
    },
    middleTextWhite: {
        color: constant.TextColorWhite,
        fontSize: constant.middleTextWhite
    },

    largeText: {
        color: constant.mainTextColor,
        fontSize: constant.bigTextSize
    },
    largeTextWhite: {
        color: constant.TextColorWhite,
        fontSize: constant.bigTextSize
    },
    absoluteFull: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 999,
    },
    shadowCard: {
        shadowColor: constant.cardShadowColor,
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 2,
        backgroundColor: constant.cardBackgroundColor
    }


});