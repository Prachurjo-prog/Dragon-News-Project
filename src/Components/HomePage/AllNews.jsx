const getAllNews = async (category_id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    
    const news = await res.json()
    return news.data;
}

const AllNews = async({id}) => {
    const news = await getAllNews(id);
    console.log(news)
    return (
        <div>
            <h2>All News</h2>
            <div>
            {
             news.length > 0?  news.map(n => <div key={n._id}>{n.title}</div>) : <h2 className="text-2xl text-center font-medium">No News found!</h2>
            }
            </div>
        </div>
    );
};

export default AllNews;