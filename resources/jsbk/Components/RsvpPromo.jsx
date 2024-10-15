import { Link } from '@inertiajs/react';
export default function RsvpPromo() {
    return (
        <>
            <div className="w-full flex items-center justify-center break:flex-col">
                <div className="w-1/2 flex break:w-full break:justify-center">
                    <img className="w-2/3 ml-auto mr-5 rounded-3xl break:m-0" src="images/josefrose.png" alt="Rose with her hand on Josef's shoulder as they look out a window." />
                </div>
                <div className="w-1/2 flex justify-center break:w-full break:mt-5">
                    <div className="mr-auto ml-5 break:m-0">
                        <h1 className="text-3xl font-pus mb-5">Join us for our wedding on:</h1>
                        <p className="text-2xl mt-5 font-medium break:text-center">June 14<sup>th</sup>, 2025</p>
                    </div>
                </div>
            </div>
        </>
    );
}
