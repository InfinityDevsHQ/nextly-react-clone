function cta() {
  return (
    <div className="container p-2 sm:p-4 md:p-8 lg:p-12 mx-auto ">
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-4 py-4 md:px-7 md:py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to try-out this template?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Dont let your visitors see a poor landing.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://github.com/web3templates"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Download for Free
          </a>
        </div>
      </div>
    </div>
  )
}

export default cta
