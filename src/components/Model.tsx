"use client";

import * as PIXI from "pixi.js";
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    PIXI: typeof PIXI;
  }
}
if (typeof window !== "undefined") {
  window.PIXI = PIXI;
}

export default function Model() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const init = async () => {
      if (!canvasRef.current) return;

      if (window) {
        const { Live2DModel } = await import("pixi-live2d-display/cubism4");

        const app = new PIXI.Application({
          view: canvasRef.current,
          transparent: true,
          height: window.innerHeight,
        });

        const model = await Live2DModel.from(
          "/model/Idol2_Public_ver_1.model3.json",
        );

        app.stage.addChild(model);
        model.anchor.set(0.5, 0.5);

        let scale;
        if (app.view.width / app.view.height > model.width / model.height) {
          scale = app.view.height / model.height;
        } else {
          scale = app.view.width / model.width;
        }

        model.scale.set(scale * 2.3);
        model.position.set(app.view.width / 2, app.view.height * 1.15);
      }
    };

    void init();
  });

  return <canvas ref={canvasRef}></canvas>;
}
