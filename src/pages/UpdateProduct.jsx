import { BiArrowBack } from "react-icons/bi";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const data = useLoaderData();
  const productData = data[0]
  console.log(productData);
const navigate = useNavigate()
  const {
    _id,
    brandName,
    imageURL,
    modelName,
    price,
    ratings,
    short_description,
    type
  } = productData;
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const brandName = form.brandName.value;
    const imageURL = form.imageURL.value;
    const modelName = form.modelName.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const short_description = form.short_description.value;
    const type = form.type.value;

    const updatedData = {
      brandName,
      imageURL,
      modelName,
      price,
      ratings,
      short_description,
      type
    };

    console.log("Updated Data = ", updatedData);

    fetch(`https://abds-wheels-world-server.vercel.app/products/single/${_id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',

        },
        body: JSON.stringify(updatedData)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Updated Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/')
    })
  };
  return (
    <div>
      <Link to={"/"}>
        <button className="flex items-center gap-3 text-shadow shadow-slate-900/50 font-semibold pl-[5%] my-6">
          <BiArrowBack /> Back to home
        </button>
      </Link>
      <section className="sm:w-[80%] mx-auto my-10">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:pb-12 space-y-4">
                <img src="https://cdn.dribbble.com/users/330915/screenshots/9148258/5_dribbble.gif" alt="gif animated"className="w-full" />
              <h2 className="text-3xl">
                Update Your Car Details
              </h2>
             <p>You can update every sort of data available in the car ! make sure to provide a workable url </p>
            </div>
            {/* Form div */}
            <div className="rounded-lg p-8 shadow-lg  lg:p-12 bg-[url('/images/endless-constellation.png')] text-black glass lg:col-span-3 bg-base-300">
              <form onSubmit={handleUpdateProduct} className="space-y-6 lg:space-y-9 ">
                <h2 className="text-center text-white pb-10 text-2xl">UPDATE</h2>
                <div>
                  <label className="sr-only" htmlFor="modelName">
                    Model Name
                  </label>
                  <input defaultValue={modelName}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Model Name"
                    type="text"
                    id="modelName"
                    name="modelName"
                    required
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="imageURL">
                    Image URL
                  </label>
                  <input defaultValue={imageURL}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Image URL"
                    type="text"
                    id="imageURL"
                    name="imageURL"
                  />
                </div>

               
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="">
                    <select
                      defaultValue={brandName}
                      required
                      name="brandName"
                      id="brandName"
                      className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm h-10 pl-4 "
                    >
                      <option value="">Select Brand Name</option>
                      <option value="BMW">BMW</option>
                      <option value="Lamborghini">Lamborghini</option>
                      <option value="Ford">Ford</option>
                      <option value="Mercedes-Benz">Mercedes-Benz</option>
                      <option value="Tesla">Tesla</option>
                      <option value="Toyota">Toyota</option>
                    </select>
                  </div>

                  <div className="">
                    <select
                        defaultValue={type}
                      name="type"
                      id="type"
                      required
                      className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm h-10 pl-4 "
                    >
                      <option value="">Select Type</option>
                      <option value="Sports Car">Sports Car</option>
                      <option value="SUV">SUV</option>
                      <option value="Sedan">Sedan</option>
                      <option value="Hatchback">Hatchback</option>
                      <option value="Coupe">Coupe</option>
                      <option value="Roadster">Roadster</option>
                      <option value="Luxury car">Luxury car</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="price">
                      Price
                    </label>
                    <input defaultValue={price}
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Price"
                      type="number"
                      id="price"
                      min="0"
                      required
                    />
                  </div>

                  <div className="pt-0">
                  
                  <select
                      defaultValue={ratings}
                      name="ratings"
                      id="ratings"
                      className=" w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm h-10 sm:h-full pl-4 "
                    >
                      <option value="">Ratings</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="1.5">1.5</option>
                      <option value="2">2</option>
                      <option value="2.5">2.5</option>
                      <option value="3">3</option>
                      <option value="3.5">3.5</option>
                      <option value="4">4</option>
                      <option value="4.5">4.5</option>
                      <option value="5">5</option>
                     
                    </select>
                  </div>
                </div>
                <div>
                
                  <input defaultValue={short_description}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    required
                    placeholder="Short Details"
                    type="text"
                    id="short_description"
                    name="short_description"
                  />
                </div>
                <div className="mt-4 mx-auto">
                  <button
                    type="submit"
                    className=" w-full rounded-lg px-5 py-3 font-medium  sm:w-full btn btn-accent"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
            </div>
      
      </div>
      </section>
    </div>
  );
};

export default UpdateProduct;
