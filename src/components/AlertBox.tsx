import { FC, ReactChild } from "react";
import { Button } from "./Button";

interface AlertBoxProps {
    title?: string;
    visible?: boolean;
    content?: ReactChild;
    onClose?: () => void;
}

export const AlertBox: FC<AlertBoxProps> = (props) => {
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
                items-center
            "
        >
            <div
                className="
                    w-64
                    max-w-xs
                    bg-white
                    flex
                    flex-col
                    rounded
                "
            >
                {/* header start */}
                <div
                    className="
                        flex
                        flex-col
                        h-12
                        items-center
                        justify-center
                        border-b-2
                    "
                >
                    <div className="font-medium">{props.title || "Alert Box"}</div>
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
                <div className="flex flex-col border-t-2 p-3">
                    <Button title="Tutup" onClick={props.onClose} />
                </div>
                {/* footer end */}
            </div>
        </div>
    ) : (
        <div></div>
    );
};
