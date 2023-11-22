export interface IMenuItem {
    logo: string; // location of the image
    dropdownMenu: IDropDownItem[];
    searchBox: boolean;
    userSignIn: boolean;
    cart: boolean;
    contact: string;
}

export interface IDropDownItem {
    pageName: string;
    link: string;
}