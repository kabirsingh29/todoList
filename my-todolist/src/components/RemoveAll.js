import React from 'react'

function removeAllFunc(e, props) {
    props.setTask([]);
}
function RemoveAll(props) {
    return (
        <>
            <span className="removeAll_removeAll" onClick = {(e) => { removeAllFunc(e, props) }}>remove all?</span>
        </>
    );
}
export default RemoveAll;
