import Bounded from '@/app/Components/Bonded';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import Heading from './../../app/Components/Heading';
import Button from '@/app/Components/Button';
import Avatar from '@/app/Components/Avatar';
/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='grid gap-y-6 gap-x-8 md:grid-cols-[2fr,1fr]'>
        <Heading as='h1' size='xl'>
          {slice.primary.heading}
        </Heading>
        <div className='prose prose-xl prose-slate prose-invert col-start-1'>
          <PrismicRichText field={slice.primary.description} />
        </div>
        <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
        />
        <Avatar
          image={slice.primary.avatar}
          className='row-start-1 max-w-sm md:col-start-2 md:row-end-3'
        />
      </div>
    </Bounded>
  );
};

export default Biography;
