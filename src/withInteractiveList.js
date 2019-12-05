import React from 'react';

const withInteractiveList = (Component) => {
  return class InteractiveList extends React.PureComponent {

    onClickItem(item) {
      window.alert(item)
    }
    
    render() {
      const props = this.props;
      return (
        <ul>
  
          {props.items.map(
            item => <Component handleClick={() => this.onClickItem(item)} item={item} />
          )}
          
        </ul>
      )
    }
  
  }

}

export default withInteractiveList;
