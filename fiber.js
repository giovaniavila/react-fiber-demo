class Fiber {
    constructor(type, props){
        this.type = type;
        this.props = props;
        this.child = null;
        this.sibling = null;
        this.effectTag = null;  
    }
}

export default Fiber;