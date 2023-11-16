export interface IMenuItem {
    logo: string; // location of the image
    dropdownMenu: IddMenu[];
    searchBox: boolean;
    userSignIn: boolean;
    cart: boolean;
    contact: string;
}

export interface IddMenu {
    title: string;
    link: string;
}