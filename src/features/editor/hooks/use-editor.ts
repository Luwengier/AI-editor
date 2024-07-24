import { fabric } from 'fabric';
import { useCallback } from 'react';

export const useEditor = () => {
  const init = useCallback(
    ({
      initialCanvas,
      initialContainer,
    }: {
      initialCanvas: fabric.Canvas;
      initialContainer: HTMLDivElement | null;
    }) => {
      fabric.Object.prototype.set({
        cornerColor: '#FFF',
        cornerStyle: 'circle',
        borderColor: '#3B82F6',
        borderScaleFactor: 1.5,
        transparentCorners: false,
        borderOpacityWhenMoving: 1,
        cornerStrokeColor: '#3B82F6',
      });

      const initialWorkspace = new fabric.Rect({
        width: 900,
        height: 1200,
        name: 'clip',
        fill: 'white',
        selectable: false,
        hasControls: false,
        shadow: new fabric.Shadow({
          color: 'rgba(0,0,0,0.8)',
          blur: 5,
        }),
      });

      initialCanvas.setWidth(initialContainer?.offsetWidth || 0);
      initialCanvas.setHeight(initialContainer?.offsetHeight || 0);

      initialCanvas.add(initialWorkspace);
      initialCanvas.centerObject(initialWorkspace);
      initialCanvas.clipPath = initialWorkspace;

      setCanvas(initialCanvas);
      setContainer(initialContainer);

      const test = new fabric.Rect({
        height: 100,
        width: 100,
        fill: 'black',
      });

      initialCanvas.add(test);
      initialCanvas.centerObject(test);
    },
    []
  );

  return {
    init,
  };
};