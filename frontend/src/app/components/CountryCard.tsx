export interface CountryProps {
  countryCode: string;
  name: string;
}

function CountryCard({ countryCode, name }: CountryProps) {
  return (
    <div className="container rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
      <div className="mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
        <div className="flex items-center justify-between mb-2">
          <h6 className="font-semibold text-base leading-7 text-black ">
            {name}
          </h6>
          <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
            {countryCode}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
