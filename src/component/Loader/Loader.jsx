import { ScaleLoader } from "react-spinners";
const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <ScaleLoader></ScaleLoader>
        </div>
    );
};

export default Loader;