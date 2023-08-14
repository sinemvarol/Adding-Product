
import Title from "pages/title";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import React, { useState } from 'react';



const items = [
    {
      id: 0,
      name: 'İphone'
    },
    {
      id: 1,
      name: 'Samsung'
    },
    {
      id: 2,
      name: 'Huawei'
    },
    {
      id: 3,
      name: 'Xiaomi'
    },
    {
      id: 4,
      name: 'Oppo'
    },
    {
        id: 5,
        name: 'Realme'
      },
      {
        id: 6,
        name: 'Casper'
      }
  ]

  

  const handleOnSearch = (string, results) => {
    console.log(string, results)
  }


  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}> {item.name}</span>
      </>
    )
  }

  const getCategoryInfo = () => {
  
    const categoryInfo = {
      prices: {
        small: 100,
        medium: 150,
        large: 200,
      },
      extraAreas: ['item 1', 'item 2'],
    };
  
    setPrices(categoryInfo.prices);
    setExtraAreas(categoryInfo.extraAreas);
  };
  
const Product = () => {

    const [selectedCategory, setSelectedCategory] = useState(0);
    const [prices, setPrices] = useState({});
    const [extraAreas, setExtraAreas] = useState([]);

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [productCode, setProductCode] = useState('');
    const [costPrice, setCostPrice] = useState('');
    const [commission, setCommission] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [coverImg, setCoverImg] = useState('');
    const [recommended, setRecommended] = useState(false);

    const changePrice = (e, index) => {
      const currentPrices = prices;
      currentPrices[index] = e.target.value;
      setPrices(currentPrices);
    };
  


    const handleSubmit = (e) => {
      debugger;
      e.preventDefault();
      const newPhone = {
        brand,
        model,
        selectedCategory,
        productCode,
        costPrice,
        commission,
        salePrice,
        coverImg,
        recommended,
      };
      const phoneJson = JSON.stringify(newPhone, null, 2);
      console.log(phoneJson); // JSON object 
     
    };
  return (
    <form onSubmit={handleSubmit}>
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
     
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative z-50 md:w-[600px] w-[370px]  bg-white border-2 p-10 rounded-3xl">
          <Title addClass="text-[40px] text-center text-black font-serif">Add a New Phone</Title>

         
            <div className="flex flex-col text-sm mt-4 text-black">
              <span className="font-semibold mb-[2px] text-black">Marka</span>
            
            </div>

            <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
          value={brand} 
          onChange={(e) => setBrand(e.target.value)}
            items={items}
            onSearch={handleOnSearch}        
            formatResult={formatResult}
            required 
          />
        </div>
      </header>
    </div>
            <div className="flex flex-col text-sm mt-4" style={{ width: 400}}>
              <span className="font-semibold mb-[2px] text-black">Model</span>
              <input
                type="text"
                className="border-2 h-10 p-1 text-sm px-1 outline-none text-black rounded-full"
                placeholder="Write a title..."
                value={model} onChange={(e) => setModel(e.target.value)}
                required 
              />
            </div>

            <div className="flex flex-col text-sm mt-4 text-black">
              <span className="font-semibold mb-[2px] text-black">Select Category</span>
              
              <select
                className="border-2 p-1 text-sm px-1 h-10 outline-none text-black rounded-full"
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(parseInt(e.target.value))}
                placeholder="Write a title..."
                required 
              >
                <option value="0">Seçiniz</option>
                <option value="1">128gb siyah</option>
                <option value="2">128gb mavi</option>
                <option value="3">256gb siyah</option>
                <option value="4">256gb mavi</option>
                <option value="5">512gb siyah</option>
                <option value="6">512gb mavi</option>
                <option value="7">512gb beyaz</option>
              </select>
            </div>
            {selectedCategory !== 0 && (
          <div className="flex flex-col text-sm mt-4 w-full">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col text-sm mt-6">
              <span className="font-semibold mb-1 text-black">Ürün Kodu</span>
              <input
                type="text"
                className="border-2 h-10 p-1 text-sm px-1 outline-none text-black"
                value={productCode} 
                onChange={(e) => setProductCode(e.target.value)}
                placeholder="Kodu Giriniz..."
                required 
              />
            </div>
        
            <div className="flex flex-col text-sm mt-6">
              <span className="font-semibold mb-1 text-black">Alış fiyatı</span>
              <input
                    type="number"
                    className="border-b-2 p-1 pl-0 text-sm px-1 text-black outline-none w-36"
                    value={costPrice}
                    placeholder="Fiyatı Giriniz.."
                    onChange={(e) => setCostPrice(e.target.value)}
                    min="0" // Sıfır ve üzeri değerlere izin ver
                    required 

                  />
            </div>
          </div>
        
          <div className="flex flex-row justify-between">
            <div className="flex flex-col text-sm mt-6">
              <span className="font-semibold mb-1 text-black">Satıcı komisyonu</span>
              <input
                    type="number"
                    className="border-b-2 p-1 pl-0 text-sm px-1 text-black outline-none w-36"
                    placeholder="Komisyonu Giriniz.."
                    value={commission}
                    onChange={(e) => setCommission(e.target.value)}
                    min="0" // Sıfır ve üzeri değerlere izin ver
                    required 
                  />
            </div>
        
            <div className="flex flex-col text-sm mt-6">
              <span className="font-semibold mb-1 text-black">Satış fiyatı</span>
              <input
                    type="number"
                    className="border-b-2 p-1 pl-0 text-sm px-1 text-black outline-none w-36"
                    placeholder="Fiyatı Giriniz.."
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                    min="0" // Sıfır ve üzeri değerlere izin ver
                    required 
                  />
            </div>
          </div>
        
          <div className="flex flex-row justify-between items-center"> 
  <div className="flex flex-col text-sm mt-6">
    <span className="font-semibold mb-1 text-black">Fotoğraf</span>
    <input type="file" className="text-black" 
    value={coverImg}
    onChange={(e) => setCoverImg(e.target.value)}/>
    required 
  </div>

  <div className="flex flex-col text-sm mt-6">
    <span className="font-semibold mb-1 text-black">Önerilen ürün</span>
    <input
    type="checkbox"
    checked={recommended}
    className="border-b-4 p-1 pl-0 text-sm px-1 text-black outline-none w-36" 
    onChange={(e) => setRecommended(e.target.checked)}               
   />
  </div>

</div>


<div className="flex justify-end">
            <button
               type="submit" className="btn-primary !bg-success rounded-full text-white text-sm px-4 py-2 mt-6"              
              >
                Add Phone
              </button>
            </div>
        </div>
         
            )}
           
          
          </div>
        </div>
   
    </div>
    </form>   

  )
}

export default Product