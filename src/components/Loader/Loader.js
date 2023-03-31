export default function Loader(props) {
  return (
    <div className="loader">
      <div className="loader__spinner">{props.children}</div>
    </div>
  );
}