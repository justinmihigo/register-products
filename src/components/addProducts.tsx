

const AddProducts = () => {
    return (
        <>
            <form>
                <div className="w-[80%] flex flex-col gap-y-6 m-auto">
                    <div>
                        <h1 className="text-xl py-5">Register a product</h1>
                        <div className="flex flex-row w-full gap-x-[60px] justify-center">
                            <div className="flex flex-col w-1/2 items-start gap-y-2">
                                <label htmlFor="productName"><p>Product name</p></label>
                                <input className="border-2 w-full p-2 rounded-xl" type="text" id="productName" placeholder="Enter product name" />
                            </div>
                            <div className="flex flex-col w-1/2 items-start gap-y-2">
                                <label htmlFor="brand"><p>Brand</p></label>
                                <input type="text" className="border-2 p-2 w-full rounded-xl" id="brand" placeholder="Enter Brand" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-[60px] justify-center">
                        <div className="flex flex-col w-1/2 items-start gap-y-2">
                            <label htmlFor="priceRange"><p>Price range</p></label>
                            <input type="text" className="border-2 w-full p-2 rounded-xl" id="priceRange" placeholder="Enter price range (e.g. 10-50)" />
                        </div>

                        <div className="flex flex-col items-start gap-y-2 w-1/2">
                            <label htmlFor="category">Category</label>
                            <select id="category" className="border-2 p-2 w-full rounded-xl">
                                <option value="">Select</option>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="books">Books</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-[60px]">
                        <div className="flex flex-col items-start gap-y-2 w-1/2">
                            <label htmlFor="quantity"><p>Quantity</p></label>
                            <input type="number" className="border-2 p-2 w-full rounded-xl" id="quantity" placeholder="Enter quantity" />
                            <div>
                                <label htmlFor="image"><p>Image </p></label>
                                <input type="file" id="image" className="border-2 p-2 rounded-xl" placeholder="Enter image URL" />
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-y-2 w-1/2">
                            <label htmlFor="description"><p>Description</p></label>
                            <textarea id="description" className="border-2 w-full p-2 rounded-xl" placeholder="Enter description" rows={4} cols={10}></textarea>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="p-4 w-1/2 rounded-xl bg-[#2F3C7E] text-[#FBEAEB]">Register a product</button>
                    </div>
                </div>

            </form>
        </>

    )
}

export default AddProducts