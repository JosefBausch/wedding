import PrimaryButton from './PrimaryButton';

export default function AcceptInvite() {
    return (
        <>
            <div className="my-8 w-full px-4 sm:my-12 md:my-16 lg:my-24">
                <div className="mx-auto flex max-w-4xl flex-col items-center justify-center md:flex-row">
                    <img
                        className="mb-6 w-full max-w-xs -rotate-3 shadow-xl sm:max-w-sm md:mb-0 md:mr-8 md:max-w-md lg:mr-12 lg:max-w-lg"
                        src="/storage/JosefAndRose.png"
                        alt="Josef and Rose looking out a window."
                    />
                    <div className="mx-auto max-w-4xl px-4 text-center md:px-0 md:text-left">
                        <h1 className="mb-2 inline-block rounded-xl px-4 py-2 text-xl backdrop-blur-md sm:text-2xl md:text-3xl lg:text-4xl">
                            <span className="block">
                                Join us for our wedding on
                            </span>
                        </h1>
                        <h1 className="mb-6 rounded-xl px-4 py-2 text-xl backdrop-blur-md sm:text-2xl md:inline-block md:text-4xl lg:text-5xl">
                            <span className="block">6/14/25</span>
                        </h1>
                        <PrimaryButton>Accept Invite</PrimaryButton>
                    </div>
                </div>
            </div>
        </>
    );
}
