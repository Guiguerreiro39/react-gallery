import React, { useState, useEffect } from "react";
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/imageSearch";

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        fetch(
            `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=${type}&pretty=true`
        )
            .then((res) => res.json())
            .then((data) => {
                setImages(data.hits);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, [term, type]);

    return (
        <div className="container m-auto">
            <ImageSearch
                searchText={(text) => {
                    setTerm(text);
                }}
                searchType={(type) => setType(type)}
            />

            {!isLoading && images.length === 0 && (
                <h1 className="text-5xl text-center mx-auto my-20">
                    No Images Found
                </h1>
            )}

            {isLoading ? (
                <h1 className="text-6xl text-center mx-auto my-20">
                    Loading..
                </h1>
            ) : (
                <div className="grid grid-cols-3 gap-4">
                    {images.map((image) => (
                        <ImageCard key={image.id} image={image} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
