import React from 'react';
class pieazo extends React.Component
{
constructor(props){
		super(props);

		this.state = { date: new Date() };
}
componentDidMount() {
	this.timerID = setInterval(()=>this.tick(), 1000);
}
tick(){
	this.setState({
		date: new Date()
	});
}
render(){
	return(
		<footer class="estructura-cuerpo">
		<h3>Es JUSTO lo que parece</h3>
		<p><em>Copyright perfectamente legal, proporcionado por Yoda (c) 2022</em></p>
		<p><em>{this.state.date.getHours()}</em><em>:</em>
		   <em>{this.state.date.getMinutes()}</em><em>:</em>
		   <em>{this.state.date.getSeconds()}</em></p>
		</footer>
	);
	}
}
export default pieazo;
