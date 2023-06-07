import { MyLabel } from "../../components/MyLabel";
const meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' },
    },
};
export default meta;
export const Basic = {
    args: {
        label: 'No label',
        size: 'normal',
        allCaps: false //true: capitalizar toda la Etiqueta 
    }
};
export const AllCaps = {
    args: {
        label: 'No label',
        size: 'normal',
        allCaps: true
    }
};
export const Secondary = {
    args: {
        label: 'No label',
        size: 'normal',
        color: 'secundary'
    }
};
export const Tertiary = {
    args: {
        label: 'No label',
        size: 'normal',
        color: 'tertiary'
    }
};
// TODO: Tarea: CustomFontColor
// fontColor: #5517ac
// size: 'h1'
export const CustomFontColor = {
    args: {
        label: 'No label',
        size: 'h1',
        fontColor: '#5517ac'
    }
};
export const CustomBackgroundColor = {
    args: {
        label: 'No label',
        size: 'h1',
        fontColor: 'white',
        backgroundColor: 'black'
    }
};
