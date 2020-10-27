import React, { useState } from "react";

const ImageSearch = ({ searchText, searchType }) => {
    const [text, setText] = useState("");
    const [type, setType] = useState("all");
    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
        searchType(type);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form
                onSubmit={onSubmit}
                className="w-full max-w-sm flex items-end"
            >
                <div className="relative mx-5">
                    <select
                        className="block appearance-none w-full bg-teal-500 border border-teal-200 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-500 focus:text-teal-700"
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="photo">Photo</option>
                        <option value="illustration">Illustration</option>
                        <option value="vector">Vector</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                    <input
                        type="text"
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2  focus:outline-none"
                        placeholder="Search Images.."
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button
                        className="focus:outline-none flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ImageSearch;
