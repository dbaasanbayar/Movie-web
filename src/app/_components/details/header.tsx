export const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <h2>Wicked</h2>
        <Date />
        <p>PG</p>
        <p>Duration</p>
      </div>
      <div>
        <p>rating</p>
        <p>/10</p>
        <p>rate_counted</p>
      </div>
    </div>
  );
};
