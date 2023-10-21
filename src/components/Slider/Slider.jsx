import {IconButton} from '../../ui/IconButton';
import {getId} from '../../utils/getId';
import './Slider.css';

import {useCallback, useEffect, useMemo, useRef, useState} from 'react';

export function Slider({blockName, children}) {
  const wrapper = useRef(null);
  const items = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  const scrollToCurrentElement = useCallback(() => {
    wrapper.current.scrollTo({
      left: stepWidth * currentStep,
      behavior: 'smooth',
    });
  }, [wrapper, stepWidth, currentStep]);

  const handleResize = useCallback(() => {
    if (items.current && wrapper.current) {
      const s = (scrollWidth - wrapper.current.clientWidth) / stepWidth;
      if (currentStep >= s) setCurrentStep(Math.floor(s));
      if (s !== steps) setSteps(Math.ceil(s));
    }
  }, [items, wrapper, scrollWidth, stepWidth, steps, currentStep, setSteps]);

  useEffect(() => {
    if (items.current && wrapper.current) {
      const scrollW = items.current.scrollWidth;
      const sw = scrollW / items.current.childElementCount;
      if (sw !== stepWidth) setStepWidth(sw);
      if (scrollW !== scrollWidth) setScrollWidth(scrollW);
    }
  }, [items, wrapper, children, stepWidth, scrollWidth]);

  useEffect(() => {
    scrollToCurrentElement();
  }, [currentStep, wrapper, scrollToCurrentElement]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [items, wrapper, steps, handleResize]);

  useEffect(() => {
    setCurrentStep(0);
  }, [children]);

  function next() {
    if (currentStep < steps - 1) {
      setCurrentStep(currentStep + 1);
    }
  }

  function prev() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  return (
    <div className={`${blockName}__slider slider`}>
      <IconButton
        blockName={'slider'}
        className={'control'}
        icon={'arrowInCircle'}
        ariaLabel={'Листнуть назад'}
        modifier={'prev'}
        disabled={currentStep === 0}
        onClick={prev}
      />
      <IconButton
        blockName={'slider'}
        className={'control'}
        icon={'arrowInCircle'}
        ariaLabel={'Листнуть вперёд'}
        modifier={'next'}
        onClick={next}
        disabled={currentStep + 1 >= steps}
      />
      <div className="slider__wrapper" ref={wrapper}>
        <ul className="slider__items items" ref={items}>
          {useMemo(
            () =>
              children.map(el => (
                <li className="slider__item" key={getId()}>
                  {el}
                </li>
              )),
            [children]
          )}
        </ul>
      </div>
    </div>
  );
}
