import React, { Fragment } from 'react';

import Word from '../../components/Word/Word';
import Translation from '../../components/Translation/Translation';

const TranslationGenerator = props => {
  return (
    <Fragment>
      <section className='section-word'>
        <Word />
      </section>
      <section className='section-translation'>
        <Translation />
      </section>
    </Fragment>
  );
};

export default TranslationGenerator;
