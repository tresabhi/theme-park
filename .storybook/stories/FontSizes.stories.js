import { noDocs } from '../utilities/noDocs';
import FontSizes from './FontSizes.svelte';

export default {
  ...noDocs,
  title: 'FontSizes/Default',
  component: FontSizes,
};

const Template = (args) => ({
  Component: FontSizes,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
