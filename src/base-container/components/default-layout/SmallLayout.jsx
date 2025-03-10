import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';

import messages from './messages';

const SmallLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <span className="w-100">
      {/* <div className="col-md-12 small-screen-top-stripe" /> */}
      <div>
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
          <Image className="logo-small" alt={getConfig().SITE_NAME} src={getConfig().LOGO_WHITE_URL} />
        </Hyperlink>
        <div className="d-flex align-items-center m-3.5">
          {/* <div className={classNames({ 'small-yellow-line mr-n2.5': getConfig().SITE_NAME === 'edX' })} /> */}
          <h1
            className={classNames(
              'm-0',
            )}
          >
            {formatMessage(messages['start.learning'])}{' '}
            {formatMessage(messages['with.site.name'], { siteName: getConfig().SITE_NAME })}
          </h1>
        </div>
      </div>
    </span>
  );
};

export default SmallLayout;
