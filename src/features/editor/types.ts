import { fabric } from 'fabric';
import { ITextboxOptions } from 'fabric/fabric-impl';
import material from 'material-colors';

export const JSON_KEYS = [
  'name',
  'gradientAngle',
  'selectable',
  'hasControls',
  'linkData',
  'editable',
  'extensionType',
  'extension',
];

export const filters = [
  'none',
  'polaroid',
  'sepia',
  'kodachrome',
  'contrast',
  'brightness',
  'greyscale',
  'brownie',
  'vintage',
  'technicolor',
  'pixelate',
  'invert',
  'blur',
  'sharpen',
  'emboss',
  'removecolor',
  'blacknwhite',
  'vibrance',
  'blendcolor',
  'huerotate',
  'resize',
  'saturation',
  'gamma',
];

export const fonts = [
  'Arial',
  'Arial Black',
  'Verdana',
  'Helvetica',
  'Tahoma',
  'Trebuchet MS',
  'Times New Roman',
  'Georgia',
  'Garamond',
  'Courier New',
  'Brush Script MT',
  'Palatino',
  'Bookman',
  'Comic Sans MS',
  'Impact',
  'Lucida Sans Unicode',
  'Lucida Console',
  'Geneva',
];

export const selectionDependentTools = [
  'fill',
  'font',
  'filter',
  'opacity',
  'remove-bg',
  'stroke-color',
  'stroke-width',
];

export const colors = [
  material.red['500'],
  material.pink['500'],
  material.purple['500'],
  material.deepPurple['500'],
  material.indigo['500'],
  material.blue['500'],
  material.lightBlue['500'],
  material.cyan['500'],
  material.teal['500'],
  material.green['500'],
  material.lightGreen['500'],
  material.lime['500'],
  material.yellow['500'],
  material.amber['500'],
  material.orange['500'],
  material.deepOrange['500'],
  material.brown['500'],
  material.blueGrey['500'],
  'transparent',
];

export type ActiveTool =
  | 'select'
  | 'shapes'
  | 'text'
  | 'images'
  | 'draw'
  | 'fill'
  | 'stroke-color'
  | 'stroke-width'
  | 'font'
  | 'opacity'
  | 'filter'
  | 'settings'
  | 'ai'
  | 'remove-bg'
  | 'templates';

export const FILL_COLOR = 'rgba(0,0,0,1)';
export const STROKE_COLOR = 'rgba(0,0,0,1)';
export const STROKE_WIDTH = 2;
export const STROKE_DASH_ARRAY = [];
export const FONT_FAMILY = 'Arial';
export const FONT_SIZE = 32;
export const FONT_WEIGHT = 500;

export const CIRCLE_OPTIONS = {
  radius: 225,
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokeWidth: STROKE_WIDTH,
};

export const RECTANGLE_OPTIONS = {
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokeWidth: STROKE_WIDTH,
  width: 400,
  height: 400,
  angle: 0,
};

export const TRIANGLE_OPTIONS = {
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokeWidth: STROKE_WIDTH,
  width: 400,
  height: 400,
  angle: 0,
};

export const DIAMOND_OPTIONS = {
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  stroke: STROKE_COLOR,
  strokeWidth: STROKE_WIDTH,
  width: 400,
  height: 400,
  angle: 0,
};

export const TEXT_OPTIONS = {
  type: 'textbox',
  left: 100,
  top: 100,
  fill: FILL_COLOR,
  fontSize: FONT_SIZE,
  fontFamily: FONT_FAMILY,
};

export interface EditorHookProps {
  clearSelectionCallback?: () => void;
}

export type BuildEditorProps = {
  save: (skip?: boolean) => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
  autoZoom: () => void;
  copy: () => void;
  paste: () => void;
  canvas: fabric.Canvas;
  fillColor: string;
  fontFamily: string;
  strokeColor: string;
  strokeWidth: number;
  strokeDashArray: number[];
  selectedObjects: fabric.Object[];
  setFillColor: (color: string) => void;
  setFontFamily: (value: string) => void;
  setStrokeColor: (color: string) => void;
  setStrokeWidth: (width: number) => void;
  setStrokeDashArray: (value: number[]) => void;
};

export interface Editor {
  undo: () => void;
  redo: () => void;
  copy: () => void;
  paste: () => void;
  delete: () => void;
  canRedo: () => boolean;
  canUndo: () => boolean;
  autoZoom: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  addImage: (value: string) => void;
  addText: (value: string, options?: ITextboxOptions) => void;
  addCircle: () => void;
  addDiamond: () => void;
  addTriangle: () => void;
  addRectangle: () => void;
  addSoftRectangle: () => void;
  addInverseTriangle: () => void;
  bringForward: () => void;
  sendBackward: () => void;
  enableDrawingMode: () => void;
  disableDrawingMode: () => void;
  changeFillColor: (color: string) => void;
  changeTextAlign: (value: string) => void;
  changeFontSize: (value: number) => void;
  changeFontStyle: (value: string) => void;
  changeFontFamily: (value: string) => void;
  changeFontWeight: (value: number) => void;
  changeImageFilter: (value: string) => void;
  changeFontUnderline: (value: boolean) => void;
  changeFontLinethrough: (value: boolean) => void;
  changeStrokeWidth: (value: number) => void;
  changeStrokeColor: (color: string) => void;
  changeStrokeDashArray: (value: number[]) => void;
  changeOpacity: (value: number) => void;
  changeSize: (value: { width: number; height: number }) => void;
  changeBackground: (color: string) => void;
  getWorkspace: () => fabric.Object | undefined;
  getActiveFillColor: () => string;
  getActiveTextAlign: () => string;
  getActiveFontSize: () => number;
  getActiveFontStyle: () => string;
  getActiveFontFamily: () => string;
  getActiveFontWeight: () => number;
  getActiveFontUnderline: () => boolean;
  getActiveFontLinethrough: () => boolean;
  getActiveStrokeColor: () => string;
  getActiveStrokeWidth: () => number;
  getActiveStrokeDashArray: () => number[];
  getActiveOpacity: () => number;
  canvas: fabric.Canvas;
  selectedObjects: fabric.Object[];
}
