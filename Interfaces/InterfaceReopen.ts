export enum UserProfileThemes {
    DARK = "dark-theme",
    LIGHT = "light-theme"
}
export enum Fonts {
    TIMESNEWROMAN = "times-new-roman",
    ARIAL = "arial",
    CALIBRA = "calibra"
}
export enum LayoutView {
    LIST = "list-view",
    GRID = "grid-view"
}

interface IUserProfile {
    readonly theme: UserProfileThemes,
    fonts: Fonts,
    profilePhoto: boolean,
    isCommentsVisible: boolean,
    isLikeVisible: boolean,
    likes: number
}

interface IUserProfile {
    layouView: LayoutView
}

let userProfileSettings: IUserProfile = {
    theme: UserProfileThemes.DARK,
    fonts: Fonts.TIMESNEWROMAN,
    profilePhoto: true,
    isCommentsVisible: true,
    isLikeVisible: false,
    likes: 25,
    layouView: LayoutView.GRID
}

console.log(userProfileSettings);