import { GrView } from "react-icons/gr";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import save from "@/assets/save.png";
import Image from "next/image";
import { BsShare } from "react-icons/bs";
const getAllNews = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );

  const news = await res.json();
  return news.data;
};

const AllNews = async ({ id }) => {
  const news = await getAllNews(id);
  console.log(news);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dragon News Home</h2>
      <div>
        {news.length > 0 ? (
          news.map((n) => (
            <div key={n._id} className="mb-6">
              <div className="shadow-sm  p-4 ">
                <div className="flex  items-center mb-4 bg-gray-100 p-4 rounded justify-between">
                  <div className="flex gap-4 items-center ">
                    <Image
                      src={n.author.img}
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className=" font-bold">{n.author.name}</p>
                      <p className="text-sm text-gray-500">
                        {n.author.published_date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={save} alt="save" />
                    <BsShare />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-700 pb-3">
                  {n.title}
                </h3>

                <Image
                  src={n.image_url}
                  alt="banner"
                  className="w-full"
                  width={300}
                  height={200}
                />
                <p className="pt-5 pb-2.5 text-lg font-bold text-gray-600">
                  {n.details}
                </p>
                <hr className="text-gray-300" />
                <div className="flex items-center justify-between pt-4">
                  <p className="flex items-center gap-2">
                    <FaStar className="text-orange-300" />
                    <FaStar className="text-orange-300" />
                    <FaStar className="text-orange-300" />
                    <FaRegStarHalfStroke /> {n.rating.number}
                  </p>
                  <p className="flex items-center gap-3 font-medium">
                    <GrView /> {n.total_view}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-2xl text-center font-medium">No News found!</h2>
        )}
      </div>
    </div>
  );
};

export default AllNews;
