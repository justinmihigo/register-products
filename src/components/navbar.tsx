import { Link } from "react-router-dom"
const navbar = () => {
  return (
    <nav className="flex justify-between p-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
      </div>
      <ul className="flex">
        <li className="ml-4">
          <Link to='/' className="text-gray-600 hover:text-gray-800">Home</Link>
        </li>
        <li className="ml-4">
          <Link to='/about'  className="text-gray-600 hover:text-gray-800">About</Link>
        </li>
        <li className="ml-4">
          <Link to='addProducts'className="text-gray-600 hover:text-gray-800">Products</Link>
        </li>
      </ul>
    </nav>
  )
}

export default navbar