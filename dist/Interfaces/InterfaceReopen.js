"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutView = exports.Fonts = exports.UserProfileThemes = void 0;
var UserProfileThemes;
(function (UserProfileThemes) {
    UserProfileThemes["DARK"] = "dark-theme";
    UserProfileThemes["LIGHT"] = "light-theme";
})(UserProfileThemes || (exports.UserProfileThemes = UserProfileThemes = {}));
var Fonts;
(function (Fonts) {
    Fonts["TIMESNEWROMAN"] = "times-new-roman";
    Fonts["ARIAL"] = "arial";
    Fonts["CALIBRA"] = "calibra";
})(Fonts || (exports.Fonts = Fonts = {}));
var LayoutView;
(function (LayoutView) {
    LayoutView["LIST"] = "list-view";
    LayoutView["GRID"] = "grid-view";
})(LayoutView || (exports.LayoutView = LayoutView = {}));
let userProfileSettings = {
    theme: UserProfileThemes.DARK,
    fonts: Fonts.TIMESNEWROMAN,
    profilePhoto: true,
    isCommentsVisible: true,
    isLikeVisible: false,
    likes: 25,
    layouView: LayoutView.GRID
};
console.log(userProfileSettings);
//# sourceMappingURL=InterfaceReopen.js.map