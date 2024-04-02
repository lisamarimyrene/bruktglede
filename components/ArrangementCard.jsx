import { StoreTag } from "./StoreTag";
import Image from "next/image";
import test from "../app/assets/img/test.jpg";

export const ArrangementCard = ({ type, title, store, description, icons }) => {
    return (
        <main className="relative h-auto w-3/4 md:w-4/12 rounded-xl shadow-md py-5 px-4 mb-14 md:mx-2 ml-2">
            <div className="mb-3 relative">
                <Image src={test} alt="Test Image" width={500} height={300} />
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col items-center justify-center"
                    style={{
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                    }}
                >
                    <span className="text-6xl/6 font-bold font-jomhuria pt-2.5">
                        24
                    </span>
                    <span className="text-2xl max-h-8">JUN</span>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center">
                <p className="pb-3 text-sm md:text-base flex-grow font-semibold uppercase">
                    {type}
                </p>
                <StoreTag>{store}</StoreTag>
            </div>
            <h3 className="font-bold text-base pb-3 underline">{title}</h3>
            <div className="flex flex-col">
                {icons.map((Icon, index) => (
                    <div className="flex items-center gap-3" key={index}>
                        <Icon />
                        {description[index]}
                    </div>
                ))}
            </div>
        </main>
    );
};
