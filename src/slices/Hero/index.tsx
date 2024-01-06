'use client';
import Bounded from '@/app/Components/Bonded';
import { Content, KeyTextField } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Shapes from './Shapes';
import Scroll from './Scroll/Scroll';
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        '.name-animation',
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.5,
          stagger: { each: 0.15, from: 'random' },
          ease: 'power4.out',
          transformOrigin: 'left top',
        }
      );
      tl.fromTo(
        '.job-title',
        { x: -100, opacity: 0, rotate: -10 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.3,
          ease: 'circ.inout',
          transformOrigin: 'left top',
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);
  const renderLetters = (name: KeyTextField, key: string) => {
    if (!name) return;
    return name.split('').map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };
  //issue --> The renderTitle Functions not working it should help to animate each letter of the tag_line(below in return) but its making the text dissapear and never come back.The functions hsould work like the renderLetters function above.The purpose of making this function is to se it as a helper to the gsap animation you can see above.
  // const renderTitle = (name: KeyTextField, key: string) => {
  //   if (!name) return;
  //   return name.split('').map((letter, index) => (
  //     <span
  //       key={index}
  //       className={`job-title job-title-${key} inline-block opacity-0`}
  //     >
  //       {letter}
  //     </span>
  //   ));
  // };
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className='grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center'>
        <Shapes />
        <div className='col-start-1 md:row-start-1'>
          <h1
            className='mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tight'
            aria-label={
              slice.primary.first_name + ' ' + slice.primary.last_name
            }
          >
            <span className='block text-[#E84545] md:text-nowrap text-nowrap  md:text-[10rem] text-[8rem] items-center md:items-start'>
              {renderLetters(slice.primary.first_name, 'first')}
            </span>
            <span className='-mt-[.2rem] block text-slate-300 text-[5rem] md:text-[6.5rem] text-nowrap md:text-nowrap'>
              {renderLetters(slice.primary.last_name, 'last')}
            </span>
          </h1>
          <span className='job-title  block bg-gradient-to-tr from-yellow-200 via-[#FF165D] to-yellow-200 bg-clip-text text-1.7xl font-bold uppercase tracking-[.2rem] text-transparent opacity-0 md:text-3xl text-nowrap'>
            {slice.primary.tag_line}
          </span>
        </div>

        {/* <Scroll /> Issue to be fixed later */}
      </div>
    </Bounded>
  );
};

export default Hero;
