import { FC, ReactChild } from "react";
import { ButtonClose } from "./ButtonClose";

interface ModalProps {
    title?: string;
    visible?: boolean;
    content?: ReactChild;
    onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    return props.visible ? (
        <div
            className="
                bg-opacity-80
                absolute
                w-screen
                h-screen
                px-4
                py-8
                bg-gray-900
                flex
                flex-col
                justify-center
            "
        >
            <div
                className="
                    bg-white
                    flex
                    flex-col
                    h-full
                    rounded
                "
            >
                {/* header start */}
                <div
                    className="
                        flex
                        h8
                        items-center
                        border-b-2
                    "
                >
                    <div className="flex-1 px-2">{props.title}</div>
                    <div className="p-4">
                        <ButtonClose color="purple" onClick={props.onClose} />
                    </div>
                </div>
                {/* header end */}

                {/* content start */}
                <div
                    className="                        
                        flex flex-col flex-1 overflow-y-auto p-4
                    "
                >
                    {props.content}
                </div>
                {/* content end */}

                {/* footer start */}
                {/* <div className="h-12 bg-purple-500"><div>footer</div></div> */}
                {/* footer end */}
            </div>
        </div>
    ) : (
        <div></div>
    );
};
