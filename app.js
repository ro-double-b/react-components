class Item extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			done: false
		}
	}


	onListHover() {
		this.setState({
			done: !this.state.done
		})
	}

	render() {
		var style = {
			fontWeight: this.state.done ? 'bold' : 'normal'
		}

		return (
			<li style={style} onMouseOver={this.onListHover.bind(this)} >{this.props.items} </li>
		)
	}
}


var GroceryList = (props) => {

	return (
	<ul>
		{props.items.map(items =>
			<Item items={items} />
			)}
	</ul>
	)
};


var App = () => (
	<div>
		<h2>My Grocery List</h2>
		<GroceryList items={['fat', 'protein']}/>
	</div>
);

var items = ['fat', 'protein']

// var groceryItem = ['fat', 'protein']

ReactDOM.render(<App />, document.getElementById('app'));