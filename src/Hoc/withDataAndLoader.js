import { useEffect, useState } from "react";

export default function withDataAndLoader(Component) {
  return function WithLoader(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(props.url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, [props.url]);

    if (loading) {
      return <div className="">Loading...</div>;
    }

    return <Component {...props} data={data} />;
  };
}
