export interface IMenuItem {
    logo: string; // location of the image
    searchBox: boolean;
    userSignIn: boolean;
    cart: boolean;
    contact: string;
}

export interface IDropDownItem {
    pageName: string;
    link: string;
}