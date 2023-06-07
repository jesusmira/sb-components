import type { Meta, StoryObj } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";


const meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select'},
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' },
      },

}satisfies Meta<typeof MyLabel>

export default meta;
type Story = StoryObj<typeof meta>


 export const Basic: Story = { 
    args: {
        label:'No label',
        size:'normal',
        allCaps: false //true: capitalizar toda la Etiqueta 
    } 
 };
 export const AllCaps: Story = { 
    args: {
        label:'No label',
        size:'normal',
        allCaps: true
    } 
 };
 export const Secondary: Story = { 
    args: {
        label:'No label',
        size:'normal',
        color: 'secundary'
    } 
 };
 export const Tertiary: Story = { 
    args: {
        label:'No label',
        size:'normal',
        color:'tertiary'
    } 
 };

 // TODO: Tarea: CustomFontColor
 // fontColor: #5517ac
 // size: 'h1'
 export const CustomFontColor: Story = { 
    args: {
        label:'No label',
        size:'h1',
        fontColor:'#5517ac'
    } 
 };
 export const CustomBackgroundColor: Story = { 
    args: {
        label:'No label',
        size:'h1',
        fontColor:'white',
        backgroundColor:'black'
    } 
 };
