export default function FoodCard ({foodData}){
    return (
        <>
        <a href={foodData?.action.link}>
        <img  
        className="w-32 sm:w-36 md:w-40 lg:w-44 h-40 sm:h-44 md:h-50 object-cover"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}
        alt="food"
        ></img>
        </a>
        </>
    )
}