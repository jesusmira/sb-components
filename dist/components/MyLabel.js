import { jsx as _jsx } from "react/jsx-runtime";
import './mylabel.css';
/**
 * Primera prueba para el StoryBook, una etiqueta
 */
export const MyLabel = ({ label = 'No label', size = 'normal', color = 'primary', allCaps = false, fontColor, backgroundColor = 'transparent' }) => {
    return (_jsx("span", { className: `${size} label text-${color}`, style: { color: fontColor, backgroundColor }, children: allCaps ? label.toUpperCase() : label }));
};
