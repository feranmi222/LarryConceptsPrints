import { useState } from 'react';
import React from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CounterUp = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div
        style={{
          width: '100%',
          background: '#ffa07a',
          marginTop: '30px',
          color: 'white',
          padding: '50px',
        }}
      >
        <h1 className="flex flex-col md:flex-row md:space-x-52 space-y-6 md:space-y-0 justify-center items-center text-center font-bold">
          <div>
            {counterOn && <CountUp start={0} end={1000} duration={1} delay={0} />}
            +
            <p>Completed Projects</p>
          </div>
          <div>
            {counterOn && <CountUp start={0} end={20} duration={2} delay={0} />}
            +
            <p>Years Of Experience</p>
          </div>
          <div>
            {counterOn && <CountUp start={0} end={300} duration={2} delay={0} />}
            +
            <p>Happy Customers</p>
          </div>
        </h1>
      </div>
    </ScrollTrigger>
  );
};

export default CounterUp;
