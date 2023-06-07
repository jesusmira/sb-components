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
  allCaps?:boolean;
  /**
   * Colores de la etiqueta
   */
  color?: 'primary' |'secundary' |'tertiary';
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string
  /**
   * Color de fondo personalizado de la fuente
   */
  backgroundColor?: string

}
/**
 * Primera prueba para el StoryBook, una etiqueta
 */
export const MyLabel = ( {
  label     = 'No label',
  size      = 'normal',
  color     = 'primary',
  allCaps   =  false,
  fontColor,
  backgroundColor  = 'transparent'
}: MyLabelProps) => {
  return (
    <span className={  `${ size } label text-${ color}`}
    style={{ color: fontColor, backgroundColor }} 
    >
       { allCaps ?label.toUpperCase() :  label } 
    </span>
  )
}
