import PropTypes from 'prop-types';
import React, { Component } from 'react';
import deepEqual from 'deep-equal';

type Props = {
  as?: any;
  dependencies?: any[];
  shouldUpdate?: boolean;
} & React.HTMLProps<Element> & any;

const CLASS_NAME = 'react-static-container';

export default class ReactStaticContainer extends Component<Props> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The static node name.
     */
    as: PropTypes.any,
    /**
     * The dependencies of the component.
     */
    dependencies: PropTypes.array,
    /**
     * The default should update.
     */
    shouldUpdate: PropTypes.bool
  };

  static defaultProps = {
    as: React.Fragment,
    dependencies: [],
    shouldUpdate: false
  };

  shouldComponentUpdate(inProps) {
    const { dependencies, shouldUpdate } = inProps;
    if (!deepEqual(dependencies, this.props.dependencies)) {
      return true;
    }
    return shouldUpdate;
  }

  render() {
    const { as, dependencies, shouldUpdate, ...props } = this.props;
    return React.createElement(as, props);
  }
}
