import React from 'react';
import PropTypes from 'prop-types';

class List extends React.PureComponent {
  onClickItem(item) {
    window.alert(item)
  }
  render() {
    const props = this.props;
    return (
      <ul>

        {props.items.map(
          item => props.children ? props.children(item, this.onClickItem) : props.renderItem(item, this.onClickItem)
        )}
        
      </ul>
    )
  }
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func,
  children: PropTypes.func
}

List.defaultProps = {
  renderItem: (item, handleClick) => (
    <li onClick={() => handleClick(item)}>{item}</li>
  ),
  children: undefined
}

export default List;
