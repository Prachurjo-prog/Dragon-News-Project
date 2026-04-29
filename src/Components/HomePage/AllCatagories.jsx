import Link from "next/link";

const getCatagories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

const AllCatagories = async ({activeId}) => {
  const catagories = await getCatagories();
  
  return (
    <div>
      <h2 className="text-2xl font-bold">All Catagories</h2>
      <ul className="mt-6 flex flex-col text-center font-medium text-gray-600">
        {catagories.news_category.map((catagory) => (
          <li
            className={`${activeId === catagory.category_id && "text-red-500 bg-gray-200" } text-lg font-bold btn btn-ghost`}
            key={catagory.category_id}
          >
            <Link
              className="block"
              href={`/catagory/${catagory.category_id}`}
            >
              {catagory.category_name}
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCatagories;
