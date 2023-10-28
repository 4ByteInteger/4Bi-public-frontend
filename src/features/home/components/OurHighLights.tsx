import React, { useEffect, useRef } from "react";
import "../styles/our-highlights.scss";
import { TorchModel } from "./torch-model";

const height = 600;

const torches = [
    {
        angle: -Math.PI / 24,
        color: 'rgba(0, 0, 255, 0.307)',
        height: height / 2
    }
]

export const OurHighLights = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const torchModel = new TorchModel(canvasRef.current, torches);
        torchModel.startAnimation();
    }, [])

    return <div className="our-highlights-container">
        <canvas className="canvas" height={height} ref={canvasRef}></canvas>
        <div className="float-badge">Some text</div>
        <div className="float-badge">Some text</div>
        <div className="float-badge">Some text</div>
    </div>;
}