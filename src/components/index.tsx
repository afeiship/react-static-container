import PropTypes from 'prop-types';
import React, { Component } from 'react';
import deepEqual from 'deep-equal';

type Props = {
  as?: any;
  deps?: any[];
  dynamic?: boolean;
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
     * The deps of the component.
     */
    deps: PropTypes.array,
    /**
     * The default should update.
     */
    dynamic: PropTypes.bool
  };

  static defaultProps = {
    as: React.Fragment,
    deps: [],
    dynamic: false
  };

  shouldComponentUpdate(inProps) {
    const { deps, dynamic } = inProps;
    if (!deepEqual(deps, this.props.deps)) {
      return true;
    }
    return dynamic;
  }

  render() {
    const { as, deps, dynamic, ...props } = this.props;
    return React.createElement(as, props);
  }
}
