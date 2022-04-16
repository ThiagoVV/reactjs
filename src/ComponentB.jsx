import React from 'react'

function ComponenteA(props) {
    return (
        <div>Componente B!
            {props.children}
        </div>
    )
}

export default ComponenteA