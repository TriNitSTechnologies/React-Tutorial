
export default function DemoParent(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <div>{props.children}</div>


      </div>
    );
  }

