import { GrView } from "react-icons/gr";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import save from "@/assets/save.png";
import Image from "next/image";
import { BsShare } from "react-icons/bs";
import Link from "next/link";


const getNewsDetails = async(news_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
    const data = await res.json();
    return data.data[0];
}

const NewsPage = async({params}) => {
    const {id} = await params;
    

    const news = await getNewsDetails(id);
    
    console.log(news)
    return (
        <div className='container mx-auto w-5xl py-10'>
            <h2 className="text-xl font-bold">Dragon News</h2>
            
          <div key={news._id} className="mb-6 mt-5">
              <div className="shadow-sm  p-4 ">
                <div className="flex  items-center mb-4 bg-gray-100 p-4 rounded justify-between">
                  <div className="flex gap-4 items-center ">
                    <Image
                      src={news.author.img}
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className=" font-bold">{news.author.name}</p>
                      <p className="text-sm text-gray-500">
                        {news.author.published_date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={save} alt="save" />
                    <BsShare />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-700 pb-3">
                  {news.title}
                </h3>

                <Image
                  src={news.image_url}
                  alt="banner"
                  className="w-full"
                  width={300}
                  height={300}
                />
                <p className="pt-5 pb-2.5 text-lg font-bold text-gray-600">
                  {news.details}
                </p>
                

                <hr className="text-gray-300" />
                <div className="flex items-center justify-between pt-4">
                  <p className="flex items-center gap-2">
                    <FaStar className="text-orange-300" />
                    <FaStar className="text-orange-300" />
                    <FaStar className="text-orange-300" />
                    <FaRegStarHalfStroke /> {news.rating.number}
                  </p>
                  <p className="flex items-center gap-3 font-medium">
                    <GrView /> {news.total_view}
                  </p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default NewsPage;