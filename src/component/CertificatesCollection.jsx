import { SquareArrowOutUpRight } from "lucide-react";

function CertificatesCollection({
  image,
  title = "Certificate Title",
  issuer = "Company name",
  date = new Date(""),
  certificateLink,
  imageWidth = 1100,
  imageHeight = 838,
}) {
  return (
    <div className="flex justify-center items-center mt-5 md:mt-0">
      <div
        className={`flex flex-col justify-center items-center mt-10 bg-linear-to-r w-auto h-auto from-gray-800/50  to-gray-700 rounded-lg px-4 py-4 `}
      >
        <div className=" md:px-3 md:py-3 h-full flex justify-center items-center animate-bounceUp rounded-lg overflow-hidden py-1">
          <div className="  w-auto  self-center h-full flex justify-center items-center rounded-lg overflow-hidden ">
            <img
              src={image}
              className="w-auto h-auto"
              width={imageWidth}
              height={imageHeight}
              loading="lazy"
              decoding="async"
              alt={title + " Certificate"}
            />
          </div>
        </div>
        <div className=" p-3 h-full flex flex-col justify-start self-start items-start  gap-4 mt-4 sm:mt-0">
          <div className="flex flex-wrap items-center justify-center">
            <h1 className="text-l text-blue-500 sm:text-2xl     font-bold jetbrains-mono-bold">
              {title}
            </h1>
          </div>
          <p className="text-[clamp(1.2rem,2vh,2rem)]  montserrat-normal text-green-400">
            {issuer} -{" "}
            {date.toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </p>

          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} certificate (PDF)`}
          >
            <button
              type="button"
              className="text-sm flex items-center gap-2 cursor-pointer bg-blue-500 p-2 rounded-2xl shadow-lg hover:bg-blue-600 hover:shadow-blue-500/50  hover:-translate-y-1 transition-all "
            >
              <SquareArrowOutUpRight width={20} /> View Certificate
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CertificatesCollection;
