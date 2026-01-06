export default function SearchedMovies() {
  return (
    <div className="px-5">
      <h2 className="font-[600] text-[30px]">Search results</h2>
      <div className="flex">
        <div className="w-[60%] border-r pr-8">
          <div>results for</div>
        </div>
        <div className="w-[40%] pl-8">
          <h2>Search by genre</h2>
          <p>See list of movies by genre</p>
        </div>
      </div>
    </div>
  );
}
