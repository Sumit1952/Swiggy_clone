export default  function Grocerycard ({foodData}){
    return(
        <div className="flex-none">
            <a href={foodData?.action.link}>
        <img  
        className="w-32 sm:w-36 md:w-40 lg:w-44 h-36 sm:h-44 md:h-50 object-cover"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId}
        alt="grocery"
        ></img>
        </a>

        <h2 className="text-center font-bold text-sm sm:text-base md:text-lg">
            {foodData?.action.text}
        </h2>

        </div>
        
    )
}