// import React from 'react';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, GridItem, Button,Image,Flex , Box, Text, Center, DarkMode } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaApple, FaInstagram, FaSlidersH } from "react-icons/fa";
import './Bestsellers.css'; // Make sure to import the CSS file


    const Bestsellers = () => { 
     
        const images = [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJSz_5_rhoq21Ron-2HmZpLJg0wPYD3wjFA&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXFwlWX_fO1bL_vG6EH5k77rJeWQfLPCgXg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08OcPvfZF1JDe0Q6IRaJ2FByiqybAe75yDw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcZujeAIw8quEr6KFKbhkuPgs1kdgTWMkSA&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNt8JudUHOm_uMNXDi39-7hvlv-qwU0p65d398q5hwjmc580qZD-bVpCfQMi7Iz7KmndE&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9f8naSVUUZPDmSHaxJsWgt9Ay1qr6eu-yruwwaprSn1Ovdez6HZbfOfAqi7DCkDoKyy0&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5goCEQfnCCTkXB1ch5rkDHWcjIwDBn6v2A&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHPrGx37aMjiIEhnqrnx6UHv--mU9O5XprQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST45lMfYOs45EpRxBf-rL9AQRHmZkL2qUiYA&s',
            'https://m.media-amazon.com/images/I/81I2RLWwwPL._AC_UY1100_.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhZ8RdbQTUxingNmDBsyXaRzi30dqsdAvJaw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVR5Ibg262rP_z9lF_37sMKKc2OmxtGJQwVw&s',
                 ];
    
        const [startIndex, setStartIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

    const handlePrev = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 8, 0));
        setAutoSlide(false);
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 8, images.length - 8));
        setAutoSlide(false);
    };

    useEffect(() => {
        if (autoSlide) {
            const interval = setInterval(() => {
                setStartIndex((prevIndex) => (prevIndex + 8 >= images.length ? 0 : prevIndex + 8));
            }, 3000); // 3 seconds interval
            return () => clearInterval(interval);
        }
    }, [autoSlide, images.length]);


   const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true, // This enables automatic scrolling
      autoplaySpeed: 1000, // 3 seconds delay
    };



    const image = [
      'https://www.codes91.org/wp-content/uploads/2024/05/aliexpress-banner-ww-jun-24.jpg',
      'https://i.ytimg.com/vi/SRdakEhawgE/maxresdefault.jpg',
      'https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b',
      
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: FaSlidersH, // Enable autoplay
      autoplaySpeed: 3000, // Time in milliseconds for each slide
    };
    


      
    
   return (
   
        <div className="bestsellers">
          <div className="features-section">
       <h1 className="heading">Better Choices, Better Prices</h1>
    
           <div className="description">
             <div className="icon">$</div>
              <div>
                 <p className="title">Value for Money</p>
                  <p>We offer competitive prices on millions of items.</p>
              </div>
            </div>
        
          <div className="description">
             <div className="icon">🌍</div>
              <div>
                 <p className="title">Shoppers Worldwide</p>
                 <p>More than 300 million shoppers from 200+ countries and regions.</p>
              </div>
           </div>
              <div className="description">
               <div className="icon">🚚</div>
               <div>
                  <p className="title">Fast Delivery</p>
               <p>Faster delivery on selected items thanks to our improved logistics.</p>
              </div>
            </div>
        
            <div className="description">
            <div className="icon">🔒</div>
              <div>
                 <p className="title">Safe Payments</p>
                 <p>Safe payment methods preferred by international shoppers.</p>
              </div>
      </div>


            
           <div className="description">
              <div className="icon">🚚</div>
               <div>
                  <p className="title">Fast Delivery</p>
                  <p>Faster delivery on selected items thanks to our improved logistics.</p>
               </div>
            </div>


            
            <div className="description">
            <div className="icon">🚚</div>
               <div>
                <p className="title">Fast Delivery</p>
                   <p>Faster delivery on selected items thanks to our improved logistics.</p>
                </div>
          </div>
          </div> 
        
         <div className='image-container'>
           <div>.</div>
         </div>  



 <Box display="flex" justifyContent="space-around" mt={7}>

      {/* Left Box */}
      <Box
        bg="blue.99"
        boxShadow="0 3px 10px rgba(0, 0, 0, 0.1)"
        borderRadius="md"
        padding={6}
        width="fit-content"
        color="white"
        marginLeft={5}
      >
        <Box display="flex" width="280px" justifyContent="space-between" gap={3} bg={'black 100'}>
          <Button colorScheme="green" size="sm">Register</Button>
          <Button colorScheme="green" size="sm">Sign In</Button>
        </Box>
        <Text textAlign="center" mt={2} color="black">
          Continue with:
        </Text>
        <Box display="flex" justifyContent="space-between" mt={4} gap={2.5} boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" p={2} borderRadius="md" bg="white">
          <FaFacebook size="1.5em" color="#3b5998" />
          <FaTwitter size="1.5em" color="#1DA1F2" />
          <FaApple size="1.5em" color="#000000" />
          <FaInstagram size="1.5em" color="#C13584" />
        </Box>


 {/* Right Box */}
 <Box
        bg="green.200"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        borderRadius="md"
        padding={6}
      
        color="white"
        marginTop={9}
      >
        <Text fontSize="xl"  mb={2} color="black">Welcome Deal</Text>
        <Text mb={4} color="black">Your Exclusive Price.</Text>
        <Box width="250px" height="160px" overflow="hidden" borderRadius="md">
          <Slider {...sliderSettings}>
            <Box>
              <img src="https://i.pinimg.com/originals/0c/23/a3/0c23a3a886b03c4eab52ad4372217c15.jpg" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
            </Box>
            <Box>
              <img src="https://www.shutterstock.com/image-photo/portrait-cute-smiling-boy-dressed-260nw-2403280001.jpg" alt="Image 2" style={{ width: '100%', height: 'auto' }} />
            </Box>
            <Box>
              <img src="https://c8.alamy.com/comp/2A9749M/punjabi-indian-and-asian-childrens-clothes-traditional-kids-dresses-and-suit-on-mannequins-in-shop-window-display-southall-london-uk-2A9749M.jpg" alt="Image 3" style={{ width: '100%', height: 'auto' }} />
            </Box>
          </Slider>
        </Box>
      </Box>
 </Box>

      
      {/* Right Box */}
<Box
  
  right={1}
  bottom={0}
  bg="yellow 150"
  boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
  borderRadius="md"
  padding={4}
  color="white"
  height="250"
>
  <Text fontSize="35" mb={2}   color="black">Bestsellers</Text>
  <Text mb={4} color="black">Get discount on popular items.</Text>
  <Flex direction="row"  gap={4}>
    <Image
      src="https://5.imimg.com/data5/EL/GV/MY-42381219/ladies-sweater.jpg"
      alt="Image 1"
      width="260px"
      height="auto"
      borderRadius="md"
    />










    
  </Flex>
</Box>








{/* Right Box */}
<Box
  
  right={1}
  bottom={0}
  bg="light.800"
  boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
  borderRadius="md"
  padding={4}
  color="white"
  height="250"
>
  <Text fontSize="35" mb={2}   color="black">Welcome Deal</Text>
  <Text mb={4} color="black">Your Exclusive Price.</Text>
  <Flex direction="row" gap={4}>
    <Image
      src="https://media.istockphoto.com/id/1435512685/photo/childrens-things-hang-on-a-hanger-in-a-clothing-store.jpg?s=612x612&w=0&k=20&c=14YFAd0nE0yTll8O6gmqpGIa8cfk_I2LsyISDAyL9G8="
      alt="Image 1"
      width="150px"
      height="auto"
      borderRadius="md"
    />
    <Image
      src="https://content.jdmagicbox.com/comp/ernakulam/d5/0484px484.x484.180705212809.x2d5/catalogue/care-kids-wear-ernakulam-95mqxd4mrb.jpg"
      alt="Image 2"
      width="150px"
      height="auto"
      borderRadius="md"
    />
    <Image
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQzA7sSi6Kv37YAnT2lWUJ5X3AsGrGgZCXw&s"
      alt="Image 3"
      width="150px"
      height="auto"
      borderRadius="md"
    />
  </Flex>
</Box>
</Box>
         







   {/* Image Slider with 8 images in 2 rows
      <Box mt={10}>
      <Box mb={2} fontSize="35"   marginLeft="50" fontWeight="bold">More to Love</Box>
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          {images.slice(0, 4).map((src, index) => (
            <GridItem key={index}>
              <Image src={src} alt={`Image ${index + 1}`} borderRadius="md" />
            </GridItem>
          ))}
        </Grid>
        <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
          {images.slice(4).map((src, index) => (
            <GridItem key={index}>
              <Image src={src} alt={`Image ${index + 5}`} borderRadius="md" />
            </GridItem>
          ))}
        </Grid>
      </Box>        */}
               <Box mt={10}>
                <Box mb={2} fontSize="35" marginLeft="50" fontWeight="bold">More to Love</Box>
                <Grid templateColumns="repeat(4, 1fr)" gap={8}>
                    {images.slice(startIndex, startIndex + 4).map((src, index) => (
                        <GridItem key={index}>
  <a href={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJSz_5_rhoq21Ron-2HmZpLJg0wPYD3wjFA&s${startIndex + index}`} target="_blank" rel="noopener noreferrer">
    <Image src={src} alt={`Image ${startIndex + index + 1}`} borderRadius="md" />
                             </a>
                            </GridItem>
                            ))}
                          </Grid>



                <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
                    {images.slice(startIndex + 4, startIndex + 8).map((src, index) => (
                        <GridItem key={index}>
                              <a href={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcZujeAIw8quEr6KFKbhkuPgs1kdgTWMkSA&s${startIndex + index}`} target="_blank" rel="noopener noreferrer">
                             <Image src={src} alt={`Image ${startIndex + index + 5}`} borderRadius="md" />
                </a>
                        </GridItem>
                    ))}
                </Grid>





                <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={4}>
                    {images.slice(startIndex + 4, startIndex + 8).map((src, index) => (
                        <GridItem key={index}>
                              <a href={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcZujeAIw8quEr6KFKbhkuPgs1kdgTWMkSA&s${startIndex + index}`} target="_blank" rel="noopener noreferrer">
                             <Image src={src} alt={`Image ${startIndex + index + 5}`} borderRadius="md" />
                </a>
                        </GridItem>
                    ))}
                </Grid>









                <Box display="flex" justifyContent="space-between" boxColor={DarkMode} mt={4}>
                    <Button onClick={handlePrev} disabled={startIndex === 0}>Previous</Button>
                    <Button onClick={handleNext} disabled={startIndex + 8 >= images.length}>Next</Button>
                </Box>
            </Box>




            <Box maxW="1500" mx="auto" my="30px">
      <Slider {...settings}>
        {image.map((src, index) => (
          <Box key={index} px="10px">
            <Image src={src} alt={`Slide ${index + 1}`} borderRadius="md" />
          </Box>
        ))}
      </Slider>
    </Box>




</div>
 
   );
};

export default Bestsellers;
