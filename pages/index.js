import { useState, useEffect } from "react";
import { RiEditBoxLine, RiDeleteBin6Fill } from "react-icons/ri";
import { MdOutlineLocalShipping, MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { PiClockCountdownBold } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import Layout from "./components/layout";

const Home = () => {

  const [products, setProducts] = useState([
    {id: 1, productcode: "P001", productimage: "/products/man_blue_check_shirt.jpg", productname: "Blue Check Shirt", price: 25,},
    {id: 2, productcode: "P002", productimage: "/products/man_casual_black_suit.jpg", productname: "Casual Black Suit", price: 48,},
    {id: 3, productcode: "P003", productimage: "/products/man_dark_gray_half_sleeve.jpg", productname: "Dark Gray Half Sleeve", price: 15,},
    {id: 4, productcode: "P004", productimage: "/products/man_white_b_half_sleeve.jpg", productname: "White Half Sleeve", price: 20,},
    {id: 5, productcode: "P005", productimage: "/products/uni_black_705_full_sleeve.jpg", productname: "Black Full Sleeve", price: 30,},
    {id: 6, productcode: "P006", productimage: "/products/uni_blue_half_sleeve.jpg", productname: "Blue Half Sleeve", price: 20,},
    {id: 7, productcode: "P007", productimage: "/products/uni_cyan_half_sleeve.jpg", productname: "Cyan Half Sleeve", price: 21,},
    {id: 8, productcode: "P008", productimage: "/products/uni_solid_red_half_sleeve.jpg", productname: "Solid Red Half Sleeve", price: 22,},
    {id: 9, productcode: "P009", productimage: "/products/woman_animal_prints_dress.jpg", productname: "Animal Prints Dress", price: 35,},
    {id: 10, productcode: "P010", productimage: "/products/woman_blue_ocean_color_dress_floral_pattern.jpg", productname: "Blue Ocean Color Dress", price: 35,},
    {id: 11, productcode: "P011", productimage: "/products/woman_green_dress.jpg", productname: "Green Modern Dress", price: 32,},
    {id: 12, productcode: "P012", productimage: "/products/woman_in_floral_pattern_dress_with_flowers.jpg", productname: "Floral Pattern Dress", price: 34,},
    {id: 13, productcode: "P013", productimage: "/products/woman_indian_traditional_dress.jpg", productname: "Indian Traditional Dress", price: 41,},
    {id: 14, productcode: "P014", productimage: "/products/woman_pink_skirt_with_floral_print_top.jpg", productname: "Pink Skirt with Floral Print Top", price: 38,},
    {id: 15, productcode: "P015", productimage: "/products/woman_yellow_dress.jpg", productname: "Yellow Dress", price: 30,},
  ]);

  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
    setTotal(parseFloat(((cart.reduce((acc, item) => acc + item.total, 0)) + (cart.reduce((acc, item) => acc + item.total, 0) * 0.01) + 6 - 10).toFixed(2)));
    } else {
      setTotal(0);
    }
  }, [cart]);

  const handleAddToCart = (product) => {
    if (cart.length > 0) {
      let sameitem = cart.find((item) => item.id === product.id);
      if (sameitem) {
        let newcart = cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1, total: item.total + item.price };
          }
          return item;
        });
        setCart(newcart);
      } else {
        const newitem = { ...product, quantity: 1, total: product.price };
        setCart([...cart, newitem]);
      }
    } else {
      const newitem = { ...product, quantity: 1, total: product.price };
      setCart([...cart, newitem]);
    }
  };

  const handleRemoveFromCart = (id) => {
    let newcart = cart.filter((item) => item.id !== id);
    setCart(newcart);
  };

  const handleIncreaseQuantity = (id) => {
    let newcart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1, total: item.total + item.price };
      }
      return item;
    });
    setCart(newcart);
  };

  const handleDecreaseQuantity = (id) => {
    let newcart = cart.map((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1, total: item.total - item.price };
        } else {
          return item;
        }
      }
      return item;
    });
    setCart(newcart);
  };



  return (
    <>
      <Layout title="Home - POS">
        <div className="flex max-[980px]:flex-col-reverse w-full h-fit">
          <div className="flex flex-col w-full min-[981px]:w-[45%] h-fit">
            <div className="hidden min-[1301px]:flex w-full h-fit pl-[60px] pr-3 py-2 gap-4 font-sans font-[600] text-[14px] leading-5">
              <button className="flex px-3 py-2 bg-blue-50">
                <span className="flex items-center w-fit h-fit text-[#5C6AC4]"><RiEditBoxLine className="inline w-5 h-5 mr-2" />Note</span>
              </button>
              <button className="flex px-3 py-2 bg-blue-50">
                <span className="flex items-center w-fit h-fit text-[#5C6AC4]"><MdOutlineLocalShipping className="inline w-5 h-5 mr-2" />Shipping</span>
              </button>
              <button className="flex px-3 py-2 bg-blue-50">
                <span className="flex items-center w-fit h-fit text-[#5C6AC4]"><PiClockCountdownBold className="inline w-5 h-5 mr-2" />Hold Orders</span>
              </button>
              <button className="flex px-3 py-2 bg-blue-50">
                <span className="flex items-center w-fit h-fit text-[#5C6AC4]"><MdAddCircle className="inline w-5 h-5 mr-2" />New Item</span>
              </button>
            </div>
            <div className="flex flex-col w-full h-fit px-2 py-3 border-r max-[1300px]:mt-[40px] mt-4 border-gray-300 gap-2">
              <table className="w-full h-fit">
                <tbody className="w-full h-fit">
                  {
                    cart.length > 0 ?
                      cart.map((cartitem, index) => (
                        <tr key={`c_${index}`} className="flex max-[500px]:flex-wrap w-full h-fit border border-gray-200">
                          <td className="w-[40%] h-fit font-sans font-[600] text-[15px] leading-5 text-slate-500 truncate text-left px-1 py-2">{cartitem.productname}</td>
                          <td className="w-[12%] h-fit font-sans font-[600] text-[15px] leading-5 text-slate-500 text-center px-1 py-2">{`$${cartitem.price}`}</td>
                          <td className="w-[30%] h-fit font-sans font-[600] text-[15px] leading-5 text-slate-500 text-center px-1 py-2">
                            <div className="flex w-full h-fit items-center justify-center gap-3">
                              <MdRemoveCircle onClick={() => handleDecreaseQuantity(cartitem.id)} className="w-6 h-6 text-slate-500 hover:text-slate-400 cursor-pointer" />
                              {cartitem.quantity}
                              <MdAddCircle onClick={() => handleIncreaseQuantity(cartitem.id)} className="w-6 h-6 text-slate-500 hover:text-slate-400 cursor-pointer" />
                            </div>
                          </td>
                          <td className="w-[13%] h-fit font-sans font-[600] text-[15px] leading-5 text-slate-500 text-center px-1 py-2">{`$${cartitem.total}`}</td>
                          <td className="w-[7%] h-fit px-1 py-2">
                            <RiDeleteBin6Fill onClick={() => handleRemoveFromCart(cartitem.id)} className="w-5 h-5 text-red-600 hover:text-red-400 cursor-pointer" />
                          </td>
                        </tr>
                      ))
                      :
                      <tr className="w-full h-fit">
                        <td className="w-full h-fit font-sans font-[600] text-[14px] leading-5 text-center text-slate-400 px-2 py-8">No Items in Cart</td>
                      </tr>
                  }
                </tbody>
              </table>
            </div>
            {
              cart.length > 0 &&
              <div className="flex w-full h-fit justify-end px-2 py-3 border-r border-gray-300">
                <div className="flex flex-col w-fit h-fit">
                  <div className="flex w-[270px] h-fit justify-between px-1 py-2 border-t border-gray-300">
                    <span className="w-fit h-fit font-sans font-[600] text-[12px] leading-5 text-slate-500">Subtotal</span>
                    <span className="w-fit h-fit font-sans font-[600] text-[15px] leading-5 text-slate-500">${cart.reduce((acc, item) => acc + item.total, 0)}</span>
                  </div>
                  <div className="flex w-[270px] h-fit justify-between px-1 py-2 border-t border-gray-300">
                    <span className="w-fit h-fit font-sans font-[600] text-[12px] leading-5 text-slate-500">TAX</span>
                    <span className="w-fit h-fit font-sans font-[600] text-[15px] leading-5 text-slate-500">${((cart.reduce((acc, item) => acc + item.total, 0)) * 0.01).toFixed(2)}</span>
                  </div>
                  <div className="flex w-[270px] h-fit justify-between px-1 py-2 border-t border-gray-300">
                    <span className="w-fit h-fit font-sans font-[600] text-[12px] leading-5 text-slate-500">Shipping</span>
                    <span className="w-fit h-fit font-sans font-[600] text-[15px] leading-5 text-slate-500">$6.00</span>
                  </div>
                  <div className="flex w-[270px] h-fit justify-between px-1 py-2 border-t border-gray-300">
                    <span className="w-fit h-fit font-sans font-[600] text-[12px] leading-5 text-slate-500">Discount on Cart</span>
                    <span className="w-fit h-fit font-sans font-[600] text-[15px] leading-5 text-slate-500">$10.00</span>
                  </div>
                </div>
              </div>
            }
            <div className="flex w-full h-fit px-3">
              <div className="flex w-full h-fit justify-between items-center px-1 py-3 bg-blue-50 text-[#5C6AC4]">
                <p className="w-fit h-fit font-sans font-[600] text-[12px] leading-5 px-2">Products Count&#40;{cart.reduce((count, item) => count + item.quantity, 0)}&#41;</p>
                <div className="flex w-[270px] h-fit justify-between px-1 py-1">
                  <span className="w-fit h-fit font-sans font-[600] text-[17px] leading-5">Total</span>
                  <span className="w-fit h-fit font-sans font-[600] text-[18px] leading-5">${total}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-full h-fit px-3 py-2 gap-5 font-sans font-[600] text-[15px] min-[741px]:text-[17px] leading-6">
              <button className="flex justify-center items-center w-fit h-fit grow px-3 py-2 bg-red-50">
                <span className="flex items-center w-fit h-fit text-red-500">Cancel</span>
              </button>
              <button className="flex justify-center items-center w-fit h-fit grow px-3 py-2 bg-violet-50">
                <span className="flex items-center w-fit h-fit text-violet-500">Hold</span>
              </button>
              <button className="flex justify-center items-center w-fit h-fit grow px-3 py-2 bg-violet-50">
                <span className="flex items-center w-fit h-fit text-violet-500">Discount</span>
              </button>
              <button className="flex justify-center items-center w-fit h-fit grow px-3 py-2 bg-blue-50">
                <span className="flex items-center w-fit h-fit text-[#5C6AC4]">Pay Now</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full min-[981px]:w-[55%] h-fit">
            <div className="flex w-full h-fit items-center font-sans font-[600] text-[14px] leading-5 bg-slate-100 max-[980px]:pl-[64px]">
              <button className="flex w-fit h-fit px-3 py-4 hover:bg-gray-200 transition duration-300">
                <IoSearchSharp className="inline w-5 h-5 text-slate-600" />
              </button>
              <div className="flex w-full h-fit">
                <input type="text" placeholder="Search Products..." className="w-full h-[52px] px-3 py-2 font-[500] text-slate-700 leading-6 placeholder:text-slate-400 placeholder:font-[500] focus:outline-0 focus:bg-slate-50 transition duration-200" />
              </div>
            </div>
            <div className="flex justify-center w-full h-fit px-2 py-3 border-2 border-gray-300">
              <div className="w-fit min-[1350px]:w-full h-fit grid justify-items-center grid-cols-[repeat(1,_minmax(0px,_1fr))] min-[520px]:grid-cols-[repeat(2,_minmax(0px,_1fr))] min-[741px]:grid-cols-[repeat(3,_minmax(0px,_1fr))] min-[981px]:grid-cols-[repeat(4,_minmax(0px,_1fr))] min-[1251px]:grid-cols-[repeat(5,_minmax(0px,_1fr))] gap-[20px]">
                {
                  products.map((product, index) => (
                    <div key={`p_${index}`} className="flex flex-col w-[120px] h-fit border border-gray-300 rounded-[3px]">
                      <div className="relative flex w-full h-[130px] bg-white group">
                        <img src={product.productimage} alt={product.productname} className="w-full h-full object-cover" />
                        <IoMdCart onClick={() => handleAddToCart(product)} className="absolute top-0 right-0 w-7 h-7 p-[3px] text-white invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-slate-500 rounded-bl-[4px] hover:bg-blue-600 transition duration-300" />
                      </div>
                      <div className="flex flex-col w-full h-fit px-3 py-1 bg-slate-100">
                        <span className="w-full h-fit font-sans font-[600] text-[13px] leading-4 py-1 text-center text-slate-700">${product.price}</span>
                        <span className="w-full h-fit font-sans font-[600] text-[12px] leading-4 py-1 text-center text-slate-700 truncate">{product.productname}</span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
