import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    const news = [
 
  {
    "id": 3,
    "title": "Global Oil Prices Surge Amid Rising Tensions"
  },
  {
    "id": 4,
    "title": "Tech Giant Unveils Next-Generation AI Platform"
  },
  
  {
    "id": 8,
    "title": "Stock Market Sees Record High Amid Investor Confidence"
  },
  
  
]

  return (
    <div className="flex bg-gray-200 py-2 px-3 mt-3 container mx-auto">
        <button className="btn bg-red-500 text-white ">Latest News</button>
      <Marquee pauseOnHover>
      {
        news.map((n)=>(
            <span key={n.id}>{n.title}</span>
        ))
      }
    </Marquee>  
    </div>
    
  );
};

export default BreakingNews;
