import React from 'react'
import { BeatLoader } from 'react-spinners'

const Loading: React.FC = () => {
    return (
        <div className="absolute z-0 flex h-screen w-screen items-center justify-center">
            <BeatLoader color="black" />
        </div>
    )
}

export default Loading
