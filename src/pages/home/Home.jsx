import React from 'react';
import '../home/Home.css';
import Navbar from '../../components/Navbar/Navbar';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSelector } from 'react-redux';

const fakeData = [
    {
      id:10,
      product_name : 'Play Station',
      product_image : 'https://www.designinfo.in/wp-content/uploads/nc/p/5/1/9/2/6/51926-250x250-optimized.jpg',
      product_description : 'nice quality playstation controller device',
      product_price : 860
    },
    { id:11,
        product_name : 'Samsung TV',
        product_image : 'https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-realistic-led-tv-png-image_9935631.png',
        product_description : 'large inch tv for your dream home',
        product_price : 320
      },
      {
        id:12,
        product_name : 'Poco Mobile',
        product_image : 'https://infofull.net/wp-content/uploads/2020/02/poco-x2-sp.png',
        product_description : 'nice quality poco mobile for gaming',
        product_price : 200
      },
      {
        id:13,
        product_name : 'Apple Earpods',
        product_image : 'https://www.freepnglogos.com/uploads/airpods-png/airpods-pro-airpods-what-the-difference-and-10.png',
        product_description : 'hear music with latest apple earpods',
        product_price : 200
      },
      {
        id:14,
        product_name : 'Realme Neckbands',
        product_image : 'https://5.imimg.com/data5/SELLER/Default/2023/4/298466569/FH/HK/UM/18813211/arrow-neckband-a-21.png',
        product_description : 'Quality Neckbands For Your Music Taste',
        product_price : 200
      },
      {
        id:15,
        product_name : 'Sony Alpha 3',
        product_image : 'https://alphauniverseglobal.media.zestyio.com/Alpha-Universe-Sony-Alpha-9-III-11-COB.png?width=400&height=400&fit=bounds',
        product_description : 'Capture your moments with sony brand',
        product_price : 200
      },
      {
        id:16,
        product_name : 'JBL Bang',
        product_image : 'https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw41368c09/1_JBL_PARTYBOX_110_HERO_x2.png?sw=535&sh=535',
        product_description : 'jbl quality of music in our homes',
        product_price : 200
      },
      {
        id:17,
        product_name : 'Winero Power Bank',
        product_image : 'https://png.pngtree.com/png-clipart/20211009/original/pngtree-power-supply-and-energy-charging-of-power-bank-png-image_6840742.png',
        product_description : 'power your devices anywhere everywhere',
        product_price : 200
      },
      {
        id:18,
        product_name : 'Comfort Smooth',
        product_image : 'https://www.madbananas.in/wp-content/uploads/2017/11/comfort-comfort-fabric-conditioner-fresh-800-ml.png',
        product_description : 'for smooth and silky clothes',
        product_price : 200
      },
      {
        id:19,
        product_name : 'Alexa Echo',
        product_image : 'https://cdn.bajajelectronics.com/product/6649-1.png',
        product_description : 'alexa echo makes your home smart',
        product_price : 200
      },
      {
        id:20,
        product_name : 'Alexa Brim',
        product_image : 'https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/D2gateway/spot_efd_dot_ring.png',
        product_description : 'new alexa brim with latest ai commands',
        product_price : 200
      },
      {
        id:21,
        product_name : 'Lays Salt',
        product_image : 'https://i.pinimg.com/originals/62/88/d0/6288d08f74f0826429bc77d875a9461e.png',
        product_description : 'new salt favour for your favourite potatoes',
        product_price : 200
      },
      {
        id:22,
        product_name : 'Beniq Monitor',
        product_image : 'https://pngimg.com/d/laptop_PNG5872.png',
        product_description : 'monitor for every day needs for your pc',
        product_price : 200
      },
      {
        id:23,
        product_name : 'GTA V',
        product_image : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86ae3be6-475c-4e9a-a599-44404875a55d/d6umvw5-246bc383-1240-4cb4-837c-35243849d595.png/v1/fill/w_481,h_472/grand_theft_auto_5___gta_5_cover_by_creatoricon_d6umvw5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDcyIiwicGF0aCI6IlwvZlwvODZhZTNiZTYtNDc1Yy00ZTlhLWE1OTktNDQ0MDQ4NzVhNTVkXC9kNnVtdnc1LTI0NmJjMzgzLTEyNDAtNGNiNC04MzdjLTM1MjQzODQ5ZDU5NS5wbmciLCJ3aWR0aCI6Ijw9NDgxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.gjxmtolBdtufGEz5_ONIW4ovJu99MmCJe4-Ef7tviRA',
        product_description : 'good gaming experience for game lovers',
        product_price : 200
      },
      {
        id:24,
        product_name : 'Electric Brush',
        product_image : 'https://pngimg.com/d/toothbrush_PNG122.png',
        product_description : 'quality electric tooth brush for you',
        product_price : 200
      },
      {
        id:25,
        product_name : 'Philips Trimmers',
        product_image : 'https://freepngimg.com/save/135443-philips-trimmer-beard-download-hq/900x900',
        product_description : 'trim like a pro with philips trimmers',
        product_price : 200
      },
   
]

const Home = () => {

  const searchValue = useSelector((store) => store.search.searchContent)

  return (
    <>
      <Navbar />
      <div className='home-page'>
        <div className='home-product-container'>
          {(fakeData.filter((item) => item.product_name.toLowerCase().includes(searchValue.toLowerCase()))).map((data) => {
            return <ProductCard
              product={data}
            />
          })}
        </div>
      </div>
    </>
  )
}

export default Home