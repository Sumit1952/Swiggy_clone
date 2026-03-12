export const DineCard = ({ RestData }) => {
  const imageUrl =
    "https://dineout-media-assets.swiggy.com/swiggy/image/upload/" +
    RestData?.info?.mediaFiles?.[0]?.url;

  return (
    <div className="flex-none w-full sm:max-w-sm">
      <a target="_blank" href={RestData?.cta?.link} rel="noreferrer">
        <div className="relative w-full sm:w-80">
          <img
            className="w-full sm:w-80 h-44 sm:h-52 object-cover rounded-2xl"
            src={imageUrl}
            alt={RestData?.info?.name}
          />

          <div className="absolute bottom-0 left-0 right-0 h-20 rounded-b-2xl bg-gradient-to-t from-black/80 to-transparent"></div>

          <p className="absolute bottom-3 left-3 text-white text-base sm:text-lg font-semibold z-10">
            {RestData?.info?.name}
          </p>

          <p className="absolute bottom-3 right-3 text-white text-base sm:text-lg z-10">
            ⭐ {RestData?.info?.rating?.value}
          </p>
        </div>
      </a>
    </div>
  );
};