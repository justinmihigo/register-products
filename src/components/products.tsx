
import { Link } from "react-router-dom"
const products = () => {
    return (

        <>
            <form>
                <div className="flex flex-row gap-x-[60px] justify-end py-5">
                    <div className="flex flex-row gap-x-[30px] items-center" >
                        <input type="text" className="border-[1px] p-2 rounded-xl" placeholder="Search products..." />
                        <button className="border-2 p-2 rounded-xl bg-[#2F3C7E] text-[#FBEAEB]" type="submit">Search</button>
                    </div>
                    <div className="flex flex-row gap-x-[30px] items-center">
                        <label htmlFor="sort">Sort by:</label>
                        <select id="sort" className="border-2 p-2 rounded-xl">
                            <option value="latest">Latest</option>
                            <option value="oldest">Oldest</option>
                            <option value="price-asc">Price (Lowest)</option>
                            <option value="price-desc">Price (Highest)</option>
                        </select>
                    </div>
                    <div className="flex flex-row gap-x-[30px] items-center">
                        <label htmlFor="category">Filter by Category:</label>
                        <select id="category" className="border-2 p-2 rounded-xl">
                            <option value="">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="books">Books</option>
                        </select>
                    </div>
                </div>
            </form>
            <div>
                <h2 className="text-xl font-bold py-5">Products</h2>
                <div className="grid grid-cols-3 gap-4">
                    <h3 className="text-lg font-bold">Product Name</h3>
                    <h3 className="text-lg font-bold">Product Category</h3>
                    <h3 className="text-lg font-bold">Product Price</h3>
                </div>
                <div className="flex flex-row justify-center py-10">
                    <div className="flex flex-col ">
                        <p>You don't have any product registered</p>
                        <Link to='/addProducts' className="border-2 p-2 rounded-xl bg-[#2F3C7E] text-[#FBEAEB]">Register a product</Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default products