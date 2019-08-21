import React, { Fragment } from 'react';

import Translation from '../../components/Translation/Translation';

const TranslationGenerator = props => {
  return (
    <Fragment>
      <section className='section-translation'>
        <Translation />
      </section>
    </Fragment>
  );
};

export default TranslationGenerator;
