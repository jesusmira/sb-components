import './mylabel.css';
export interface MyLabelProps {
    /**
     * Este es el mensaje que va a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño por defecto del etiqueta
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Si quieres todo Capitalizado
     */
    allCaps?: boolean;
    /**
     * Colores de la etiqueta
     */
    color?: 'primary' | 'secundary' | 'tertiary';
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
    /**
     * Color de fondo personalizado de la fuente
     */
    backgroundColor?: string;
}
/**
 * Primera prueba para el StoryBook, una etiqueta
 */
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
