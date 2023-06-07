import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ label, size, color, allCaps, fontColor, backgroundColor }: import("../../components/MyLabel").MyLabelProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        color: {
            control: string;
        };
        fontColor: {
            control: string;
        };
        backgroundColor: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const AllCaps: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
export declare const CustomFontColor: Story;
export declare const CustomBackgroundColor: Story;
