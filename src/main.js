import square from './square.js';
import arrayMaxMin from './getMaxMin.js';
import umdFn from './umdfn.js';


function add(x,y){
	return x + y;
}
export default class {
	constructor(x,y){
		this.square = square;
		this.getMax = arrayMaxMin.getMax;
		this.getMin = arrayMaxMin.getMin;
		this.getMaxMin = arrayMaxMin.getMaxMin;
		this.arrayMaxMin = arrayMaxMin;
		this.add = add;
		this.umdFn = umdFn;
		this.x = x;
		this.y = y;
		this.addBack = add(x,y);
		this.squareBack = square(x);
	}
	static add() {
		return add.apply(this, arguments);
	}
}

