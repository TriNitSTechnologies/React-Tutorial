import { memo } from "react";

function UseCallBackDemoChild({results, onAddResults}) {
    console.log("UseCallBackDemo child");

    return (
        <div>
            <h1>UseCallBack Child {results?.length}</h1>
            <button className="btn btn-primary" onClick={onAddResults}>Add results</button>
        </div>
    )
}

export default memo(UseCallBackDemoChild);