import toast from "react-hot-toast";

const AddProductForm = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const modelName = form.modelName.value;
    const imageURL = form.imageURL.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const short_description = form.short_description.value;

    const productData = {
      modelName,
      imageURL,
      brandName,
      type,
      price,
      ratings,
      short_description,
    };
    console.log("Products data: ", productData);
    
    toast.success("Product added successfully!");
    fetch('http://localhost:3000/products',{
        method: 'POST',
        headers: {
            'content-type': 'application/json',

        },
        body: JSON.stringify(productData)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        
        form.reset();
    })

  };
  return (
    <div>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:pb-12 space-y-4">
                <img src="https://cdn.dribbble.com/users/1830388/screenshots/6142489/800x600.gif" alt="gif animated"className="w-full" />
              <h2 className="text-3xl">
               Here you can add a brand new model of car with appropriate working car photo URL (*leave URL empty if no URL). Make sure to select all the brand and model 
              </h2>
              <div className="mt-8">
                <p href="" className="text-2xl font-bold text-pink-600">
                  0151 475 4450 456
                </p>

                <address className="mt-2 not-italic">
                  282 BLOCK C,Basundhara city, Dhaka 58517
                </address>
              </div>
            </div>
            {/* Form div */}
            <div className="rounded-lg glass p-8 shadow-lg lg:col-span-3 lg:p-12 bg-base-300">
              <form onSubmit={handleAddProduct} className="space-y-6">
                <h2 className="text-center pb-10 text-2xl">ADD NEW MODEL</h2>
                <div>
                  <label className="sr-only" htmlFor="modelName">
                    Model Name
                  </label>
                  <input
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
                  <input
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
                      name="type"
                      id="type"
                      className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm h-10 pl-4 "
                    >
                      <option value="">Select Type</option>
                      <option value="Sports Car">Sports Car</option>
                      <option value="Sports Car">Super Car</option>
                      <option value="SUV">SUV</option>
                      <option value="Sedan">Sedan</option>
                      <option value="Hatchback">Hatchback</option>
                      <option value="Coupe">Coupe</option>
                      <option value="Pickup Truck">Pickup Truck</option>
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
                    <input
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
                  <label className="sr-only" htmlFor="short_description">
                    Image URL
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Short Details"
                    type="text"
                    id="short_description"
                    name="short_description"
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg px-5 py-3 font-medium  sm:w-auto btn btn-primary"
                  >
                    Add product
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

export default AddProductForm;
