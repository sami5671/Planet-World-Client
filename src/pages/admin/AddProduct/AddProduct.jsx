import { GiFruitTree } from "react-icons/gi";
import Logo from "./../../../components/shared/logo/Logo";
import { Input } from "rizzui";
import { Select } from "rizzui";
import { useMemo, useRef, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import JoditEditor from "jodit-react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Radio, RadioGroup } from "rizzui";

const options = [
  { label: "Apple 🍎", value: "apple" },
  { label: "Banana 🍌", value: "banana" },
  { label: "Cherry 🍒", value: "cherry" },
];
const AddProduct = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [value, setValue] = useState(options[0]);
  const [radioValue, setRadioValue] = useState("apple");

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      autofocus: true,
      height: 300,
      placeholder: "Start typing here...",
    }),
    []
  );

  const handleImageChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImages((prevImages) => prevImages.concat(fileArray));
  };

  const renderPhotos = (source) => {
    if (source.length === 0) return null;

    return (
      <>
        {/* Large image */}
        <div className="mb-4 flex justify-center items-center mt-4">
          <div className="w-72 h-48 px-4 py-4 bg-slate-300 shadow-xl shadow-slate-400  rounded-xl overflow-hidden">
            <img
              src={source[0]}
              alt="Main Selected"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        {/* Smaller images */}
        <div className="grid grid-cols-6 gap-2">
          {source.map((photo, index) => (
            <div
              key={index}
              className="w-[85px] h-[85px] px-2 py-2 bg-slate-300 shadow-xl shadow-slate-400 rounded-xl overflow-hidden"
            >
              <img
                src={photo}
                alt={`Selected ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </>
    );
  };

  console.log(content);
  return (
    <>
      <section className="">
        <div className="">
          {/* header */}
          <div className="flex items-center justify-center">
            <Logo color={"text-lime-700"} />
          </div>
          {/* header */}
          <div className="flex items-center justify-between mt-4">
            <h1 className="text-primary-dashboardPrimaryTextColor font-bold text-xl flex items-center gap-2">
              Add New Product <GiFruitTree />
            </h1>
            <button className="bg-primary-dashboardPrimaryTextColor text-white px-4 py-2 rounded-full font-bold hover:bg-lime-500">
              Add Product
            </button>
          </div>

          {/* general and upload section */}
          <div className="flex justify-between lg:gap-6 mt-6">
            {/* general */}
            <div className="w-1/2 h-[520px] bg-slate-200 px-12 py-12 shadow-xl rounded-2xl">
              <h1 className="text-primary-dashboardPrimaryColor font-bold text-xl mb-4 rounded-2xl">
                General Information
              </h1>
              <Input
                label="Plant Name"
                placeholder="Enter your name"
                variant="outline"
                inputClassName="border-lime-500 bg-white opacity-80 focus:border-lime-600 focus:ring focus:ring-lime-600 rounded-md p-2"
                // inputClassName={`border-2 ${
                //   errors.name && touched.name
                //     ? "border-red-500"
                //     : "border-lime-500"
                // } bg-white opacity-80 focus:border-lime-600 focus:ring focus:ring-lime-600 rounded-md p-2`}
              />

              <div className="mt-6">
                <label className="font-bold" htmlFor="product description">
                  Product description
                </label>
                <JoditEditor
                  ref={editor}
                  value={content}
                  tabIndex={1}
                  onChange={(newContent) => setContent(newContent)}
                  config={config}
                />
              </div>
            </div>
            {/* photo upload */}
            <div className="w-1/2 h-[520px] bg-slate-200 px-12 py-12 shadow-xl rounded-2xl">
              <h1 className="text-xl text-primary-dashboardPrimaryTextColor font-bold mb-2 ">
                Upload Img
              </h1>

              <div className="gap-2">
                {renderPhotos(selectedImages)}
                {/* <div className="w-24 h-24 flex items-center justify-center border-2 border-lime-900 border-dotted rounded"></div> */}
              </div>
              <div className=" p-4 w-full m-auto rounded-lg">
                <div className="px-5 py-3 relative rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        type="file"
                        className="text-sm cursor-pointer w-36 hidden"
                        multiple={true}
                        onChange={handleImageChange}
                      />
                      <div
                        className="w-40 h-20 flex items-center justify-center border-dashed shadow-xl shadow-slate-400 border-2 border-lime-700 rounded cursor-pointer font-bold text-3xl text-lime-700"
                        // onClick={handlePlusClick}
                      >
                        <FaCirclePlus />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* general and upload section */}

          {/* pricing and stock */}

          <div className="">
            <div>
              <Input
                type="number"
                label="Previous Price"
                prefix={<CurrencyDollarIcon className="w-5" />}
                suffix=".00"
                placeholder="Enter your price"
              />
              <Input
                type="number"
                label="New Price"
                prefix={<CurrencyDollarIcon className="w-5" />}
                suffix=".00"
                placeholder="Enter your price"
              />
            </div>
            <div>
              <Input
                type="number"
                label="Stocks"
                placeholder="Enter your stock"
              />
            </div>
          </div>
          {/* pricing and stock */}

          {/* plant type and category */}
          <div className="">
            <div>
              <Select
                label="Select"
                options={options}
                value={value}
                onChange={setValue}
                clearable={value !== null}
                onClear={() => setValue(null)}
              />
              <RadioGroup
                value={radioValue}
                setValue={setRadioValue}
                className="flex gap-4"
              >
                <Radio label="Apple" value="apple" />
                <Radio label="Pear" value="pear" />
              </RadioGroup>
            </div>
            <div></div>
          </div>
          {/* pricing and stock */}
        </div>
      </section>
    </>
  );
};

export default AddProduct;
