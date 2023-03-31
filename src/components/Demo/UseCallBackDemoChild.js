
function UseCallBackDemoChild({results}) {
    console.log("UseCallBackDemo child");

    return (
        <div>
            <h1>UseCallBack Child {results?.length}</h1>
            <button className="btn btn-primary">Add results</button>
        </div>
    )
}

export default UseCallBackDemoChild;