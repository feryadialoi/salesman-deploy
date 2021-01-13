import { Collection, Home, ShoppingCart, User } from "heroicons-react";
import { FC } from "react";
import { useHistory } from "react-router-dom";

interface FooterProps {
    //
}

export const Footer = (props: FooterProps) => {
    const history = useHistory();

    return (
        <div className="flex h-16 bg-purple-600 justify-center">
            <FooterItem
                title="Beranda"
                onClick={() => {
                    console.log("%c beranda", "color:yellow");
                    history.replace("/");
                }}
            >
                <Home color="white" />
            </FooterItem>
            <FooterItem
                title="Orderan"
                onClick={() => {
                    console.log("%c orderan", "color:yellow");
                    history.replace("/orders");
                }}
            >
                <ShoppingCart color="white" />
            </FooterItem>
            <FooterItem
                title="Pelanggan"
                onClick={() => {
                    console.log("%c customer", "color:yellow");
                    history.replace("/customers");
                }}
            >
                <User color="white" />
            </FooterItem>
            <FooterItem
                title="Catalog"
                onClick={() => {
                    console.log("%c catalog", "color:yellow");
                    history.replace("/catalogs");
                }}
            >
                <Collection color="white" />
            </FooterItem>
        </div>
    );
};

interface FooterItemProps {
    title?: string;
    onClick?: () => void;
}
const FooterItem: FC<FooterItemProps> = (props) => {
    return (
        <div
            onClick={props.onClick}
            className="
                flex
                flex-col
                flex-1
                bg-purple-600 
                hover:bg-purple-700 
                focus:outline-none 
                focus:ring-2 
                focus:ring-purple-600 
                focus:ring-opacity-50
                items-center
                justify-center
            "
        >
            {props.children}
            <div className="text-white text-center">{props.title}</div>
        </div>
    );
};
