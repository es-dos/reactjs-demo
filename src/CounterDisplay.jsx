export const CounterDisplay = ({count}) => {
  return (
    <div className>
      <p className="counter">{count}</p>
      <p className="counter-label">clicks</p>
    </div>
  );
}
