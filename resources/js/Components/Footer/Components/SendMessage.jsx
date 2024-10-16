export default function SendMessage() {
    return (
        <>
            <form>
                <textarea
                    id="nice-message"
                    rows="3"
                    className="max-h-24 min-h-24 w-full rounded-lg border px-3 py-2 text-base text-gray-700 shadow-md focus:outline-none"
                    placeholder="A friendly message to the couple..."
                    style={{ resize: 'none' }}
                ></textarea>
                <button
                    type="submit"
                    className="w-full rounded-lg bg-rose-300 px-4 py-2 text-lg font-medium text-white shadow-md transition duration-300 hover:bg-rose-400 hover:shadow-lg"
                >
                    Send <i className="fa-regular fa-envelope ml-2"></i>
                </button>
            </form>
        </>
    );
}
