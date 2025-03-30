import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
            {props.alert && (<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">   {/* props.alert is tested first, if it is null the the rest of the process doesnot return, but if prop.alert is passed then only the rest process is returned */}
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>)
            }
    </div>
  )
}

export default Alert
