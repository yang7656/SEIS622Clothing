export interface IMenuItem {
    logo: string; // location of the image
    dropdownMenu: IddMenu[];
    searchBox: boolean;
    userSignin: boolean;
    userAccount: boolean;
    cart: boolean;
    contact: string;
}

export interface IddMenu {
    title: string;
    link: string;
}