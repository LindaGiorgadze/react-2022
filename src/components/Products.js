import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { InView } from "react-intersection-observer";

export default function Products() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch("https://lindagiorgadze.github.io/FakeServer/products.json")
      .then((response) => response.json())
      .then((data) => setFetchedData(data.Products));
  }, []);

  return (
    <section>
      <h3>Products</h3>
      <InView
        threshold={0.8}
        rootMargin='20px 0px'
      >
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <h2>{`Header inside viewport ${inView}.`}</h2>
            <div className={`box ${inView ? 'boxAnimation' : ''}`}></div>
          </div>
        )}
      </InView>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {fetchedData.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <div className="ProductBox Slider">
                <img src={product.img} alt={product.title} />
                <h4>{product.title}</h4>
                <Link to={`${product.id}`}>Visit Product</Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
      <div className="grid">
        {fetchedData.map((item) => {
          return (
            <div key={item.id} className="ProductBox">
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <Link to={`${item.id}`}>Visit Product</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
